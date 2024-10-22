import { UserType } from '../reducers/users-reducer'
import { UsersPropsType } from './UsersContainer'

export const Users = (props: UsersPropsType) => {
	return (
		<div>
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
