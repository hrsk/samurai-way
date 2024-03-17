import { PostType } from "../../../types";
import { Posts } from "./Posts";

type PropsType = {
    posts: PostType[]
    postText: string
    changePostText: (value: string) => void
    addPost: () => void
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
