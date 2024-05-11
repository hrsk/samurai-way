import { ChangeEvent, useState } from "react";
import { PostType } from "../../../types";
import { Post } from "./post/Post";
import classes from './Posts.module.css';
import { Button } from "../../common/button/Button";

type PropsType = {
    posts: PostType[]
    addPost: (value: string) => void
    photos: {
        small: string | undefined
        large: string | undefined
    }
}

export const Posts = (props: PropsType) => {

    const [value, setValue] = useState<string>('')

    console.log('POSTS RENDERED')
    const posts = props.posts.map(post => <Post key={post.id} post={post} photos={props.photos} />)

    const changePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    const addPostHandler = () => {
        props.addPost(value)
        setValue('')
    }

    return (
        <div className={classes.postsWrapper}>
            <h3>My posts</h3>
            {posts}
            <div className={classes.textareaContainer}>
                <textarea className={classes.textarea}
                    value={value}
                    placeholder="Enter post text"
                    onChange={changePostTextHandler} />
                <Button type="button" onClick={addPostHandler}>Add Post</Button>
            </div>
        </div>
    );
}
