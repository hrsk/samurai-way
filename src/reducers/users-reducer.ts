type InitialStateType = {
    users: ResponseUserType[]
    totalCount: number
    error: string | null
    currentPage: number
    usersPerPage: number
}

export type GetResponseType = {
    items: ResponseUserType[]
    totalCount: number
    error: string | null
}
export type ResponseUserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}
// export type UserType = {
// 	id: number
// 	fullName: {
// 		firstName: string
// 		lastName: string
// 	}
// 	isFollow: boolean
// 	status: string
// 	location: {
// 		country: string
// 		city: string
// 	}
// }

const initialState: InitialStateType = {
    users: [],
    totalCount: 0,
    error: null,
    currentPage: 1,
    usersPerPage: 10,
}

export const usersReducer = (
    state = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.userId ? {...user, followed: true} : user
                ),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.userId ? {...user, followed: false} : user
                ),
            }
        case SHOW_MORE:
            return {...state, users: [...state.users, ...action.users]}
        case SET_USERS:
            return {...state, users: action.users, totalCount: action.totalCount}
        case SELECT_PAGE:
            return {
                ...state, currentPage: action.pageNumber
            }
        default:
            return state
    }
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SHOW_MORE = 'SHOW_MORE'
const SET_USERS = 'SET_USERS'
const SELECT_PAGE = 'SELECT_PAGE'

type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}

type UnfollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}

type ShowMoreActionType = {
    type: 'SHOW_MORE'
    users: ResponseUserType[]
}

type SetUsersActionType = {
    type: 'SET_USERS'
    users: ResponseUserType[]
    totalCount: number
}
type SelectPageActionType = {
    type: 'SELECT_PAGE'
    pageNumber: number
}

type ActionsType =
    | FollowActionType
    | UnfollowActionType
    | ShowMoreActionType
    | SetUsersActionType
    | SelectPageActionType

export const follow = (userId: number): FollowActionType => {
    return {
        type: FOLLOW,
        userId,
    }
}

export const unfollow = (userId: number): UnfollowActionType => {
    return {
        type: UNFOLLOW,
        userId,
    }
}
export const showMore = (users: ResponseUserType[]): ShowMoreActionType => {
    return {
        type: SHOW_MORE,
        users,
    }
}
export const setUsers = (users: ResponseUserType[], totalCount: number): SetUsersActionType => {
    return {
        type: SET_USERS,
        users,
        totalCount,
    }
}
export const selectPage = (pageNumber: number): SelectPageActionType => {
    return {
        type: SELECT_PAGE,
        pageNumber,
    }
}
