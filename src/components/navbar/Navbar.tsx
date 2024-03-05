import { NavLink } from "react-router-dom";
import { NavbarItemType } from "../..";

type PropsType = {
    arrayNavbarItems: NavbarItemType[]
}

export const Navbar = (props: PropsType) => {

    const navbarItems = props.arrayNavbarItems.map(item => {
        return (
            <NavLink to={`/${item.title.toLowerCase()}`} style={{ textDecoration: 'none', color: 'gold' }}>
                <span style={{ textTransform: 'uppercase' }}>{item.title}</span>
            </NavLink>
        )
    })

    return (
        <div className='nav'>
            {navbarItems}
        </div>
    );
};
