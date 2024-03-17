import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';
import { store } from './store/redux-store';

export const rerenderEntireThree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
        {/* <App state={store.getState()} */}
        {/* dispatch={store.dispatch.bind(store)} /> */}
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
rerenderEntireThree()
store.subscribe(() => rerenderEntireThree())
//@ts-ignore
window.state = store.getState();
