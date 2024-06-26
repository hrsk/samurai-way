import { Dispatch } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { API } from "../../api/API"
import { AppStateType } from "../../store/redux-store"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_ERROR = 'SET_ERROR'
const SET_LOGIN_DATA = 'SET_LOGIN_DATA'

type InitialStateType = {
    isAuth: boolean
    authData: {
        id: number | null
        email: string | null
        login: string | null
    }
    loginData: {
        email: string | null
        password: string | null
        rememberMe: boolean | null
    }
    errorMessages: string[]
}

const initialState: InitialStateType = {
    isAuth: false,
    authData: {
        id: null,
        email: null,
        login: null,
    },
    loginData: {
        email: null,
        password: null,
        rememberMe: null
    },
    errorMessages: []
}


export const authReducer = (state = initialState, action: AuthReducerActionType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: return {
            ...state, authData: { ...action.data }, isAuth: action.isAuth
        }
        case SET_ERROR: return {
            ...state, errorMessages: [action.error]
        }
        case SET_LOGIN_DATA: return {
            ...state, loginData: { email: null, password: null, rememberMe: null }
        }
        default: return state
    }
}

//types 

export type AuthReducerActionType = SetAuthUserDataActionType | SetErrorActionType | SetLoginDataActionType

type SetAuthUserDataActionType = {
    type: 'SET_AUTH_USER_DATA'
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
    isAuth: boolean
}

type SetErrorActionType = {
    type: 'SET_ERROR'
    error: string
}

type SetLoginDataActionType = {
    type: 'SET_LOGIN_DATA'
    loginData: {
        email: string | null
        password: string | null
        rememberMe: boolean | null
    }
}

//actions 

export const setAuthUserData = (data: { id: number | null, email: string | null, login: string | null }, isAuth: boolean): SetAuthUserDataActionType => {
    return {
        type: SET_AUTH_USER_DATA,
        data,
        isAuth,
    }
}

export const setError = (error: string): SetErrorActionType => {
    return {
        type: SET_ERROR,
        error,
    }
}

export const setLoginData = (loginData: { email: string | null, password: string | null, rememberMe: boolean | null }): SetLoginDataActionType => {
    return {
        type: SET_LOGIN_DATA,
        loginData,
    }
}

//thunk
// export const getAuthUserData = () => (dispatch: Dispatch) => {
//     API.authMe()
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(setAuthUserData(response.data.data))
//             }
//         })
// }
export const getAuthUserData = () => (dispatch: Dispatch) => {
    return API.authMe()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data, true))
            }
        })
}

export const loginUser = (email: string, password: string, rememberMe: boolean, isAuth: boolean) => (dispatch: ThunkDispatch<AppStateType, any, any>) => {
    API.login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                dispatch(setError(response.data.messages[0]))
            }
        })
}

export const logoutUser = (isAuth: boolean) => (dispatch: ThunkDispatch<AppStateType, any, any>) => {
    API.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setLoginData({ email: null, password: null, rememberMe: null }))
                dispatch(setAuthUserData({ id: null, email: null, login: null }, false))
            } else {
                dispatch(setError(response.data.messages[0]))
            }
        })
}
