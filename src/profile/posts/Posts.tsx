import React from 'react'
import { PostType } from '../../state/state'
import { Post } from './post/Post'

type PropsType = {
	posts: PostType[]
	// addPost: () => void
	newPostText: string
	dispatch: (action: any) => void
	// onChangeTextPost: (value: string) => void
}

export const Posts = (props: PropsType) => {
	const refElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

	const addPost = () => {
		// const postText = refElement.current?.value
		// if (postText) {
		// 	props.addPost(postText)
		// }
		// alert(postText)
		props.dispatch({ type: 'ADD_POST' })
		// props.addPost()
	}

	const onChangeHandler = () => {
		const postText = refElement.current?.value
		const action = { type: 'CHANGE_POST_TEXT', value: postText }
		props.dispatch(action)
		// if (postText) {
		// 	props.onChangeTextPost(postText)
		// }
		console.log(postText)
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
