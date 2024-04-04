import React, { ClassAttributes } from "react";
import { AppStateType } from "../../store/redux-store";
import { ConnectedProps, connect } from "react-redux";
import { Profile } from "./Profile";
import { addPost, changePostText, getUserProfile } from "../reducers/profileReducer";
import { PostType, UserProfileType } from "../../types";
import axios from "axios";
import { fetching } from "../reducers/appReducer";
import { Preloader } from "../../features/Preloader";

export class ProfileConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    componentDidMount(): void {
        const userId = 2

        this.props.fetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.getUserProfile(response.data)
                this.props.fetching(false)
            })
    }

    changePostText = (value: string) => {
        this.props.changePostText(value)
    }

    addPost = () => {
        this.props.addPost()
    }

    render() {
        return (
            this.props.isFetching
                ? <Preloader />
                : <Profile {...this.props} />
        )
    }
}

type MapStateToPropsType = {
    posts: PostType[]
    postText: string
    userProfile: UserProfileType
    isFetching: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        postText: state.profilePage.postText,
        userProfile: state.profilePage.user,
        isFetching: state.app.isFetching,
    }
}

interface OwnProps extends ClassAttributes<ProfileConnectedComponent> { }
type PropsFromRedux = ConnectedProps<typeof connector>
export type ConnectedPropsType = MapStateToPropsType & PropsFromRedux & OwnProps

const connector = connect(mapStateToProps, { getUserProfile, changePostText, addPost, fetching });

export const ProfileContainer = connector(ProfileConnectedComponent)
