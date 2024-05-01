import { NavLink } from "react-router-dom"
import no_avatar from "../../assets/avatar_images/no_avatar.png"
import { UserType } from "../../types"
import style from './User.module.css'

type PropsType = {
    user: UserType,
    isFollow: number[]
    subscribe: (userId: number) => void,
    unsubscribe: (userId: number) => void,
}

export const User = (props: PropsType) => {

    const subscribeHandler = () => {
        props.subscribe(props.user.id)
    }

    const unsubscribeHandler = () => {
        props.unsubscribe(props.user.id)
    }

    const disabledHandler = props.isFollow.some(id => id === props.user.id)

    return (
        <div key={props.user.id}>
            <div className={style.userWrapper}>
                <NavLink to={`profile/${props.user.id}`}>
                    <img className={style.avatar}
                        src={props.user.photos.small ? props.user.photos.large : no_avatar}
                        alt="" />
                </NavLink>
                <span>{props.user.name}</span>
                <span className={style.status}>{props.user.status}</span>
                {
                    props.user.followed
                        ? <button className={style.button} onClick={unsubscribeHandler} disabled={disabledHandler}>UNFOLLOW</button>
                        : <button className={style.button} onClick={subscribeHandler} disabled={disabledHandler}>FOLLOW</button>
                }
            </div>
        </div>
    )
}