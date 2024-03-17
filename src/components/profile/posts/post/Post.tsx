import { PostType } from "../../../../types";
import avatar from "./../../../../assets/avatar_images/rocket_ship_icon.png"
import style from "./Post.module.css"

type PropsType = {
    post: PostType
}

export const Post = ({ post }: PropsType) => {
    return (
        <ul className={style.ul}>
            <li className={style.li}>
                <img className={style.imgSize} src={avatar} alt="avatar" />
                <span className={style.postText}>{post.text}</span>
                <span className={style.likesCount}>{post.likesCount}</span>
            </li>
        </ul>
    );
}
