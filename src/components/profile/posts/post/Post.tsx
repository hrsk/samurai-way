import { PostType } from "../../../../types";
import { Button } from "../../../common/button/Button";
import classes from "./Post.module.css"

type PropsType = {
    post: PostType
    photos: {
        small: string | undefined
        large: string | undefined
    }
    removePost: (postId: number) => void
}

export const Post = ({ post, photos, removePost }: PropsType) => {
    return (
        <ul className={classes.ul}>
            <li className={classes.li}>
                {photos &&
                    <img className={classes.avatar}
                        src={photos.small && photos.large}
                        alt="" />
                }
                <span className={classes.postText}>{post.text}</span>
                <span className={classes.likesCount}>{post.likesCount}</span>
                <Button className={classes.button} onClick={() => removePost(post.id)}>x</Button>
            </li>
        </ul>
    );
}
