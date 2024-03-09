import { ChangeEvent } from "react";
import { ActionsType, AppStateType, PostType, addPostActionCreator, changePostTextActionCreator } from "../../../store/store";
import { Post } from "./post/Post";

type PropsType = {
    posts: PostType[]
    postText: string
    dispatch: (action: ActionsType) => AppStateType
}

export const Posts = (props: PropsType) => {

    const posts = props.posts.map(post => <Post key={post.id} post={post} />)

    const changePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changePostTextActionCreator(e.currentTarget.value))
    }

    const addPostHandler = () => {
        props.dispatch(addPostActionCreator())
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
