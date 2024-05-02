import { PostType } from "../../../../types";
import style from "./Post.module.css"

type PropsType = {
    post: PostType
    photos: {
        small: string | undefined
        large: string | undefined
    }
}

export const Post = ({ post, photos }: PropsType) => {
    return (
        <ul className={style.ul}>
            <li className={style.li}>
                {photos &&
                    <img className={style.avatar}
                        src={photos.small && photos.large}
                        alt="" />
                }
                <span className={style.postText}>{post.text}</span>
                <span className={style.likesCount}>{post.likesCount}</span>
                <button className={style.button} onClick={() => { }}>x</button>
            </li>
        </ul>
    );
}
