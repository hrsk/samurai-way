export type NavbarItemType = {
    id: number
    title: string
}
export type NavbarType = {
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

export type Nullable<T> = null | T

export type GetUsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export type ResponseType<T = {}> = {
    resultCode: number,
    messages: string[],
    data: T
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: Nullable<string>
        large: Nullable<string>
    }
    followed: boolean
}
