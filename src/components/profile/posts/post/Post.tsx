import { PostType } from "../../../..";
import avatar from "./../../../../assets/avatar_images/rocket_ship_icon.png"

type PropsType = {
    post: PostType
}

export const Post = ({ post }: PropsType) => {
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: "flex", alignItems: "center" }}>
                <img src={avatar} alt="avatar" style={{ width: "48px", height: "48px" }} />
                <span style={{ paddingLeft: "7px" }}>{post.text}</span>
                <span style={{ paddingLeft: "7px", color: "crimson" }}>{post.likesCount}</span>
            </li>
        </ul>
    );
}
