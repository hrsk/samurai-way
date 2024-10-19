import React from 'react'
import { Post } from './post/Post'
import { PostsPropsType } from './PostsContainer'

export const Posts = (props: PostsPropsType) => {
	const refElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

	const addPost = () => {
		props.addPost()
	}

	const onChangeHandler = () => {
		const postText = refElement.current?.value
		if (postText) {
			props.changePostText(postText)
		}
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
			</ul>
			<div>
				<textarea
					value={props.newPostText}
					onChange={onChangeHandler}
					ref={refElement}
				/>
				<button onClick={addPost}>add post</button>
			</div>
		</div>
	)
}
