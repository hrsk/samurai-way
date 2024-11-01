import React from "react";
import axios from "axios";
import {GetResponseType, ResponseUserType} from "../reducers/users-reducer";
import no_avatar from "../assets/images/avatars/no_avatar.png";
import {UsersPropsType} from "./UsersContainer";
import {AppStateType} from "../redux/redux-store";
import {Pagination} from "../pagination/Pagination";

export class UsersClassComponent extends React.PureComponent<UsersPropsType, AppStateType> {

    componentDidMount() {
        axios
            .get<GetResponseType>(
                `https://social-network.samuraijs.com/api/1.0/users`
            )
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount)
            })
    }

    // setUsers = () => {
    //     axios
    //         .get<GetResponseType>(
    //             `https://social-network.samuraijs.com/api/1.0/users`
    //         )
    //         .then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    //
    // }

    showMore = () => {
        this.props.showMore(this.props.users)
    }
    changePage = (pageNumber: number) => {
        this.props.selectPage(pageNumber)
        axios
            .get<GetResponseType>(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPerPage}`
            )
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount)
            })
    }


    render() {
        return (
            <div>
                <Pagination usersCount={this.props.totalCount} currentPage={this.props.currentPage}
                            changePage={this.changePage}/>
                {/*<button onClick={this.setUsers}>set users</button>*/}
                <ul>
                    {this.props.users.map((user: ResponseUserType) => (
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
                                userName: <p>{user.name}</p>
                                status: <p>{user.status}</p>
                            </div>
                            {/* <div>
							country: <p>{user.location.country}</p>
							city: <p>{user.location.city}</p>
						</div> */}
                            <div>
                                {user.followed ? (
                                    <button
                                        onClick={() => {
                                            this.props.unfollow(user.id)
                                        }
                                        }
                                    >
                                        UNFOLLOW
                                    </button>
                                ) : (
                                    <button onClick={() =>
                                        this.props.follow(user.id)
                                    }>FOLLOW</button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
                <button onClick={this.showMore}>show more</button>
            </div>
        )
    }
}
