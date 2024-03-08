import './App.css';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { AppStateType } from './store/store';

type PropsType = {
  state: AppStateType
  addPost: () => void
  changePostText: (value: string) => void
  newPostText: string
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
        newPostText={props.newPostText} />
      <Footer />
    </div>
  );
}
