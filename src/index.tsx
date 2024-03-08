import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';

export const rerenderEntireThree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()}
        addPost={store.addPost.bind(store)}
        changePostText={store.changePostText.bind(store)}
        newPostText={store._state.profilePage.newPostText} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
rerenderEntireThree()
store.subscribe(() => rerenderEntireThree())
//@ts-ignore
window.state = store.getState();
