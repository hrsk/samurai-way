import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'
import { store } from './store/store'

let rerenderEntireThree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App
				state={store._getState()}
				addPost={store.addPost.bind(store)}
				onChangeTextPost={store.onChangeTextPost.bind(store)}
			/>
		</BrowserRouter>,
		document.getElementById('root')
	)
}
rerenderEntireThree()
store._subscribe(() => rerenderEntireThree())

// @ts-ignore
window.state = store._getState()
