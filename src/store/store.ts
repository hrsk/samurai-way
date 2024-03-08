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
            newMessageText: '',
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
            newPostText: '',
            posts: [
                { id: 1, text: 'asdasdasd', likesCount: 99 },
                { id: 2, text: 'asdasdzxc', likesCount: 11 },
                { id: 3, text: 'zxccv', likesCount: 22 },
                { id: 4, text: 'cvbcvbcvb', likesCount: 3 },
                { id: 5, text: 'hgjfhjfgh', likesCount: 5 },
            ]
        },
    },
    changePostText(value: string) {
        this._state.profilePage.newPostText = value
        this._renderThree(this._state)
    },
    addPost() {
        const newPost: PostType = {
            id: 6,
            text: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._renderThree(this._state)
    },
    changeMessageText(value: string) {
        this._state.messagesPage.newMessageText = value
        this._renderThree(this._state)
    },
    sendMessage() {
        const newMessage: MessageType = {
            id: Math.random(),
            message: this._state.messagesPage.newMessageText,
        }
        this._state.messagesPage.messages.push(newMessage)
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
    dispatch(action: any) {
        switch (action.type) {
            case 'ADD_POST': {
                const newPost: PostType = {
                    id: 6,
                    text: this._state.profilePage.newPostText,
                    likesCount: 0,
                }
                this._state.profilePage.posts.push(newPost)
                this._renderThree(this._state)
                return this._state
            }
            case 'CHANGE_POST_TEXT': {
                this._state.profilePage.newPostText = action.value
                this._renderThree(this._state)
                return this._state
            }
            default: return this._state
        }
    }
}

export type AppStoreType = {
    _state: AppStateType
    _renderThree: (_state: AppStateType) => void
    subscribe: (observer: () => void) => void
    getState: () => AppStateType
    changePostText: (value: string) => void
    addPost: () => void
    changeMessageText: (value: string) => void
    sendMessage: () => void
    dispatch: (action: any) => AppStateType
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
    newPostText: string
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
    newMessageText: string
    dialogs: DialogType[]
    messages: MessageType[]
}
