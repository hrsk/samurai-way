const GET_AUTH_USER_DATA = 'GET_AUTH_USER_DATA'

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


export const appReducer = (state = initialState, action: AuthReducerActionType): InitialStateType => {
    switch (action.type) {
        case GET_AUTH_USER_DATA: return {
            ...state, authData: { ...action.data }, isAuth: true
        }
        default: return state
    }
}

//types 

export type AuthReducerActionType = GetAuthUserDataActionType

type GetAuthUserDataActionType = {
    type: 'GET_AUTH_USER_DATA'
    data: {
        id: number
        email: string
        login: string
    }
}

//actions 

export const auth = (data: { id: number, email: string, login: string }): GetAuthUserDataActionType => {
    return {
        type: GET_AUTH_USER_DATA,
        data,
    }
}
