type InitialStateType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
    isAuth: boolean
    errors: string[]
}

const initialState: InitialStateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
    errors: []
}

export type AuthResponseType = {
    resultCode: number
    messages: string[]
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
}


export const authorizationReducer = (
    state = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case AUTHORIZATION: {
            return {
                ...state, data: action.data, errors: [action.error], isAuth: action.isAuth
            }
        }

        default:
            return state
    }
}


const AUTHORIZATION = 'AUTHORIZATION'

type ActionsType = AuthActionType

type AuthActionType = {
    type: 'AUTHORIZATION'
    data: {
        id: number | null,
        email: string | null,
        login: string | null,
    }
    isAuth: boolean,
    error: string
}

export const auth = (data: {
    id: number | null, email: string | null, login: string | null
}, isAuth: boolean, error: string): AuthActionType => {
    return {
        type: AUTHORIZATION,
        data,
        isAuth,
        error,
    }
}