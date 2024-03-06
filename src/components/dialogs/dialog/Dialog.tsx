import { NavLink } from "react-router-dom";
import style from "./Dialog.module.css"

type PropsType = {
    userName: string
}

export const Dialog = ({ userName }: PropsType) => {

    return (
        <li className={style.li}>
            <NavLink className={style.link} to={`/dialogs/${userName}`}>
                {userName}
            </NavLink>
        </li>
    );
};
