import { NavLink } from "react-router-dom";
import { NavbarItemType } from "../../store/store";
import style from "./Navbar.module.css"

type PropsType = {
    arrayNavbarItems: NavbarItemType[]
}

export const Navbar = (props: PropsType) => {

    const navbarItems = props.arrayNavbarItems.map(item => {
        return (
            <NavLink className={style.link} to={`/${item.title.toLowerCase()}`} >
                <span className={style.linkItemText}>{item.title}</span>
            </NavLink>
        )
    })

    return (
        <div className={style.nav}>
            {navbarItems}
        </div>
    );
};
