import { profileReducer } from '../redux/profile-reducer'

export const store: AppStoreType = {
	_state: {
		profilePage: {
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
		},
		messagesPage: {
			dialogs: [
				{
					id: 1,
					userName: 'Dimych',
					messageText:
						'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
				},
				{
					id: 2,
					userName: 'Viktor',
					messageText:
						'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
				},
				{
					id: 3,
					userName: 'Valera',
					messageText:
						'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
				},
				{
					id: 4,
					userName: 'Sveta',
					messageText:
						'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
				},
				{
					id: 5,
					userName: 'Igor',
					messageText:
						'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
				},
			],
		},
	},
	_rerenderEntireThree() {},
	_subscribe(observer: () => void) {
		this._rerenderEntireThree = observer
	},
	_getState() {
		return this._state
	},
	_addPost() {
		const newPost = {
			id: 4,
			userName: 'Dassler',
			postText: this._state.profilePage.newPostText,
		}
		this._state.profilePage.posts.push(newPost)
		this._onChangeTextPost('')
		this._rerenderEntireThree()
	},
	_onChangeTextPost(value: string) {
		console.log(value)
		this._state.profilePage.newPostText = value
		this._rerenderEntireThree()
	},
	dispatch(action: ActionsType) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)

		this._rerenderEntireThree()

		// switch (action.type) {
		// 	case ADD_POST: {
		// 		return this._addPost()
		// 	}
		// 	case CHANGE_POST_TEXT: {
		// 		return this._onChangeTextPost(action.value)
		// 	}
		// }
	},
}

export type DialogType = {
	id: number
	userName: string
	messageText: string
}

export type PostType = {
	id: number
	userName: string
	postText: string
}

export type MessagesPageType = {
	dialogs: DialogType[]
}

export type ProfilePageType = {
	posts: PostType[]
	newPostText: string
}
export type StateType = {
	messagesPage: MessagesPageType
	profilePage: ProfilePageType
}

export type AppStoreType = {
	_state: any
	_getState: () => StateType
	_rerenderEntireThree: () => void
	_subscribe: (observer: () => void) => void
	_addPost: () => void
	_onChangeTextPost: (value: string) => void
	dispatch: (action: ActionsType) => void
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
