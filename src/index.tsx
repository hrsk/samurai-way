import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'
import { store } from './store/redux-store'

// const CustomProviderComponent: FC = ({ children }) => {
// 	return <MyContext.Provider value={store}>{children}</MyContext.Provider>
// }
// export const MyContext = React.createContext<any>(store)

// let rerenderEntireThree = () => {
ReactDOM.render(
	<BrowserRouter>
		{/* <CustomProviderComponent> */}
		<Provider store={store}>
			<App />
		</Provider>
		{/* </CustomProviderComponent> */}

		{/* <MyContext.Provider value={store}> */}

		{/* <App state={store.getState()} dispatch={store.dispatch.bind(store)} /> */}
		{/* </MyContext.Provider> */}
	</BrowserRouter>,
	document.getElementById('root')
)
// }
// rerenderEntireThree()
// store.subscribe(() => rerenderEntireThree())

// @ts-ignore
window.state = store.getState()
