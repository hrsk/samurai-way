import { PostType, ProfilePageType } from "../../store/store"

const ADD_POST = 'ADD_POST'
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'


export const profileReducer = (state: ProfilePageType, action: ProfileReducerActionsType): ProfilePageType => {
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
