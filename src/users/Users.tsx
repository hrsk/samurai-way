import React from 'react';
import {ResponseUserType} from "../reducers/users-reducer";
import no_avatar from "../assets/images/avatars/no_avatar.png";
import {NavLink} from "react-router-dom";

type PropsType = {
    users: ResponseUserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    isDisabled: number[]
}

export const Users = (props: PropsType) => {
    return (
        <ul>
            {props.users.map((user: ResponseUserType) => (
                <li key={user.id}>
                    <div>
                        <NavLink to={`profile/${user.id}`}>
                            <img
                                src={
                                    user.photos.small !== null
                                        ? user.photos.small
                                        : no_avatar && user.photos.large !== null
                                            ? user.photos.large
                                            : no_avatar
                                }
                                alt='alt'
                            />
                        </NavLink>
                        <p>userName: {user.name}</p>
                        <p>status: {user.status}</p>
                    </div>
                    <div>
                        {user.followed ? (
                            <button disabled={props.isDisabled.some(id => id === user.id)}
                                    onClick={() => {
                                        props.unfollow(user.id)
                                    }
                                    }
                            >
                                UNFOLLOW
                            </button>
                        ) : (
                            <button disabled={props.isDisabled.some(id => id === user.id)} onClick={() =>
                                props.follow(user.id)
                            }>FOLLOW</button>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
};
