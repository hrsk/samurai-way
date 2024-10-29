type InitialStateType = {
	users: ResponseUserType[]
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
					user.id === action.userId ? { ...user, followed: true } : user
				),
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user =>
					user.id === action.userId ? { ...user, followed: false } : user
				),
			}
		case SHOW_MORE:
			return { ...state, users: [...state.users, ...action.users] }
		case SET_USERS:
			return { ...state, users: action.users }
		default:
			return state
	}
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SHOW_MORE = 'SHOW_MORE'
const SET_USERS = 'SET_USERS'

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
}

type ActionsType =
	| FollowActionType
	| UnfollowActionType
	| ShowMoreActionType
	| SetUsersActionType

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
export const setUsers = (users: ResponseUserType[]): SetUsersActionType => {
	return {
		type: SET_USERS,
		users,
	}
}
