import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className='nav'>
            <NavLink to="/profile" style={{ textDecoration: 'none', color: 'gold' }}>
                <span style={{ textTransform: 'uppercase' }}>Profile</span>
            </NavLink>
            <NavLink to="/news" style={{ textDecoration: 'none', color: 'gold' }}>
                <span style={{ textTransform: 'uppercase' }}>News</span>
            </NavLink>
            <NavLink to="/dialogs" style={{ textDecoration: 'none', color: 'gold' }}>
                <span style={{ textTransform: 'uppercase' }}>Friends</span>
            </NavLink>
            <NavLink to="/dialogs" style={{ textDecoration: 'none', color: 'gold' }}>
                <span style={{ textTransform: 'uppercase' }}>Messages</span>
            </NavLink>
            <NavLink to="/music" style={{ textDecoration: 'none', color: 'gold' }}>
                <span style={{ textTransform: 'uppercase' }}>Music</span>
            </NavLink>
            <NavLink to="/video" style={{ textDecoration: 'none', color: 'gold' }}>
                <span style={{ textTransform: 'uppercase' }}>Video</span>
            </NavLink>
            <NavLink to="/settings" style={{ textDecoration: 'none', color: 'gold' }}>
                <span style={{ textTransform: 'uppercase' }}>Settings</span>
            </NavLink>
        </div>
    );
};
