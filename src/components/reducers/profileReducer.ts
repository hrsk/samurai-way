import { Dispatch } from "redux"
import { API } from "../../api/API"
import { PostType, UserProfileType } from "../../types"
import { fetching } from "./appReducer"
import { setUserStatus } from "./usersReducer"

const ADD_POST = 'ADD_POST'
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

type InitialStateType = {
    user: UserProfileType
    postText: string
    posts: PostType[]
}

const initialState: InitialStateType = {
    user: {} as UserProfileType,
    postText: '',
    posts: [
        { id: 1, text: 'asdasdasd', likesCount: 99 },
        { id: 2, text: 'asdasdzxc', likesCount: 11 },
        { id: 3, text: 'zxccv', likesCount: 22 },
        { id: 4, text: 'cvbcvbcvb', likesCount: 3 },
        { id: 5, text: 'hgjfhjfgh', likesCount: 5 },
    ],
}


export const profileReducer = (state = initialState, action: ProfileReducerActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: 6,
                text: state.postText,
                likesCount: 0,
            }
            return {
                ...state, posts: [newPost, ...state.posts], postText: ''
            }
        }
        case CHANGE_POST_TEXT: {
            return { ...state, postText: action.value }
        }
        case SET_USER_PROFILE: return {
            ...state, user: { ...action.user }
        }
        default: return state
    }
}

//types 

export type ProfileReducerActionsType = AddPostActionType | ChangePostTextActionType | GetUserProfileActionType

type AddPostActionType = {
    type: 'ADD_POST'
}
type ChangePostTextActionType = {
    type: 'CHANGE_POST_TEXT'
    value: string
}

type GetUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    user: UserProfileType
}

//actions 

export const addPost = (): AddPostActionType => {
    return {
        type: ADD_POST,
    }
}
export const changePostText = (value: string): ChangePostTextActionType => {
    return {
        type: CHANGE_POST_TEXT,
        value,
    }
}

export const setUserProfile = (user: UserProfileType) => {
    return {
        type: SET_USER_PROFILE,
        user,
    }
}

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    dispatch(fetching(false))
    API.getUser(userId)
        .then((response) => {
            dispatch(setUserProfile(response.data))
            dispatch(fetching(false))
        })
}
