export type PostType = {
    id: number
    userName: string
    postText: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
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

type InitialStateType = {
    profile: ProfileResponseType
    newPostText: string
    posts: PostType[]
}

const initialState: InitialStateType = {
    profile: {} as ProfileResponseType,
    newPostText: 'new post text',
    posts: [
        {
            id: 1,
            userName: 'Dassler',
            postText:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo alias excepturi iste, quidem culpa, porro labore voluptate voluptatum nulla quae ipsam nemo exercitationem nobis unde eligendi! Beatae, consequatur doloribus.',
        },
        {
            id: 2,
            userName: 'Dassler',
            postText:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo alias excepturi iste, quidem culpa, porro labore voluptate voluptatum nulla quae ipsam nemo exercitationem nobis unde eligendi! Beatae, consequatur doloribus.',
        },
        {
            id: 3,
            userName: 'Dassler',
            postText:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo alias excepturi iste, quidem culpa, porro labore voluptate voluptatum nulla quae ipsam nemo exercitationem nobis unde eligendi! Beatae, consequatur doloribus.',
        },
    ],
}
export const profileReducer = (
    state = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 4,
                userName: 'Dassler',
                postText: state.newPostText,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case CHANGE_POST_TEXT:
            return {
                ...state,
                newPostText: action.value,
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state
    }
}

const ADD_POST = 'ADD_POST'
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type ActionsType = AddPostType | ChangePostTextType | SetUserProfileType

type AddPostType = {
    type: 'ADD_POST'
}

type ChangePostTextType = {
    type: 'CHANGE_POST_TEXT'
    value: string
}
type SetUserProfileType = {
    type: 'SET_USER_PROFILE'
    profile: ProfileResponseType
}

export const addPostAC = (): AddPostType => {
    return {
        type: ADD_POST,
    }
}

export const changePostTextAC = (value: string): ChangePostTextType => {
    return {
        type: CHANGE_POST_TEXT,
        value,
    }
}
export const setUserProfile = (profile: ProfileResponseType): SetUserProfileType => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}
