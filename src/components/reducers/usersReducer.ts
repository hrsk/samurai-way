
const GET_USERS = 'GET_USERS'

type Nullable<T> = null | T

export type ResponseType = {

    items: UserType[]
    totalCount: number
    error: string
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: Nullable<string>
        large: Nullable<string>
    }
    followed: boolean
}


type InitialStateType = {
    items: UserType[]
    totalCount: Nullable<number>
    error: Nullable<string>
}

const initialState: InitialStateType = {
    items: [],
    totalCount: 0,
    error: null
}


export const usersReducer = (state = initialState, action: UsersReducerActionType): InitialStateType => {
    switch (action.type) {
        case GET_USERS: return {
            ...state,
            items: action.users,
            totalCount: action.totalCount,
            error: action.error,
        }
        default: return state
    }
}

//types 

export type UsersReducerActionType = GetUsersActionType

type GetUsersActionType = {
    type: 'GET_USERS'
    users: UserType[]
    totalCount: number
    error: Nullable<string>
}


//actions 

export const getUserActionCreator = (users: UserType[], totalCount: number, error: Nullable<string>): GetUsersActionType => {
    return {
        type: GET_USERS,
        users,
        totalCount,
        error,
    }
}

