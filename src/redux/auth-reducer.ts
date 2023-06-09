import {Dispatch} from "redux";
import {API} from "../api/API";
import {Nullable} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "./redux-store";

type InitialStateType = {
    isAuth: boolean;
    id: Nullable<number>;
    login: Nullable<string>;
    email: Nullable<string>;
    error: string[],
}

const initialState: InitialStateType = {
    isAuth: false,
    id: null,
    login: null,
    email: null,
    error: [],
}
export const authReducer = (state = initialState, action: AuthReducerActionType): InitialStateType => {
    switch (action.type) {
        case 'IS_AUTH':
            return {
                ...state, isAuth: action.isAuth
            }
        case 'SET_AUTH_USER_DATA':
            return {
                ...state, id: action.id, email: action.email, login: action.login
            }
        case 'SET_ERROR':
            return {...state, error: action.error}
        default:
            return state;
    }
}

type AuthReducerActionType = AuthActionType | GetAuthDataActionType | SetErrorActionType;

type AuthActionType = ReturnType<typeof authAC>;
type GetAuthDataActionType = ReturnType<typeof authUserDataAC>;
type SetErrorActionType = ReturnType<typeof setErrorAC>;

export const authAC = (isAuth: boolean) => {
    return {
        type: 'IS_AUTH',
        isAuth,
    } as const
}
export const authUserDataAC = (id: Nullable<number>, login: Nullable<string>, email: Nullable<string>) => {
    return {
        type: 'SET_AUTH_USER_DATA',
        id,
        login,
        email
    } as const
}

export const setErrorAC = (error: string[]) => {
    return {
        type: 'SET_ERROR',
        error,
    } as const
}


export const loginThunk = (email: Nullable<string>, password: Nullable<string>, rememberMe: boolean): ThunkAction<void, RootStateType, unknown, any> => (dispatch) => {
    API.login(email, password, rememberMe).then(
        res => {
            if (res.data.resultCode === 0) {
                dispatch(isAuthThunk());
            }
            if (res.data.resultCode === 1) {
                dispatch(setErrorAC(res.data.messages));
            }
        }
    )
}

export const logoutThunk = () => (dispatch: Dispatch) => {
    API.logout().then(
        res => {
            if (res.data.resultCode === 0) {
                dispatch(authUserDataAC(null, null, null));
                dispatch(authAC(false));
            }
        }
    )
}

export const isAuthThunk = () => (dispatch: Dispatch) => {
    API.auth().then(
        res => {
            if (res.data.resultCode === 0) {
                dispatch(authUserDataAC(res.data.data.id, res.data.data.login, res.data.data.email));
                dispatch(authAC(true));
            }
            if (res.data.resultCode === 1) {
                dispatch(setErrorAC(res.data.messages));
            }
        }
    )
}
