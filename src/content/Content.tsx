import { Route } from 'react-router-dom'
import { Messages } from '../messages/Messages'
import { Profile } from '../profile/Profile'
import { MessagesPageType, ProfilePageType } from '../state/state'

type PropsType = {
	messagesPageData: MessagesPageType
	profilePageData: ProfilePageType
	// dialogs: DialogType[]
	// posts: PostType[]
}

export const Content = (props: PropsType) => {
	return (
		<div className={'content-wrapper'}>
			<Route
				exact
				path={'/profile'}
				render={() => <Profile posts={props.profilePageData.posts} />}
				// component={Profile}
			/>
			<Route
				exact
				path={'/messages'}
				render={() => <Messages dialogs={props.messagesPageData.dialogs} />}
				// component={Messages}
			/>
			{/* <Profile /> */}
			{/* <Messages /> */}
		</div>
	)
}
