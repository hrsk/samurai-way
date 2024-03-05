import { NavLink } from "react-router-dom";

type navbarItem = {
    id: number
    title: string
}

const arrayNavbarItems: navbarItem[] = [
    { id: 1, title: 'Profile' },
    { id: 2, title: 'News' },
    { id: 3, title: 'Friends' },
    { id: 4, title: 'Messages' },
    { id: 5, title: 'Music' },
    { id: 6, title: 'Video' },
    { id: 7, title: 'Settings' },
]

const navbarItems = arrayNavbarItems.map(item => {
    return (
        <NavLink to={`/${item.title.toLowerCase()}`} style={{ textDecoration: 'none', color: 'gold' }}>
            <span style={{ textTransform: 'uppercase' }}>{item.title}</span>
        </NavLink>
    )
})

export const Navbar = () => {
    return (
        <div className='nav'>
            {navbarItems}
        </div>
    );
};
