import './App.css';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { AppStateType, addPost } from './state/state';

type PropsType = {
  state: AppStateType
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
      <Content profilePage={props.state.profilePage} messagesPage={props.state.messagesPage} addPost={addPost} />
      <Footer />
    </div>
  );
}
