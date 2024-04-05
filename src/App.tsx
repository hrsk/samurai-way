import './App.css';
import { ContentContainer } from './components/content/ContentContainer';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { HeaderContainer } from './components/header/HeaderContainer';
import { NavbarContainer } from './components/navbar/NavbarContainer';

export const App = () => {
  return (
    <div className={"app-wrapper"}>
      <HeaderContainer />
      <ContentContainer />
      <NavbarContainer />
      <Footer />
    </div>
  );
}
