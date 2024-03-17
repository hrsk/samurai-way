import { useDispatch } from "react-redux";
import { PostType } from "../../../store/store";
import { addPostActionCreator, changePostTextActionCreator } from "../../reducers/profileReducer";
import { Posts } from "./Posts";

type PropsType = {
    posts: PostType[]
    postText: string
    changePostText: (value: string) => void
    addPost: () => void
    // dispatch: (action: any) => any
}

export const PostsContainerComponent = (props: PropsType) => {

    const changePostText = (value: string) => {
        props.changePostText(value)
    }

    const addPost = () => {
        props.addPost()
    }

    return <Posts posts={props.posts}
        postText={props.postText}
        addPost={addPost}
        changePostText={changePostText} />
}
