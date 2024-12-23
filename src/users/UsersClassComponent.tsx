import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {AppStateType} from "../redux/redux-store";
import {Pagination} from "../pagination/Pagination";
import {Users} from "./Users";
import {Preloader} from "../preloader/Preloader";
import {API} from "../api/API";

export class UsersClassComponent extends React.PureComponent<UsersPropsType, AppStateType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersPerPage)
    }

    showMore = () => {
        this.props.selectPage(this.props.currentPage + 1)
        API.getUsers(this.props.currentPage, this.props.usersPerPage).then(data => {
            this.props.showMore(data.items)
        })
    }

    changePage = (pageNumber: number) => {
        this.props.selectPage(pageNumber)
        API.getUsers(pageNumber, this.props.usersPerPage).then(data => {
            this.props.setUsers(data.items, data.totalCount)
        })
    }

    follow = (userId: number) => {
        this.props.follow(userId)
    }

    unfollow = (userId: number) => {
        this.props.unfollow(userId)
    }

    render() {
        return (
            <div>
                <button onClick={this.showMore}>show more</button>
                <Pagination usersCount={this.props.totalCount}
                            currentPage={this.props.currentPage}
                            changePage={this.changePage}/>
                {
                    this.props.isLoading ?
                        <Preloader/>
                        :
                        <Users users={this.props.users}
                               follow={this.follow}
                               unfollow={this.unfollow}
                               isDisabled={this.props.isDisabled}/>
                }
            </div>
        )
    }
}
