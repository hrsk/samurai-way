import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'
import { addPost, customState } from './state/state'

ReactDOM.render(
	<BrowserRouter>
		<App state={customState} addPost={addPost} />
	</BrowserRouter>,
	document.getElementById('root')
)
