type InitialStateType = {
	users: UserType[]
}

type UserType = {
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
			id: 1,
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
			id: 1,
			fullName: {
				firstName: 'Daniel',
				lastName: 'Daniel',
			},
			isFollow: true,
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
			return state
		case UNFOLLOW:
			return state
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
	isFollow: boolean
}

type UnfollowActionType = {
	type: 'UNFOLLOW'
	isFollow: boolean
}

type ShowMoreActionType = {
	type: 'SHOW_MORE'
	users: UserType[]
}

type ActionsType = FollowActionType | UnfollowActionType | ShowMoreActionType

export const follow = (isFollow: boolean): FollowActionType => {
	return {
		type: FOLLOW,
		isFollow,
	}
}

export const unfollow = (isFollow: boolean): UnfollowActionType => {
	return {
		type: UNFOLLOW,
		isFollow,
	}
}
export const showMore = (users: UserType[]): ShowMoreActionType => {
	return {
		type: SHOW_MORE,
		users,
	}
}
