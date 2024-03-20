
const GET_USERS = 'GET_USERS'
const SELECT_PAGE = 'SELECT_PAGE'

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
    totalCount: number
    error: Nullable<string>
    currentPage: number
    pageSize: number
}

const initialState: InitialStateType = {
    items: [],
    totalCount: 0,
    error: null,
    currentPage: 1,
    pageSize: 10,
}


export const usersReducer = (state = initialState, action: UsersReducerActionType): InitialStateType => {
    switch (action.type) {
        case GET_USERS: return {
            ...state,
            items: [...action.users],
            totalCount: action.totalCount,
            error: action.error,
        }
        case SELECT_PAGE: return {
            ...state, currentPage: action.pageNumber
        }
        default: return state
    }
}

//types 

export type UsersReducerActionType = GetUsersActionType | SelectPageActionType

type GetUsersActionType = {
    type: 'GET_USERS'
    users: UserType[]
    totalCount: number
    error: Nullable<string>
}

type SelectPageActionType = {
    type: 'SELECT_PAGE'
    pageNumber: number
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
export const selectPageActionCreator = (pageNumber: number): SelectPageActionType => {
    return {
        type: SELECT_PAGE,
        pageNumber,
    }
}

