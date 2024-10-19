export type DialogType = {
	id: number
	userName: string
}
type MessageType = {
	id: number
	messageText: string
}

type InitialStateType = {
	dialogs: DialogType[]
	messages: MessageType[]
	newMessageText: string
}

const initialState: InitialStateType = {
	dialogs: [
		{
			id: 1,
			userName: 'Dimych',
		},
		{
			id: 2,
			userName: 'Viktor',
		},
		{
			id: 3,
			userName: 'Valera',
		},
		{
			id: 4,
			userName: 'Sveta',
		},
		{
			id: 5,
			userName: 'Igor',
		},
	],
	messages: [
		{
			id: 1,
			messageText:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
		},
		{
			id: 2,
			messageText:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
		},
		{
			id: 3,
			messageText:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
		},
		{
			id: 4,
			messageText:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quae nulla natus, voluptate asperiores facere delectus impedit perferendis molestiae sequi quibusdam corrupti deserunt sapiente in quam alias fugit quas ipsa?',
		},
	],
	newMessageText: 'hey',
}

export const dialogsReducer = (
	state = initialState,
	action: ActionsType
): InitialStateType => {
	switch (action.type) {
		case SEND_MESSAGE: {
			const newMessage: MessageType = {
				id: 7,
				messageText: state.newMessageText,
			}
			return { ...state, messages: [...state.messages, newMessage] }
		}
		case CHANGE_MESSAGE_TEXT:
			return { ...state, newMessageText: action.value }
		default:
			return state
	}
}

const SEND_MESSAGE = 'SEND_MESSAGE'
const CHANGE_MESSAGE_TEXT = 'CHANGE_MESSAGE_TEXT'

type ActionsType = SendMessageActionType | ChangeMessageTextActionType

type SendMessageActionType = {
	type: 'SEND_MESSAGE'
}

type ChangeMessageTextActionType = {
	type: 'CHANGE_MESSAGE_TEXT'
	value: string
}

export const sendMessageAC = (): SendMessageActionType => {
	return {
		type: SEND_MESSAGE,
	}
}

export const changeMessageTextAC = (
	value: string
): ChangeMessageTextActionType => {
	return {
		type: CHANGE_MESSAGE_TEXT,
		value,
	}
}
