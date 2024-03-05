import { NavLink } from "react-router-dom";

type PropsType = {
    userName: string
}

export const Dialog = ({ userName }: PropsType) => {

    return (
        <li style={{ paddingBottom: '10px' }}>
            <NavLink to={`/dialogs/${userName}`} style={{ textDecoration: 'none' }}>
                {userName}
            </NavLink>
        </li>
    );
};
