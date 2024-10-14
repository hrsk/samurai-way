import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'
import {
	addPost,
	customState,
	onChangeTextPost,
	subscribe,
} from './state/state'

let rerenderEntireThree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App
				state={customState}
				addPost={addPost}
				onChangeTextPost={onChangeTextPost}
			/>
		</BrowserRouter>,
		document.getElementById('root')
	)
}
rerenderEntireThree()
subscribe(() => rerenderEntireThree())

//@ts-ignore
window.state = store.getState()
