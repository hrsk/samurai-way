import './App.css'
import { Content } from './content/Content'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Navbar } from './navbar/Navbar'
import {NavbarContainer} from "./navbar/NavbarContainer";

export const App = () => {
	return (
		<div className={'app-wrapper'}>
			<Header />
			<NavbarContainer />
			<Content />
			<Footer />
		</div>
	)
}
