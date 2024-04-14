import { Dispatch } from "redux"
import { API } from "../../api/API"
import { ThunkDispatch } from "redux-thunk"
import { AppStateType } from "../../store/redux-store"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_ERROR = 'SET_ERROR'

type InitialStateType = {
    isAuth: boolean
    authData: {
        id: number | null
        email: string | null
        login: string | null
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
    error: null
}


export const authReducer = (state = initialState, action: AuthReducerActionType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: return {
            ...state, authData: { ...action.data }, isAuth: true
        }
        case SET_ERROR: return {
            ...state, error: action.error
        }
        default: return state
    }
}

//types 

export type AuthReducerActionType = SetAuthUserDataActionType | SetErrorActionType

type SetAuthUserDataActionType = {
    type: 'SET_AUTH_USER_DATA'
    data: {
        id: number
        email: string
        login: string
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

export const setError = (error: string): SetErrorActionType => {
    return {
        type: SET_ERROR,
        error,
    }
}

//thunk
export const getAuthUserData = () => (dispatch: Dispatch) => {
    API.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data))
            }
        })
}

export const loginUser = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<AppStateType, any, AuthReducerActionType>) => {
    API.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                dispatch(setError(response.data.messages[0]))
            }
        })
}

export const logoutUser = () => (dispatch: ThunkDispatch<AppStateType, any, AuthReducerActionType>) => {
    API.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                dispatch(setError(response.data.messages[0]))
            }
        })
}
