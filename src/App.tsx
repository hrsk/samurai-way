import './App.css';
import { Content } from './components/content/Content';
import { ContentContainer } from './components/content/ContentContainer';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { NavbarContainer } from './components/navbar/NavbarContainer';
import { AppStateType } from './store/redux-store';

type PropsType = {
  // state: AppStateType
  // dispatch: (action: any) => any
}

export const App = (props: PropsType) => {
  debugger
  return (
    <div className={"app-wrapper"}>
      <Header />
      <ContentContainer />
      <NavbarContainer />
      {/* <Navbar arrayNavbarItems={props.state.navbar.items} /> */}
      {/* <Content profilePage={props.state.profilePage}
        messagesPage={props.state.messagesPage}
        dispatch={props.dispatch} /> */}
      <Footer />
    </div>
  );
}
