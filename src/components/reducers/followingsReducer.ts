import { Dispatch } from "redux"
import { API } from "../../api/API"
import { Nullable, UserType } from "../../types"
import { fetching } from "./appReducer"

const SET_FOLLOWINGS = 'SET_FOLLOWINGS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


type InitialStateType = {
    followings: UserType[]
    totalCount: number
    error: Nullable<string>
    currentPage: number
    pageSize: number
    isFetching: boolean
    isFollow: number[]
    status: string
}

const initialState: InitialStateType = {
    followings: [],
    totalCount: 0,
    error: null,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    isFollow: [],
    status: ''
}

export const followingsReducer = (state = initialState, action: FollowingsReducerActionsType): InitialStateType => {
    switch (action.type) {
        case SET_FOLLOWINGS: return {
            ...state, followings: [...action.followings],
            totalCount: action.totalCount,
            error: action.error
        }
        case SET_CURRENT_PAGE: return {
            ...state, currentPage: action.pageNumber
        }
        default: return state
    }
}

type SetFollowingsActionType = {
    type: 'SET_FOLLOWINGS'
    followings: UserType[]
    totalCount: number
    error: Nullable<string>
}
type SetCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE'
    pageNumber: number
}

type FollowingsReducerActionsType = SetFollowingsActionType | SetCurrentPageActionType;

export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber,
    }
}

export const setFollowings = (followings: UserType[], totalCount: number, error: string): SetFollowingsActionType => {
    return { type: SET_FOLLOWINGS, followings, totalCount, error }
}

export const getFollowings = (pageNumber: number, pageSize: number) => (dispatch: Dispatch) => {
    // dispatch(fetching(true));
    dispatch(setCurrentPage(pageNumber));
    API.getFollowings(pageNumber, pageSize)
        .then(response => {
            // dispatch(fetching(false));
            dispatch(setFollowings(response.data.items, response.data.totalCount, response.data.error));
        });
}

export const selectPage = (pageNumber: number, pageSize: number) => (dispatch: Dispatch) => {
    // dispatch(fetching(true))
    dispatch(setCurrentPage(pageNumber))
    API.getFollowings(pageNumber, pageSize)
        .then(response => {
            // dispatch(fetching(false))
            dispatch(setFollowings(response.data.items, response.data.totalCount, response.data.error))
        })
}
