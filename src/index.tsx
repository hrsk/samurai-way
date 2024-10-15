import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'
import { store } from './store/redux-store'

export const MyContext = React.createContext(store)

let rerenderEntireThree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<MyContext.Provider value={store}>
				<App />
				{/* <App state={store.getState()} dispatch={store.dispatch.bind(store)} /> */}
			</MyContext.Provider>
		</BrowserRouter>,
		document.getElementById('root')
	)
}
rerenderEntireThree()
store.subscribe(() => rerenderEntireThree())

// @ts-ignore
window.state = store.getState()
