import { Dispatch } from "redux"
import { API } from "../../api/API"
import { Nullable, UserType } from "../../types"
import { fetching } from "./appReducer"

const SET_USERS = 'GET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_SUBSCRIBE = 'SET_SUBSCRIBE'
const SET_UNSUBSCRIBE = 'SET_UNSUBSCRIBE'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'
const SET_USER_STATUS = 'SET_USER_STATUS'

type InitialStateType = {
    items: UserType[]
    totalCount: number
    error: Nullable<string>
    currentPage: number
    pageSize: number
    isFetching: boolean
    isFollow: number[]
    status: string
}

export const InitialState: InitialStateType = {
    items: [],
    totalCount: 0,
    error: null,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    isFollow: [],
    status: ''
}


export const usersReducer = (state = InitialState, action: UsersReducerActionType): InitialStateType => {
    switch (action.type) {
        case SET_USERS: return {
            ...state,
            items: [...action.users],
            totalCount: action.totalCount,
            error: action.error,
        }
        case SET_CURRENT_PAGE: return {
            ...state, currentPage: action.pageNumber
        }
        case SET_SUBSCRIBE: return {
            ...state, items: state.items.map(user =>
                user.id === action.userId ? { ...user, followed: true } : user)
        }
        case SET_UNSUBSCRIBE: return {
            ...state, items: state.items.map(user =>
                user.id === action.userId ? { ...user, followed: false } : user)
        }
        case FOLLOWING_IN_PROGRESS: return {
            ...state,
            isFollow: action.isFetching
                ? [...state.isFollow, action.userId]
                : [...state.isFollow.filter(id => id !== action.userId)]
        }
        case SET_USER_STATUS: return {
            ...state, status: action.status
        }
        default: return state
    }
}

//types 

export type UsersReducerActionType = SetUsersActionType
    | SetCurrentPageActionType
    | SubscribeUserActionType
    | UnsubscribeUserActionType
    | FollowingProgressActionType
    | SetUserStatusActionType

type SetUsersActionType = {
    type: 'GET_USERS'
    users: UserType[]
    totalCount: number
    error: Nullable<string>
}

type SetCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE'
    pageNumber: number
}
type SubscribeUserActionType = {
    type: 'SET_SUBSCRIBE'
    userId: number
}
type UnsubscribeUserActionType = {
    type: 'SET_UNSUBSCRIBE'
    userId: number
}
type FollowingProgressActionType = {
    type: 'FOLLOWING_IN_PROGRESS'
    userId: number
    isFetching: boolean
}
type SetUserStatusActionType = {
    type: 'SET_USER_STATUS'
    status: string
}


//actions 

export const setUsers = (users: UserType[], totalCount: number, error: Nullable<string>): SetUsersActionType => {
    return {
        type: SET_USERS,
        users,
        totalCount,
        error,
    }
}
export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber,
    }
}
export const setSubscribeUser = (userId: number): SubscribeUserActionType => {
    return {
        type: SET_SUBSCRIBE,
        userId,
    }
}
export const setUnsubscribeUser = (userId: number): UnsubscribeUserActionType => {
    return {
        type: SET_UNSUBSCRIBE,
        userId,
    }
}
export const following = (userId: number, isFetching: boolean): FollowingProgressActionType => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        userId,
        isFetching,
    }
}
export const setUserStatus = (status: string): SetUserStatusActionType => {
    return {
        type: SET_USER_STATUS,
        status,
    }
}

//thunk creators

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    // dispatch(fetching(true));
    API.getUsers(currentPage, pageSize)
        .then(response => {
            // dispatch(fetching(false));
            dispatch(setUsers(response.data.items, response.data.totalCount, response.data.error));
        });
}

export const subscribeUser = (userId: number) => (dispatch: Dispatch) => {
    dispatch(following(userId, true))
    API.followUser(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(following(userId, false))
                dispatch(setSubscribeUser(userId))
            }
        });
}

export const unsubscribeUser = (userId: number) => (dispatch: Dispatch) => {
    dispatch(following(userId, true))
    API.unfollowUser(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(following(userId, false))
                dispatch(setUnsubscribeUser(userId))
            }
        });
}

export const selectPage = (pageNumber: number, pageSize: number) => (dispatch: Dispatch) => {
    // dispatch(fetching(true))
    dispatch(setCurrentPage(pageNumber))
    API.getUsers(pageNumber, pageSize)
        .then(response => {
            // dispatch(fetching(false))
            dispatch(setUsers(response.data.items, response.data.totalCount, response.data.error))
        })
}
// export const getUserStatus = (userId: number) => (dispatch: ThunkDispatch<AppStateType, any, any>) => {
//     // dispatch(fetching(true))
//     API.getUserStatus(userId).then((response) => {
//         if (response.data.resultCode === 0) {
//             // dispatch(fetching(false))
//             dispatch(setUserStatus(response.data))
//         }
//     }
//     )
// }

export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await API.getUserStatus(userId);
    dispatch(setUserStatus(response.data))
}

// export const changeUserStatus = (status: string) => (dispatch: ThunkDispatch<AppStateType, any, any>) => {
//     // dispatch(fetching(false))
//     API.changeUserStatus(status)
//         .then((response) => {
//             if (response.data.resultCode === 0) {
//                 dispatch(setUserStatus(response.data))
//                 // dispatch(fetching(false))
//             }
//         })
// }

export const changeUserStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await API.changeUserStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}
