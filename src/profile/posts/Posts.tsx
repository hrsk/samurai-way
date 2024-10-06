import { PostType } from '../..'
import { Post } from './post/Post'

type PropsType = {
	posts: PostType[]
}

export const Posts = (props: PropsType) => {
	return (
		<div>
			<ul>
				{props.posts.map(post => (
					<Post
						key={post.id}
						userName={post.userName}
						postText={post.postText}
					/>
				))}
				{/* <Post />
				<Post />
				<Post />
				<Post /> */}
			</ul>
			<div>
				<textarea />
				<button>add post</button>
			</div>
		</div>
	)
}
