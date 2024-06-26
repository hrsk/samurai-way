import { dialogsReducer } from "../components/reducers/dialogsReducer"
import { profileReducer } from "../components/reducers/profileReducer"
import { UserProfileType } from "../types"

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
            user: {} as UserProfileType,
            postText: '',
            posts: [
                { id: 1, text: 'asdasdasd', likesCount: 99 },
                { id: 2, text: 'asdasdzxc', likesCount: 11 },
                { id: 3, text: 'zxccv', likesCount: 22 },
                { id: 4, text: 'cvbcvbcvb', likesCount: 3 },
                { id: 5, text: 'hgjfhjfgh', likesCount: 5 },
            ],
            photos: {
                small: undefined,
                large: undefined
            }
        },
    },
    _renderThree() {

    },
    subscribe(observer) {
        this._renderThree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action: any) {

        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.messagesPage, action)

        return this._renderThree(this._state)

    }
}

//types
export type AppStoreType = {
    _state: AppStateType
    _renderThree: (_state: AppStateType) => void
    subscribe: (observer: () => void) => void
    getState: () => AppStateType
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
    user: UserProfileType
    postText: string
    posts: PostType[]
    photos: {
        small: string | undefined
        large: string | undefined
    }
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
