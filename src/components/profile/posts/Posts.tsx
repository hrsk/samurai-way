import { PostType } from "../../../state/state";
import { Post } from "./post/Post";

type PropsType = {
    posts: PostType[]
}

export const Posts = (props: PropsType) => {

    const posts = props.posts.map(post => <Post key={post.id} post={post} />)

    return (
        <div>
            {posts}
            <textarea />
        </div>
    );
}
