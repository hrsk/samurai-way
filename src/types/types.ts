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
