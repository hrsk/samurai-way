import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import {
	follow,
	setUsers,
	showMore,
	unfollow,
	UserType,
} from '../reducers/users-reducer'
import { AppStateType } from '../redux/redux-store'
import { Users } from './Users'

const mapStateToProps = (state: AppStateType) => {
	return {
		users: state.findUsersPage.users,
	}
}
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		follow: (userId: number) => {
			dispatch(follow(userId))
		},
		unfollow: (userId: number) => {
			dispatch(unfollow(userId))
		},
		showMore: (users: UserType[]) => {
			dispatch(showMore(users))
		},
		setUsers: (users: UserType[]) => {
			dispatch(setUsers(users))
		},
	}
}

export type UsersPropsType = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, mapDispatchToProps)
export const UsersContainer = connector(Users)
