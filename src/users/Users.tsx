import React from 'react';
import {ResponseUserType} from "../reducers/users-reducer";
import no_avatar from "../assets/images/avatars/no_avatar.png";

type PropsType = {
    users: ResponseUserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users = (props: PropsType) => {
    return (
        <ul>
            {props.users.map((user: ResponseUserType) => (
                <li key={user.id}>
                    <div>
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
                        <p>userName: {user.name}</p>
                        <p>status: {user.status}</p>
                    </div>
                    <div>
                        {user.followed ? (
                            <button
                                onClick={() => {
                                    props.unfollow(user.id)
                                }
                                }
                            >
                                UNFOLLOW
                            </button>
                        ) : (
                            <button onClick={() =>
                                props.follow(user.id)
                            }>FOLLOW</button>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
};
