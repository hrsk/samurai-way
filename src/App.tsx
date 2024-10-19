import './App.css'
import { Content } from './content/Content'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Navbar } from './navbar/Navbar'

export const App = () => {
	return (
		<div className={'app-wrapper'}>
			<Header />
			<Navbar />
			<Content />
			<Footer />
		</div>
	)
}
