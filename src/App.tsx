import './App.css'
import { Content } from './content/Content'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Navbar } from './navbar/Navbar'
import { CustomStateType } from './state/state'

type PropsType = {
	state: CustomStateType
	// dialogs: DialogType[]
	// posts: PostType[]
}

export const App = (props: PropsType) => {
	return (
		<div className={'app-wrapper'}>
			<Header />
			<Navbar />
			<Content
				messagesPageData={props.state.messagesPage}
				profilePageData={props.state.profilePage}
			/>
			<Footer />
		</div>
	)
}
