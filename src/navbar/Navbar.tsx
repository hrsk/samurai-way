import { NavLink } from 'react-router-dom'
import {NavbarPropsType} from "./NavbarContainer";

export const Navbar = (props: NavbarPropsType) => {
	return (
		<div className={'nav'}>
			<ul>
				<li>
					//TODO: редирект на компонету логина, если пользователь не залогинен

					{/*<NavLink to='/profile'>Profile</NavLink>*/}
					<NavLink to={`${props.isAuth ? `/profile/${props.id}?` : `/login` }`}>Profile</NavLink>
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
