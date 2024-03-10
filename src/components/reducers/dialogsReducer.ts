import { MessageType, MessagesPageType } from "../../store/store"

export const dialogsReducer = (state: MessagesPageType, action: any): MessagesPageType => {
    switch (action.type) {
        case 'SEND_MESSAGE': {
            const newMessage: MessageType = {
                id: Math.random(),
                message: state.messageText,
            }
            state.messages.push(newMessage)
            state.messageText = ''
            return state
        }
        case 'CHANGE_MESSAGE_TEXT': {
            state.messageText = action.value
            return state
        }
        default: return state
    }
}
