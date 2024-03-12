import { PostType } from "../../../store/store";
import { addPostActionCreator, changePostTextActionCreator } from "../../reducers/profileReducer";
import { Posts } from "./Posts";

type PropsType = {
    posts: PostType[]
    postText: string
    dispatch: (action: any) => any
}

export const PostsContainerComponent = (props: PropsType) => {

    const changePostText = (value: string) => {
        props.dispatch(changePostTextActionCreator(value))
    }

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    return <Posts posts={props.posts}
        postText={props.postText}
        addPost={addPost}
        changePostText={changePostText} />
}
