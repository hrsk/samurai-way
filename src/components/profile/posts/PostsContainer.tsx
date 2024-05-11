import React from "react";
import { PostType } from "../../../types";
import { Posts } from "./Posts";
import { AppStateType } from "../../../store/redux-store";
import { ConnectedProps, connect } from "react-redux";
import { addPost, removePost } from "../../reducers/profileReducer";

export class PostsConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    addPost = (value: string) => {
        this.props.addPost(value)
    }

    removePost = (postId: number) => {
        this.props.removePost(postId)
    }

    render() {
        return <Posts {...this.props} />
    }
}

type MapStateToPropsType = {
    posts: PostType[]
    photos: {
        small: string | undefined
        large: string | undefined
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        photos: state.profilePage.photos,
    }
}

type PropsFromRedux = ConnectedProps<typeof connector>
export type ConnectedPropsType = MapStateToPropsType & PropsFromRedux

const connector = connect(mapStateToProps, { addPost, removePost })

export const PostsContainer = connector(PostsConnectedComponent)
