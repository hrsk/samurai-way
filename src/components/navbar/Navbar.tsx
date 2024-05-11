import { NavLink } from "react-router-dom";
import { NavbarItemType } from "../../types";
import style from "./Navbar.module.css"

type PropsType = {
    navbarItems: NavbarItemType[]
}

export const Navbar = (props: PropsType) => {

    return (
        <div className={style.nav}>
            {
                props.navbarItems.map(item => {
                    return (
                        <NavLink className={style.link} to={`/${item.title.toLowerCase()}`} >
                            <span className={style.linkItemText}>{item.title}</span>
                        </NavLink>
                    )
                })
            }
        </div>
    );
};
