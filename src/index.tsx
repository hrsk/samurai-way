import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppStateType, addPost, changePostText, state } from './state/state'

export const renderThree = (state: AppStateType) => {
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
renderThree(state)
