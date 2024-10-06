import { Route } from 'react-router-dom'
import { DialogType, PostType } from '..'
import { Messages } from '../messages/Messages'
import { Profile } from '../profile/Profile'

type PropsType = {
	dialogs: DialogType[]
	posts: PostType[]
}

export const Content = (props: PropsType) => {
	return (
		<div className={'content-wrapper'}>
			<Route
				exact
				path={'/profile'}
				render={() => <Profile posts={props.posts} />}
				// component={Profile}
			/>
			<Route
				exact
				path={'/messages'}
				render={() => <Messages dialogs={props.dialogs} />}
				// component={Messages}
			/>
			{/* <Profile /> */}
			{/* <Messages /> */}
		</div>
	)
}
