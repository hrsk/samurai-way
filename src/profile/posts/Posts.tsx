import { Post } from './post/Post'

export const Posts = () => {
	return (
		<div>
			<ul>
				<Post />
				<Post />
				<Post />
				<Post />
			</ul>
			<div>
				<textarea />
				<button>add post</button>
			</div>
		</div>
	)
}
