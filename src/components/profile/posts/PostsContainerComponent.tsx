import React from "react";
import { PostType } from "../../../types";
import { Posts } from "./Posts";

type PropsType = {
    posts: PostType[]
    // postText: string
    // changePostText: (value: string) => void
    addPost: (value: string) => void
}

export const PostsContainerComponent = React.memo((props: PropsType) => {
    console.log('POSTS CONTAINER RENDERED')

    // const changePostText = (value: string) => {
    //     props.changePostText(value)
    // }

    const addPost = (value: string) => {
        props.addPost(value)
    }

    return <Posts posts={props.posts}
        // postText={props.postText}
        addPost={addPost}
    // changePostText={changePostText}
    />
})
