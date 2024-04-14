import { NavLink } from "react-router-dom";
import style from "./Header.module.css"
import { ConnectedPropsType } from "./HeaderContainer";

interface PropsType extends ConnectedPropsType {
    logout: () => void
}

export const Header = (props: PropsType) => {
    return (
        <div className={style.header}>
            {
                props.isAuth
                    ? <div>
                        <span style={{ display: 'block' }}>{props.email}</span>
                        <button onClick={props.logout}>Logout</button>
                    </div>

                    : <button>
                        <NavLink to={'/login'}>
                            SingIn
                        </NavLink>
                    </button>
            }

        </div>
    );
};
