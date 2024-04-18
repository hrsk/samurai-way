import { ThunkAction } from "redux-thunk"
import { AppStateType } from "../../store/redux-store"
import { getAuthUserData } from "./authReducer"

const IS_FETCHING = 'IS_FETCHING'
const APP_INITIALIZING = 'APP_INITIALIZING'

type InitialStateType = {
    isFetching: boolean
    isInitialized: boolean
}

const initialState: InitialStateType = {
    isFetching: false,
    isInitialized: false
}


export const appReducer = (state = initialState, action: AppReducerActionType): InitialStateType => {
    switch (action.type) {
        case 'IS_FETCHING': return {
            ...state, isFetching: action.isFetching
        }
        case 'APP_INITIALIZING': return {
            ...state, isInitialized: action.isInitialized
        }
        default: return state
    }
}

//types 

export type AppReducerActionType = IsFetchingActionType | IsInitializedAppActionType

export type IsFetchingActionType = {
    type: 'IS_FETCHING'
    isFetching: boolean
}

export type IsInitializedAppActionType = {
    type: 'APP_INITIALIZING'
    isInitialized: boolean
}


//actions 

export const fetching = (isFetching: boolean): IsFetchingActionType => {
    return {
        type: IS_FETCHING,
        isFetching
    }
}
export const initializing = (isInitialized: boolean): IsInitializedAppActionType => {
    return {
        type: APP_INITIALIZING,
        isInitialized
    }
}

export const appInitializing = (initialized: boolean): ThunkAction<void, AppStateType, unknown, AppReducerActionType> => (dispatch) => {
    dispatch(fetching(true))
    const promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(fetching(false))
        dispatch(initializing(initialized))
        console.log(dispatch(initializing(initialized)))
    })
}
