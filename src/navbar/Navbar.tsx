import { NavLink } from 'react-router-dom'

export const Navbar = () => {
	return (
		<div className={'nav'}>
			<ul>
				<li>
					<NavLink to='/profile'>Profile</NavLink>
				</li>
				<li>
					<NavLink to='/messages'>Messages</NavLink>
				</li>
				<li>
					<NavLink to='/users'>Users</NavLink>
				</li>
				<li>
					<NavLink to='/news'>News</NavLink>
				</li>
				<li>
					<NavLink to='/music'>Music</NavLink>
				</li>
				<li>
					<NavLink to='/video'>Video</NavLink>
				</li>
				<li>
					<NavLink to='/settings'>Settings</NavLink>
				</li>
			</ul>
		</div>
	)
}
