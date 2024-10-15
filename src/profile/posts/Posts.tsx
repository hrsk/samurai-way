import React from 'react'
import { PostType } from '../../state/state'
// import { ActionsType, addPostAC, changePostTextAC } from '../../store/store'
import { Post } from './post/Post'

type PropsType = {
	posts: PostType[]
	// addPost: () => void
	newPostText: string
	addPost: () => void
	changePostText: (value: string) => void
	// dispatch: (action: ActionsType) => void
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
		// props.dispatch({ type: 'ADD_POST' })
		// props.dispatch(addPostAC())
		props.addPost()
		// props.addPost()
	}

	const onChangeHandler = () => {
		const postText = refElement.current?.value
		if (postText) {
			// 	props.onChangeTextPost(postText)
			// const action = { type: 'CHANGE_POST_TEXT', value: postText } as const
			// props.dispatch(action)
			props.changePostText(postText)
			// props.dispatch(changePostTextAC(postText))
		}
		// console.log(postText)
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
