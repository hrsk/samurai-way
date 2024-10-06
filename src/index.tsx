import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'
import { customState } from './state/state'

ReactDOM.render(
	<BrowserRouter>
		<App state={customState} />
	</BrowserRouter>,
	document.getElementById('root')
)
