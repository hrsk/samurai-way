import React from 'react';
import no_avatar from "../assets/images/avatars/no_avatar.png";
import {NavLink} from "react-router-dom";
import {ResponseUserType} from "../types";

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
                        <button
                            disabled={props.isDisabled.some(id => id === user.id)}
                            onClick={() => {
                                return user.followed ? props.unfollow(user.id) : props.follow(user.id)
                            }
                            }>{user.followed ? 'UNSUBSCRIBE' : 'SUBSCRIBE'}</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};
