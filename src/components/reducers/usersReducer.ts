import { Nullable, UserType } from "../../types"

const GET_USERS = 'GET_USERS'
const SELECT_PAGE = 'SELECT_PAGE'
const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'

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
        case FOLLOW_USER: return {
            ...state, items: state.items.map(user =>
                user.id === action.userId ? { ...user, followed: true } : user)
        }
        case UNFOLLOW_USER: return {
            ...state, items: state.items.map(user =>
                user.id === action.userId ? { ...user, followed: false } : user)
        }
        default: return state
    }
}

//types 

export type UsersReducerActionType = GetUsersActionType | SelectPageActionType | FollowUserActionType | UnfollowUserActionType

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
type FollowUserActionType = {
    type: 'FOLLOW_USER'
    userId: number
}
type UnfollowUserActionType = {
    type: 'UNFOLLOW_USER'
    userId: number
}


//actions 

export const getUsers = (users: UserType[], totalCount: number, error: Nullable<string>): GetUsersActionType => {
    return {
        type: GET_USERS,
        users,
        totalCount,
        error,
    }
}
export const selectPage = (pageNumber: number): SelectPageActionType => {
    return {
        type: SELECT_PAGE,
        pageNumber,
    }
}
export const followUser = (userId: number): FollowUserActionType => {
    return {
        type: FOLLOW_USER,
        userId,
    }
}
export const unfollowUser = (userId: number): UnfollowUserActionType => {
    return {
        type: UNFOLLOW_USER,
        userId,
    }
}

