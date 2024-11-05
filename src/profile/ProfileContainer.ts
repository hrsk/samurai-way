import {ProfileClassComponent} from "./ProfileClassComponent";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {ProfileResponseType, setUserProfile} from "../reducers/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {auth} from "../reducers/auth-reducer";

type MapStateToPropsType = {
    profile: ProfileResponseType
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

// type MapDispatchToPropsType = {
//     setUserProfile: (profile: ProfileResponseType) => void
// }

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        id: state.authorizationReducer.data.id,
        email: state.authorizationReducer.data.email,
        login: state.authorizationReducer.data.login,
        isAuth: state.authorizationReducer.isAuth,
    }

}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         setUserProfile: (profile: ProfileResponseType) => {
//             dispatch(setUserProfile(profile))
//         }
//     }
//
// }


type RouteParams = {
    userId: string
}

export type ProfilePropsType = ConnectedProps<typeof connector>

export type ConnectedPropsType = ProfilePropsType & RouteComponentProps<RouteParams>

const connector = connect(mapStateToProps, {setUserProfile, auth})
export const ProfileContainer = connector(withRouter<ConnectedPropsType, typeof ProfileClassComponent>(ProfileClassComponent))