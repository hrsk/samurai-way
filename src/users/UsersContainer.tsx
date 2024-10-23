import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import {
	follow,
	ResponseUserType,
	setUsers,
	showMore,
	unfollow,
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
		showMore: (users: ResponseUserType[]) => {
			dispatch(showMore(users))
		},
		setUsers: (users: ResponseUserType[]) => {
			dispatch(setUsers(users))
		},
	}
}

export type UsersPropsType = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, mapDispatchToProps)
export const UsersContainer = connector(Users)
