import { DialogType, PostType } from '.'
import './App.css'
import { Content } from './content/Content'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Navbar } from './navbar/Navbar'

type PropsType = {
	dialogs: DialogType[]
	posts: PostType[]
}

export const App = (props: PropsType) => {
	return (
		<div className={'app-wrapper'}>
			<Header />
			<Navbar />
			<Content dialogs={props.dialogs} posts={props.posts} />
			<Footer />
		</div>
	)
}
