import { NavLink } from "react-router-dom";
import no_avatar from './../../assets/avatar_images/no_avatar.png';
import style from "./Header.module.css";
import { ConnectedPropsType } from "./HeaderContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfilePhotos } from "../reducers/profileReducer";

interface PropsType extends ConnectedPropsType {
    logout: () => void
}

export const Header = (props: PropsType) => {

    const dispatch = useDispatch()
    useEffect(() => {
        if (props.userId)
            dispatch(getProfilePhotos(props.userId))
    }, [props.userId])

    return (
        <div className={style.headerContainer}>
            {
                props.isAuth
                    ? <div className={style.loginContainer}>
                        {props.profilePhotos ?
                            <img className={style.avatar} style={{ width: '64px', height: '64px' }}
                                src={props.profilePhotos.small && props.profilePhotos.large}
                                alt="" />
                            : <img className={style.avatar} style={{ width: '64px', height: '64px' }} src={no_avatar} alt="" />
                        }
                        <span style={{ display: 'block' }}>{props.login}</span>
                        <button className={style.button} onClick={props.logout}>Logout</button>
                    </div>
                    : <button className={style.button}>
                        <NavLink to={'/login'} className={style.navLink}>
                            SingIn
                        </NavLink>
                    </button>
            }

        </div>
    );
};
