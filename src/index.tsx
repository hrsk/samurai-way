import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppStateType, addPost, changePostText, state, subscribe } from './state/state'

export const rerenderEntireThree = (state: AppStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
        addPost={addPost}
        changePostText={changePostText}
        newPostText={state.profilePage.newPostText} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
rerenderEntireThree(state)
subscribe(() => rerenderEntireThree(state))
//@ts-ignore
window.state = state;
