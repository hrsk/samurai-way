import axios from 'axios'
import { GetResponseType, ResponseUserType } from '../reducers/users-reducer'
import { UsersPropsType } from './UsersContainer'

export const Users = (props: UsersPropsType) => {
	// const usersFromServer = [
	// 	{
	// 		id: 1,
	// 		fullName: {
	// 			firstName: 'Yegor',
	// 			lastName: 'Gursky',
	// 		},
	// 		isFollow: true,
	// 		status: 'yo',
	// 		location: {
	// 			country: 'Belarus',
	// 			city: 'Svetlogorsk',
	// 		},
	// 	},
	// 	{
	// 		id: 2,
	// 		fullName: {
	// 			firstName: 'Dimych',
	// 			lastName: 'Dimych',
	// 		},
	// 		isFollow: true,
	// 		status: 'yo',
	// 		location: {
	// 			country: 'Belarus',
	// 			city: 'Svetlogorsk',
	// 		},
	// 	},
	// 	{
	// 		id: 3,
	// 		fullName: {
	// 			firstName: 'Daniel',
	// 			lastName: 'Daniel',
	// 		},
	// 		isFollow: false,
	// 		status: 'yo',
	// 		location: {
	// 			country: 'Belarus',
	// 			city: 'Svetlogorsk',
	// 		},
	// 	},
	// 	{
	// 		id: 4,
	// 		fullName: {
	// 			firstName: 'Daniel',
	// 			lastName: 'Daniel',
	// 		},
	// 		isFollow: false,
	// 		status: 'yo',
	// 		location: {
	// 			country: 'Belarus',
	// 			city: 'Svetlogorsk',
	// 		},
	// 	},
	// 	{
	// 		id: 5,
	// 		fullName: {
	// 			firstName: 'Daniel',
	// 			lastName: 'Daniel',
	// 		},
	// 		isFollow: false,
	// 		status: 'yo',
	// 		location: {
	// 			country: 'Belarus',
	// 			city: 'Svetlogorsk',
	// 		},
	// 	},
	// 	{
	// 		id: 6,
	// 		fullName: {
	// 			firstName: 'Daniel',
	// 			lastName: 'Daniel',
	// 		},
	// 		isFollow: false,
	// 		status: 'yo',
	// 		location: {
	// 			country: 'Belarus',
	// 			city: 'Svetlogorsk',
	// 		},
	// 	},
	// ]

	const setUsers = () => {
		axios
			.get<GetResponseType>(
				`https://social-network.samuraijs.com/api/1.0/users`
			)
			.then(response => {
				props.setUsers(response.data.items)
			})
	}
	const showMore = () => {
		props.showMore(props.users)
	}

	return (
		<div>
			<button onClick={setUsers}>set users</button>
			<ul>
				{props.users.map((user: ResponseUserType) => (
					<li key={user.id}>
						<div>
							userName: <p>{user.name}</p>
							status: <p>{user.status}</p>
						</div>
						{/* <div>
							country: <p>{user.location.country}</p>
							city: <p>{user.location.city}</p>
						</div> */}
						<div>
							{user.followed ? (
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
			<button onClick={showMore}>show more</button>
		</div>
	)
}
