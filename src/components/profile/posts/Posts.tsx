import { PostType } from "../../..";
import { Post } from "./post/Post";

type PropsType = {
    arrayPosts: PostType[]
}

export const Posts = (props: PropsType) => {

    const posts = props.arrayPosts.map(post => <Post key={post.id} post={post} />)

    return (
        <div>
            {posts}
            <textarea />
        </div>
    );
}
