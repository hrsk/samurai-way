import { Post } from "./post/Post";

export type PostType = {
    id: number
    text: string
    likesCount: number
}

export const Posts = () => {

    const arrayPosts: PostType[] = [
        { id: 1, text: 'asdasdasd', likesCount: 99 },
        { id: 2, text: 'asdasdzxc', likesCount: 11 },
        { id: 3, text: 'zxccv', likesCount: 22 },
        { id: 4, text: 'cvbcvbcvb', likesCount: 3 },
        { id: 5, text: 'hgjfhjfgh', likesCount: 5 },
    ]

    const posts = arrayPosts.map(post => <Post key={post.id} post={post} />)

    return (
        <div>
            {posts}
            <textarea />
        </div>
    );
}
