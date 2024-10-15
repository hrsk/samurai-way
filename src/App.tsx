import './App.css'
import { Content } from './content/Content'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Navbar } from './navbar/Navbar'
import { ActionsType } from './redux/profile-reducer'
import { RootStateType } from './store/redux-store'

type PropsType = {
	// state: RootStateType
	// dispatch: (action: ActionsType) => void
}

export const App = (props: PropsType) => {
	return (
		<div className={'app-wrapper'}>
			<Header />
			<Navbar />
			<Content
			// profilePageData={props.profilePage}
			// dispatch={props.dispatch}
			/>
			<Footer />
		</div>
	)
}
