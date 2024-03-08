import { ChangeEvent } from "react";
import { PostType } from "../../../store/store";
import { Post } from "./post/Post";

type PropsType = {
    posts: PostType[]
    addPost: () => void
    changePostText: (value: string) => void
    newPostText: string
    dispatch: (action: any) => void
}

export const Posts = (props: PropsType) => {

    const posts = props.posts.map(post => <Post key={post.id} post={post} />)

    const changePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.changePostText(e.currentTarget.value)
        const value = e.currentTarget.value
        props.dispatch({ type: 'CHANGE_POST_TEXT', value })
    }

    const addPostHandler = () => {
        props.dispatch({ type: 'ADD_POST' })
        // props.addPost()
        // props.changePostText('')
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
