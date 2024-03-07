import { ChangeEvent, createRef } from "react";
import { PostType } from "../../../state/state";
import { Post } from "./post/Post";

type PropsType = {
    posts: PostType[]
    addPost: () => void
    changePostText: (value: string) => void
    newPostText: string
}

export const Posts = (props: PropsType) => {

    const posts = props.posts.map(post => <Post key={post.id} post={post} />)

    const changePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostText(e.currentTarget.value)

    }

    const addPostHandler = () => {
        props.addPost()
        props.changePostText('')
    }

    return (
        <div>
            {posts}
            <textarea value={props.newPostText}
                onChange={changePostTextHandler} />
            <button onClick={addPostHandler}>add post</button>
        </div>
    );
}
