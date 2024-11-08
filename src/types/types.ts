export type PostType = {
    id: number
    userName: string
    postText: string
}

export type PhotosResponseType = {
    small: string | null
    large: string | null
}
export type ContactsResponseType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type ProfileResponseType = {
    aboutMe: string | null
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    contacts: ContactsResponseType
    photos: PhotosResponseType
}

export type GetResponseType = {
    items: ResponseUserType[]
    totalCount: number
    error: string | null
}

export type ResponseUserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}
export type AuthResponseType = {
    resultCode: number
    messages: string[]
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
}

export type DialogType = {
    id: number
    userName: string
}
export type MessageType = {
    id: number
    messageText: string
}