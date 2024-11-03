import {ProfileClassComponent} from "./ProfileClassComponent";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {ProfileResponseType, setUserProfile} from "../reducers/profile-reducer";

type MapStateToPropsType = {
    profile: ProfileResponseType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileResponseType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }

}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUserProfile: (profile: ProfileResponseType) => {
            dispatch(setUserProfile(profile))
        }
    }

}

export type ProfilePropsType = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, mapDispatchToProps)
export const ProfileContainer = connector(ProfileClassComponent)