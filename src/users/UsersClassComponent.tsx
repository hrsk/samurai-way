import React from "react";
import axios from "axios";
import {GetResponseType} from "../reducers/users-reducer";
import {UsersPropsType} from "./UsersContainer";
import {AppStateType} from "../redux/redux-store";
import {Pagination} from "../pagination/Pagination";
import {Users} from "./Users";
import {Preloader} from "../preloader/Preloader";

export class UsersClassComponent extends React.PureComponent<UsersPropsType, AppStateType> {
    componentDidMount() {
        this.props.showPreloader(true)
        axios
            .get<GetResponseType>(
                `https://social-network.samuraijs.com/api/1.0/users?page=${1}&count=${this.props.usersPerPage}`
            )
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount)
                this.props.showPreloader(false)
            })
    }

    showMore = () => {
        this.props.selectPage(this.props.currentPage + 1)
        axios
            .get<GetResponseType>(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`
            )
            .then(response => {
                this.props.showMore(response.data.items)
            })
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
        console.log(this.props.currentPage)
    }

    render() {
        return (
            <div>
                <button onClick={this.showMore}>show more</button>
                <Pagination usersCount={this.props.totalCount} currentPage={this.props.currentPage}
                            changePage={this.changePage}/>
                {
                    this.props.isLoading ?
                        <Preloader/>
                        :
                        <Users users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
                }
            </div>
        )
    }
}
