import { ChangeEvent, useState } from "react";
import { Button } from "../../common/button/Button";
import classes from './Posts.module.css';
import { ConnectedPropsType } from "./PostsContainer";
import { Post } from "./post/Post";

interface PropsType extends ConnectedPropsType { }

export const Posts = (props: PropsType) => {

    const [value, setValue] = useState<string>('')

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
            {
                props.posts.map(post => <Post key={post.id}
                    post={post}
                    photos={props.photos}
                    removePost={props.removePost} />)
            }
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
