import { ChangeEvent, useState } from "react";
import { PostType } from "../../../types";
import { Post } from "./post/Post";

type PropsType = {
    posts: PostType[]
    // postText: string
    addPost: (value: string) => void
    // changePostText: (value: string) => void
}

export const Posts = (props: PropsType) => {

    const [value, setValue] = useState<string>('')

    console.log('POSTS RENDERED')
    const posts = props.posts.map(post => <Post key={post.id} post={post} />)

    const changePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    const addPostHandler = () => {
        props.addPost(value)
        setValue('')
    }

    return (
        <div>
            {posts}
            <textarea value={value}
                onChange={changePostTextHandler} />
            <button onClick={addPostHandler}>add post</button>
        </div>
    );
}
