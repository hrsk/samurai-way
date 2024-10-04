import { Route } from 'react-router-dom'
import { Messages } from '../messages/Messages'
import { Profile } from '../profile/Profile'

export const Content = () => {
	return (
		<div className={'content-wrapper'}>
			<Route exact path={'/profile'} component={Profile} />
			<Route exact path={'/messages'} component={Messages} />
			{/* <Profile /> */}
			{/* <Messages /> */}
		</div>
	)
}
