import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';


export type NavbarItemType = {
  id: number
  title: string
}

export type DialogType = {
  id: number
  userName: string
}
export type MessageType = {
  id: number
  message: string
}

export type PostType = {
  id: number
  text: string
  likesCount: number
}

export type PropsType = {
  post: PostType
}

const arrayNavbarItems: NavbarItemType[] = [
  { id: 1, title: 'Profile' },
  { id: 2, title: 'News' },
  { id: 3, title: 'Friends' },
  { id: 4, title: 'Messages' },
  { id: 5, title: 'Music' },
  { id: 6, title: 'Video' },
  { id: 7, title: 'Settings' },
]

const arrayDialogs: DialogType[] = [
  { id: 1, userName: 'Dimych' },
  { id: 2, userName: 'Maria' },
  { id: 3, userName: 'Katya' },
  { id: 4, userName: 'Igor' },
  { id: 5, userName: 'Viktor' },
]

const arrayMessages: MessageType[] = [
  { id: 1, message: 'Lorem ipsum' },
  { id: 2, message: 'Lorem ipsum' },
  { id: 3, message: 'Lorem ipsum' },
  { id: 4, message: 'Lorem ipsum' },
  { id: 5, message: 'Lorem ipsum' },
]

const arrayPosts: PostType[] = [
  { id: 1, text: 'asdasdasd', likesCount: 99 },
  { id: 2, text: 'asdasdzxc', likesCount: 11 },
  { id: 3, text: 'zxccv', likesCount: 22 },
  { id: 4, text: 'cvbcvbcvb', likesCount: 3 },
  { id: 5, text: 'hgjfhjfgh', likesCount: 5 },
]

ReactDOM.render(
  <BrowserRouter>
    <App arrayNavbarItems={arrayNavbarItems}
      arrayDialogs={arrayDialogs}
      arrayMessages={arrayMessages}
      arrayPosts={arrayPosts} />
  </BrowserRouter>,
  document.getElementById('root')
);
