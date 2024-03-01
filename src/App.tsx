import './App.css';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';

export const App = () => {
  return (
    <div className={"app-wrapper"}>
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
