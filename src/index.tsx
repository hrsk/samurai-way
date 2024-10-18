import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'
import { store } from './store/redux-store'

const CustomProviderComponent: FC = ({ children }) => {
	return <MyContext.Provider value={store}>{children}</MyContext.Provider>
}
export const MyContext = React.createContext<any>(store)

let rerenderEntireThree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<CustomProviderComponent>
				<App />
			</CustomProviderComponent>

			{/* <MyContext.Provider value={store}> */}

			{/* <App state={store.getState()} dispatch={store.dispatch.bind(store)} /> */}
			{/* </MyContext.Provider> */}
		</BrowserRouter>,
		document.getElementById('root')
	)
}
rerenderEntireThree()
store.subscribe(() => rerenderEntireThree())

// @ts-ignore
window.state = store.getState()
