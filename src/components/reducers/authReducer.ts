import { Dispatch } from "redux"
import { API } from "../../api/API"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

type InitialStateType = {
    isAuth: boolean
    authData: {
        id: number | null
        email: string | null
        login: string | null
    }
}

const initialState: InitialStateType = {
    isAuth: false,
    authData: {
        id: null,
        email: null,
        login: null,
    }
}


export const authReducer = (state = initialState, action: AuthReducerActionType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: return {
            ...state, authData: { ...action.data }, isAuth: true
        }
        default: return state
    }
}

//types 

export type AuthReducerActionType = SetAuthUserDataActionType

type SetAuthUserDataActionType = {
    type: 'SET_AUTH_USER_DATA'
    data: {
        id: number
        email: string
        login: string
    }
}

//actions 

export const setAuthUserData = (data: { id: number, email: string, login: string }): SetAuthUserDataActionType => {
    return {
        type: SET_AUTH_USER_DATA,
        data,
    }
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    API.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data))
            }
        })
}