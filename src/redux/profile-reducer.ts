export type PostType = {
	id: number
	userName: string
	postText: string
}

export type ProfilePageType = {
	posts: PostType[]
	newPostText: string
}

type InitialStateType = {
	newPostText: string
	posts: PostType[]
}

const initialState: InitialStateType = {
	newPostText: 'new post text',
	posts: [
		{
			id: 1,
			userName: 'Dassler',
			postText:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo alias excepturi iste, quidem culpa, porro labore voluptate voluptatum nulla quae ipsam nemo exercitationem nobis unde eligendi! Beatae, consequatur doloribus.',
		},
		{
			id: 2,
			userName: 'Dassler',
			postText:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo alias excepturi iste, quidem culpa, porro labore voluptate voluptatum nulla quae ipsam nemo exercitationem nobis unde eligendi! Beatae, consequatur doloribus.',
		},
		{
			id: 3,
			userName: 'Dassler',
			postText:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo alias excepturi iste, quidem culpa, porro labore voluptate voluptatum nulla quae ipsam nemo exercitationem nobis unde eligendi! Beatae, consequatur doloribus.',
		},
	],
}
export const profileReducer = (
	state = initialState,
	action: ActionsType
): InitialStateType => {
	switch (action.type) {
		case ADD_POST: {
			const newPost = {
				id: 4,
				userName: 'Dassler',
				postText: state.newPostText,
			}
			state.posts.push(newPost)
			state.newPostText = ''
			return state
		}
		case CHANGE_POST_TEXT: {
			state.newPostText = action.value
			return state
		}
		default:
			return state
	}
}

const ADD_POST = 'ADD_POST'
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'

export type ActionsType = AddPostType | ChangePostTextType

type AddPostType = {
	type: 'ADD_POST'
}

type ChangePostTextType = {
	type: 'CHANGE_POST_TEXT'
	value: string
}

export const addPostAC = (): AddPostType => {
	return {
		type: ADD_POST,
	}
}

export const changePostTextAC = (value: string): ChangePostTextType => {
	return {
		type: CHANGE_POST_TEXT,
		value,
	}
}
