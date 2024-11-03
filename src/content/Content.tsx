import { Route } from 'react-router-dom'
import { MessagesContainer } from '../messages/MessagesContainer'
import { Profile } from '../profile/Profile'
import { UsersContainer } from '../users/UsersContainer'
import {ProfileContainer} from "../profile/ProfileContainer";

export const Content = () => {
	return (
		<div className={'content-wrapper'}>
			<Route exact path={'/profile'} render={() => <ProfileContainer />} />
			<Route exact path={'/messages'} render={() => <MessagesContainer />} />
			<Route exact path={'/users'} render={() => <UsersContainer />} />
		</div>
	)
}
