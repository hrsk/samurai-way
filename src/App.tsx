import './App.css';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';
import { HeaderContainer } from './components/header/HeaderContainer';
import { NavbarContainer } from './components/navbar/NavbarContainer';

export const App = () => {
  return (
    <div className={"app-wrapper"}>
      <HeaderContainer />
      <Content />
      <NavbarContainer />
      <Footer />
    </div>
  );
}
