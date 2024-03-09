import './App.css';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { ActionsType, AppStateType } from './store/store';

type PropsType = {
  state: AppStateType
  dispatch: (action: ActionsType) => AppStateType
}

export const App = (props: PropsType) => {
  return (
    <div className={"app-wrapper"}>
      <Header />
      <Navbar arrayNavbarItems={props.state.navbar.navbarItems} />
      <Content profilePage={props.state.profilePage}
        messagesPage={props.state.messagesPage}
        dispatch={props.dispatch} />
      <Footer />
    </div>
  );
}
