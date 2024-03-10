import { MessageType, MessagesPageType } from "../../store/store"

const SEND_MESSAGE = 'SEND_MESSAGE'
const CHANGE_MESSAGE_TEXT = 'CHANGE_MESSAGE_TEXT'

export const dialogsReducer = (state: MessagesPageType, action: DialogsReducerActionsType): MessagesPageType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage: MessageType = {
                id: Math.random(),
                message: state.messageText,
            }
            state.messages.push(newMessage)
            state.messageText = ''
            return state
        }
        case CHANGE_MESSAGE_TEXT: {
            state.messageText = action.value
            return state
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

export const sendMessageActionCreator = (): SendMessageActionType => {
    return {
        type: SEND_MESSAGE
    }
}
export const changeMessageTextActionCreator = (value: string): ChangeMessageTextActionType => {
    return {
        type: CHANGE_MESSAGE_TEXT,
        value,
    }
}
