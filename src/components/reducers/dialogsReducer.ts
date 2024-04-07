import { DialogType, MessageType } from "../../types"

const SEND_MESSAGE = 'SEND_MESSAGE'
const CHANGE_MESSAGE_TEXT = 'CHANGE_MESSAGE_TEXT'

type InitialStateType = {
    messageText: string
    dialogs: DialogType[]
    messages: MessageType[]
}

const initialState: InitialStateType = {
    messageText: '',
    dialogs: [
        { id: 1, userName: 'Dimych' },
        { id: 2, userName: 'Maria' },
        { id: 3, userName: 'Katya' },
        { id: 4, userName: 'Igor' },
        { id: 5, userName: 'Viktor' },
    ],
    messages: [
        { id: 1, message: 'Lorem ipsum' },
        { id: 2, message: 'Lorem ipsum' },
        { id: 3, message: 'Lorem ipsum' },
        { id: 4, message: 'Lorem ipsum' },
        { id: 5, message: 'Lorem ipsum' },
    ],
}

export const dialogsReducer = (state = initialState, action: DialogsReducerActionsType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage: MessageType = {
                id: Math.random(),
                message: state.messageText,
            }
            return { ...state, messages: [...state.messages, newMessage] }
        }
        case CHANGE_MESSAGE_TEXT: return {
            ...state, messageText: action.value
        }

        default: return state
    }
}

//types

export type DialogsReducerActionsType = SendMessageActionType | ChangeMessageTextActionType

type SendMessageActionType = {
    type: 'SEND_MESSAGE'
}
type ChangeMessageTextActionType = {
    type: 'CHANGE_MESSAGE_TEXT'
    value: string
}

//actions

export const sendMessage = (): SendMessageActionType => {
    return {
        type: SEND_MESSAGE
    }
}
export const changeMessageText = (value: string): ChangeMessageTextActionType => {
    return {
        type: CHANGE_MESSAGE_TEXT,
        value,
    }
}
