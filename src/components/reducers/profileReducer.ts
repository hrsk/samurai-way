import { PostType } from "../../store/store"

const ADD_POST = 'ADD_POST'
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'

type InitialStateType = {
    postText: string
    posts: PostType[]
}

const initialState: InitialStateType = {
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
            state.posts.push(newPost)
            state.postText = ''
            return state
        }
        case CHANGE_POST_TEXT: {
            state.postText = action.value
            return state
        }
        default: return state
    }
}

//types 

export type ProfileReducerActionsType = AddPostActionType | ChangePostTextActionType

type AddPostActionType = {
    type: 'ADD_POST'
}
type ChangePostTextActionType = {
    type: 'CHANGE_POST_TEXT'
    value: string
}

//actions 

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
