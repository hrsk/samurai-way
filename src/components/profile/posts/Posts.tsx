import { ChangeEvent } from "react";
import { ActionsType, PostType, addPostActionCreator, changePostTextActionCreator } from "../../../store/store";
import { Post } from "./post/Post";

type PropsType = {
    posts: PostType[]
    addPost: () => void
    changePostText: (value: string) => void
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const Posts = (props: PropsType) => {

    const posts = props.posts.map(post => <Post key={post.id} post={post} />)

    const changePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.changePostText(e.currentTarget.value)
        // const value = e.currentTarget.value
        // props.dispatch({ type: 'CHANGE_POST_TEXT', value })
        props.dispatch(changePostTextActionCreator(e.currentTarget.value))
    }

    const addPostHandler = () => {
        // props.dispatch({ type: 'ADD_POST' })
        props.dispatch(addPostActionCreator())
        props.dispatch(changePostTextActionCreator(''))
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
