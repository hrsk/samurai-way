import './App.css';

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

export const Header = () => {
  return (
    <div className='header'>
      HEADER
    </div>
  );
}
export const Navbar = () => {
  return (
    <div className='nav'>
      NAVBAR
    </div>
  );
}
export const Content = () => {
  return (
    <div className='app-wrapper-content'>
      CONTENT
      <Profile />
      <Dialogs />
    </div>
  );
}
export const Footer = () => {
  return (
    <div className='footer'>
      FOOTER
    </div>
  );
}
export const Profile = () => {
  return (
    <div>
      PROFILE
    </div>
  );
}

export const Dialogs = () => {
  return (
    <div>
      DIALOGS
    </div>
  );
}
