type InitialStateType = {
	users: UserType[]
}

export type UserType = {
	id: number
	fullName: {
		firstName: string
		lastName: string
	}
	isFollow: boolean
	status: string
	location: {
		country: string
		city: string
	}
}

const initialState: InitialStateType = {
	users: [
		{
			id: 1,
			fullName: {
				firstName: 'Yegor',
				lastName: 'Gursky',
			},
			isFollow: true,
			status: 'yo',
			location: {
				country: 'Belarus',
				city: 'Svetlogorsk',
			},
		},
		{
			id: 2,
			fullName: {
				firstName: 'Dimych',
				lastName: 'Dimych',
			},
			isFollow: true,
			status: 'yo',
			location: {
				country: 'Belarus',
				city: 'Svetlogorsk',
			},
		},
		{
			id: 3,
			fullName: {
				firstName: 'Daniel',
				lastName: 'Daniel',
			},
			isFollow: false,
			status: 'yo',
			location: {
				country: 'Belarus',
				city: 'Svetlogorsk',
			},
		},
	],
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
					user.id === action.userId ? { ...user, isFollow: true } : user
				),
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user =>
					user.id === action.userId ? { ...user, isFollow: false } : user
				),
			}
		case SHOW_MORE:
			return state
		default:
			return state
	}
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SHOW_MORE = 'SHOW_MORE'

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
	users: UserType[]
}

type ActionsType = FollowActionType | UnfollowActionType | ShowMoreActionType

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
export const showMore = (users: UserType[]): ShowMoreActionType => {
	return {
		type: SHOW_MORE,
		users,
	}
}
