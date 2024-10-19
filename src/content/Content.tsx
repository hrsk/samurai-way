import { Route } from 'react-router-dom'
import { MessagesContainer } from '../messages/MessagesContainer'
import { Profile } from '../profile/Profile'

export const Content = () => {
	return (
		<div className={'content-wrapper'}>
			<Route exact path={'/profile'} render={() => <Profile />} />
			<Route exact path={'/messages'} render={() => <MessagesContainer />} />
		</div>
	)
}
