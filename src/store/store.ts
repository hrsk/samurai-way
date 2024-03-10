import { dialogsReducer } from "../components/reducers/dialogsReducer"
import { profileReducer } from "../components/reducers/profileReducer"

const ADD_POST = 'ADD_POST'
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'
const CHANGE_MESSAGE_TEXT = 'CHANGE_MESSAGE_TEXT'

export const store: AppStoreType = {
    _state: {
        navbar: {
            navbarItems: [
                { id: 1, title: 'Profile' },
                { id: 2, title: 'News' },
                { id: 3, title: 'Friends' },
                { id: 4, title: 'Messages' },
                { id: 5, title: 'Music' },
                { id: 6, title: 'Video' },
                { id: 7, title: 'Settings' },
            ],
        },
        messagesPage: {
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
        },
        profilePage: {
            postText: '',
            posts: [
                { id: 1, text: 'asdasdasd', likesCount: 99 },
                { id: 2, text: 'asdasdzxc', likesCount: 11 },
                { id: 3, text: 'zxccv', likesCount: 22 },
                { id: 4, text: 'cvbcvbcvb', likesCount: 3 },
                { id: 5, text: 'hgjfhjfgh', likesCount: 5 },
            ]
        },
    },
    _changePostText(value: string) {
        this._state.profilePage.postText = value
        this._renderThree(this._state)
    },
    _addPost() {
        const newPost: PostType = {
            id: 6,
            text: this._state.profilePage.postText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.postText = ''
        this._renderThree(this._state)
    },
    _changeMessageText(value: string) {
        this._state.messagesPage.messageText = value
        this._renderThree(this._state)
    },
    _sendMessage() {
        const newMessage: MessageType = {
            id: Math.random(),
            message: this._state.messagesPage.messageText,
        }
        this._state.messagesPage.messages.push(newMessage)
        this._state.messagesPage.messageText = ''
        this._renderThree(this._state)
    },
    _renderThree() {

    },
    subscribe(observer) {
        this._renderThree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionsType) {

        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.messagesPage, action)

        return this._renderThree(this._state)

        // switch (action.type) {
        //     case ADD_POST: {
        //         this._addPost()
        //         return this._state
        //     }
        //     case CHANGE_POST_TEXT: {
        //         this._changePostText(action.value)
        //         return this._state
        //     }
        //     case SEND_MESSAGE: {
        //         this._sendMessage()
        //         return this._state
        //     }
        //     case CHANGE_MESSAGE_TEXT: {
        //         this._changeMessageText(action.value)
        //         return this._state
        //     }
        //     default: return this._state
        // }
    }
}

//action type
export type ActionsType = AddPostActionType
    | ChangePostTextActionType
    | SendMessageActionType
    | ChangeMessageTextActionType

type AddPostActionType = {
    type: 'ADD_POST'
}
type ChangePostTextActionType = {
    type: 'CHANGE_POST_TEXT'
    value: string
}
type SendMessageActionType = {
    type: 'SEND_MESSAGE'
}
type ChangeMessageTextActionType = {
    type: 'CHANGE_MESSAGE_TEXT'
    value: string
}

//action creators
export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: ADD_POST
    }
}
export const changePostTextActionCreator = (value: string): ChangePostTextActionType => {
    return {
        type: CHANGE_POST_TEXT,
        value,
    }
}
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

//types
export type AppStoreType = {
    _state: AppStateType
    _renderThree: (_state: AppStateType) => void
    subscribe: (observer: () => void) => void
    getState: () => AppStateType
    _changePostText: (value: string) => void
    _addPost: () => void
    _changeMessageText: (value: string) => void
    _sendMessage: () => void
    dispatch: (action: any) => any
}
export type AppStateType = {
    navbar: NavbarType
    messagesPage: MessagesPageType
    profilePage: ProfilePageType
}

export type NavbarItemType = {
    id: number
    title: string
}
type NavbarType = {
    navbarItems: NavbarItemType[]
}

export type PostType = {
    id: number
    text: string
    likesCount: number
}

export type ProfilePageType = {
    postText: string
    posts: PostType[]
}

export type DialogType = {
    id: number
    userName: string
}
export type MessageType = {
    id: number
    message: string
}

export type MessagesPageType = {
    messageText: string
    dialogs: DialogType[]
    messages: MessageType[]
}
