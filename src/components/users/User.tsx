import { NavLink } from "react-router-dom"
import no_avatar from "../../assets/avatar_images/no_avatar.png"
import { UserType } from "../../types"

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
            <div>
                <span style={{ display: 'block' }}>
                    Nickname: <p style={{ display: 'inline-block', fontStyle: 'italic' }}>{props.user.name}</p>
                </span>
                <span style={{ display: 'block' }}>
                    Status: <p style={{ display: 'inline-block', fontStyle: 'italic' }}>{props.user.status}</p>
                </span>
                <NavLink to={`profile/${props.user.id}`}>
                    <img style={{ width: '64px', height: '64px' }}
                        src={props.user.photos.small ? props.user.photos.large : no_avatar}
                        alt="" />
                </NavLink>
            </div>
            <div>
                {
                    props.user.followed
                        ? <button onClick={unsubscribeHandler} disabled={disabledHandler}>UNFOLLOW</button>
                        : <button onClick={subscribeHandler} disabled={disabledHandler}>FOLLOW</button>
                }
            </div>
        </div>
    )
}