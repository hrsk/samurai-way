import './App.css'
import { Content } from './content/Content'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Navbar } from './navbar/Navbar'
import { StateType } from './store/store'

type PropsType = {
	state: StateType
	// addPost: () => void
	// onChangeTextPost: (value: string) => void
	dispatch: (action: any) => void
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
				dispatch={props.dispatch}
				// addPost={props.addPost}
				// onChangeTextPost={props.onChangeTextPost}
			/>
			<Footer />
		</div>
	)
}
