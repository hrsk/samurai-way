import './App.css';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { ActionsType, AppStateType } from './store/store';

type PropsType = {
  state: AppStateType
  addPost: () => void
  changePostText: (value: string) => void
  newPostText: string
  sendMessage: () => void
  changeMessageText: (value: string) => void
  newMessageText: string
  dispatch: (action: ActionsType) => AppStateType
  // arrayNavbarItems: NavbarItemType[]
  // arrayDialogs: DialogType[]
  // arrayMessages: MessageType[]
  // arrayPosts: PostType[]
}

export const App = (props: PropsType) => {
  return (
    <div className={"app-wrapper"}>
      <Header />
      <Navbar arrayNavbarItems={props.state.navbar.navbarItems} />
      <Content profilePage={props.state.profilePage}
        messagesPage={props.state.messagesPage}
        changePostText={props.changePostText}
        addPost={props.addPost}
        newPostText={props.newPostText}
        changeMessageText={props.changeMessageText}
        sendMessage={props.sendMessage}
        newMessageText={props.newMessageText}
        dispatch={props.dispatch} />
      <Footer />
    </div>
  );
}
