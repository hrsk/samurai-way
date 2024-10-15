import React from 'react'
import { PostType } from '../../state/state'
import { Post } from './post/Post'

type PropsType = {
	posts: PostType[]
	newPostText: string
	addPost: () => void
	changePostText: (value: string) => void
}

export const Posts = (props: PropsType) => {
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
