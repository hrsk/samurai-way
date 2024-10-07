import React from 'react'
import { PostType } from '../../state/state'
import { Post } from './post/Post'

type PropsType = {
	posts: PostType[]
}

export const Posts = (props: PropsType) => {
	const refElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

	const addPost = () => {
		const postText = refElement.current?.value
		alert(postText)
	}

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
				<textarea ref={refElement} />
				<button onClick={addPost}>add post</button>
			</div>
		</div>
	)
}
