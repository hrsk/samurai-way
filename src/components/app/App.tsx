import './App.css';
import { Content } from '../content/Content';
import { Footer } from '../footer/Footer';
import { HeaderContainer } from '../header/HeaderContainer';
import { NavbarContainer } from '../navbar/NavbarContainer';

export const App = () => {
  return (
    <div className={"app-wrapper"}>
      <HeaderContainer />
      <Content />
      <NavbarContainer />
      <Footer />
    </div>
  )
}
