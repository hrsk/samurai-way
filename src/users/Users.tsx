import { UserType } from '../reducers/users-reducer'
import { UsersPropsType } from './UsersContainer'

export const Users = (props: UsersPropsType) => {
	const usersFromServer = [
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
	]

	const setUsers = () => {
		props.setUsers(usersFromServer)
	}

	return (
		<div>
			<button onClick={setUsers}>set users</button>
			<ul>
				{props.users.map((user: UserType) => (
					<li key={user.id}>
						<div>
							firstName: <p>{user.fullName.firstName}</p>
							lastName: <p>{user.fullName.lastName}</p>
						</div>
						<div>
							country: <p>{user.location.country}</p>
							city: <p>{user.location.city}</p>
						</div>
						<div>
							{user.isFollow ? (
								<button
									onClick={() => {
										props.unfollow(user.id)
									}}
								>
									UNFOLLOW
								</button>
							) : (
								<button onClick={() => props.follow(user.id)}>FOLLOW</button>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
