import React, { ClassAttributes } from "react";
import { AppStateType } from "../../store/redux-store";
import { ConnectedProps, connect } from "react-redux";
import { Profile } from "./Profile";
import { addPost, changePostText, getUserProfile } from "../reducers/profileReducer";
import { PostType } from "../../types";

export class ProfileConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    changePostText = (value: string) => {
        this.props.changePostText(value)
    }

    addPost = () => {
        this.props.addPost()
    }

    render() {
        return <Profile {...this.props} />
    }
}

type MapStateToPropsType = {
    posts: PostType[]
    postText: string

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        postText: state.profilePage.postText,
    }
}

interface OwnProps extends ClassAttributes<ProfileConnectedComponent> { }
type PropsFromRedux = ConnectedProps<typeof connector>
export type ConnectedPropsType = MapStateToPropsType & PropsFromRedux & OwnProps

const connector = connect(mapStateToProps, { getUserProfile, changePostText, addPost });

export const ProfileContainer = connector(ProfileConnectedComponent)
