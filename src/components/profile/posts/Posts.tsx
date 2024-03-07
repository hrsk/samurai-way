import { createRef } from "react";
import { PostType } from "../../../state/state";
import { Post } from "./post/Post";

type PropsType = {
    posts: PostType[]
    addPost: (value: string) => void
}

export const Posts = (props: PropsType) => {

    const posts = props.posts.map(post => <Post key={post.id} post={post} />)

    const postText = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (postText.current) {
            props.addPost(postText.current?.value)
        }
    }

    return (
        <div>
            {posts}
            <textarea ref={postText} />
            <button onClick={addPost}>add post</button>
        </div>
    );
}
