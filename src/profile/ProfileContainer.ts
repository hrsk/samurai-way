import {ProfileClassComponent} from "./ProfileClassComponent";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {getUserProfile, ProfileResponseType} from "../reducers/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {authMe} from "../reducers/auth-reducer";

type MapStateToPropsType = {
    profile: ProfileResponseType
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        id: state.authorizationReducer.data.id,
        email: state.authorizationReducer.data.email,
        login: state.authorizationReducer.data.login,
        isAuth: state.authorizationReducer.isAuth,
    }

}

type RouteParams = {
    userId: string
}

export type ProfilePropsType = ConnectedProps<typeof connector>

export type ConnectedPropsType = ProfilePropsType & RouteComponentProps<RouteParams>

const connector = connect(mapStateToProps, {authMe, getUserProfile})
export const ProfileContainer = connector(withRouter<ConnectedPropsType, typeof ProfileClassComponent>(ProfileClassComponent))