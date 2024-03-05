import { DialogType, MessageType, PostType, NavbarItemType } from '.';
import './App.css';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';

type PropsType = {
  arrayNavbarItems: NavbarItemType[]
  arrayDialogs: DialogType[]
  arrayMessages: MessageType[]
  arrayPosts: PostType[]
}

export const App = (props: PropsType) => {
  return (
    <div className={"app-wrapper"}>
      <Header />
      <Navbar arrayNavbarItems={props.arrayNavbarItems} />
      <Content arrayDialogs={props.arrayDialogs}
        arrayMessages={props.arrayMessages}
        arrayPosts={props.arrayPosts} />
      <Footer />
    </div>
  );
}
