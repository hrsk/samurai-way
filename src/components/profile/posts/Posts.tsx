import { ChangeEvent } from "react";
import { PostType } from "../../../types";
import { Post } from "./post/Post";

type PropsType = {
    posts: PostType[]
    postText: string
    addPost: () => void
    changePostText: (value: string) => void
}

export const Posts = (props: PropsType) => {

    const posts = props.posts.map(post => <Post key={post.id} post={post} />)

    const changePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostText(e.currentTarget.value)
    }

    const addPostHandler = () => {
        props.addPost()
    }

    return (
        <div>
            {posts}
            <textarea value={props.postText}
                onChange={changePostTextHandler} />
            <button onClick={addPostHandler}>add post</button>
        </div>
    );
}
