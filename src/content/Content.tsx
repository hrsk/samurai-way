import { Route } from 'react-router-dom'
import { Profile } from '../profile/Profile'
import { ActionsType } from '../redux/profile-reducer'
import { ProfilePageType } from '../state/state'

type PropsType = {
	// profilePageData: ProfilePageType
	// dispatch: (action: ActionsType) => void
}

export const Content = (props: PropsType) => {
	return (
		<div className={'content-wrapper'}>
			<Route
				exact
				path={'/profile'}
				render={() => (
					<Profile
					// posts={props.profilePageData.posts}
					// dispatch={props.dispatch}
					// newPostText={props.profilePageData.newPostText}
					/>
				)}
			/>
			{/* <Route
				exact
				path={'/messages'}
				render={() => <Messages dialogs={props.messagesPageData.dialogs} />}
				// component={Messages}
			/> */}
		</div>
	)
}
