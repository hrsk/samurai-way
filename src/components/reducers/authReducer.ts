import { Dispatch } from "redux"
import { API } from "../../api/API"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_LOGIN_DATA = 'SET_LOGIN_DATA'
const SET_ERROR = 'SET_ERROR'

type InitialStateType = {
    isAuth: boolean
    authData: {
        id: number | null
        email: string | null
        login: string | null
    }
    loginData: {
        userId: null | number
    }
    error: string | null
}

const initialState: InitialStateType = {
    isAuth: false,
    authData: {
        id: null,
        email: null,
        login: null,
    },
    loginData: {
        userId: null
    },
    error: null
}


export const authReducer = (state = initialState, action: AuthReducerActionType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: return {
            ...state, authData: { ...action.data }, isAuth: true
        }
        case SET_LOGIN_DATA: return {
            ...state, loginData: { ...action.data }
        }
        case SET_ERROR: return {
            ...state, error: action.error
        }
        default: return state
    }
}

//types 

export type AuthReducerActionType = SetAuthUserDataActionType | SetLoginUserDataActionType | SetErrorActionType

type SetAuthUserDataActionType = {
    type: 'SET_AUTH_USER_DATA'
    data: {
        id: number
        email: string
        login: string
    }
}
type SetLoginUserDataActionType = {
    type: 'SET_LOGIN_DATA'
    data: {
        userId: number
    }
}
type SetErrorActionType = {
    type: 'SET_ERROR'
    error: string
}

//actions 

export const setAuthUserData = (data: { id: number, email: string, login: string }): SetAuthUserDataActionType => {
    return {
        type: SET_AUTH_USER_DATA,
        data,
    }
}
export const setLoginUserData = (data: { userId: number }): SetLoginUserDataActionType => {
    return {
        type: SET_LOGIN_DATA,
        data,
    }
}
export const setError = (error: string): SetErrorActionType => {
    return {
        type: SET_ERROR,
        error,
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

export const loginUser = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    API.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setLoginUserData(response.data.data))
            } else {
                dispatch(setError(response.data.messages[0]))
            }
        })
}