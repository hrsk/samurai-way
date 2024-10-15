import { ProfilePageType } from '../store/store'

export const profileReducer = (
	state: ProfilePageType,
	action: ActionsType
): ProfilePageType => {
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
