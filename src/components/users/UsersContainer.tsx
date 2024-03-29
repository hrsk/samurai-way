import { Dispatch } from "redux"
import { AppStateType } from "../../store/redux-store"
import { Users } from "./Users"
import { connect } from "react-redux"
import React from "react"
import axios from "axios"
import { followUserActionCreator, getUserActionCreator, selectPageActionCreator, unfollowUserActionCreator } from "../reducers/usersReducer"
import { API } from "../../api/API"
import { UserType } from "../../types"
import { isFetchingActionCreator } from "../reducers/appReducer"

export class UsersConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    componentDidMount() {
        this.props.fetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.getUsers(response.data.items, response.data.totalCount, response.data.error)
                this.props.fetching(false)
            })
    }

    setPage = (pageNumber: number) => {
        this.props.fetching(true)
        this.props.selectPage(pageNumber)
        API.getUsers(pageNumber, this.props.pageSize)
            .then(response => this.props.getUsers(response.data.items, response.data.totalCount, response.data.error))
        this.props.fetching(false)
    }

    follow = (userId: number) => {
        API.followUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.follow(userId)
                }
            })
    }
    unfollow = (userId: number) => {
        API.unfollowUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.unfollow(userId)
                }
            })
    }

    render() {
        return <Users {...this.props} setPage={this.setPage} follow={this.follow} unfollow={this.unfollow} />
    }

}

type MapStateToPropsType = {
    users: UserType[]
    totalCount: number
    error: string | null
    currentPage: number
    pageSize: number
    isFetching: boolean
}

type MapDispatchToPropsType = {
    getUsers: (users: UserType[], totalCount: number, error: string | null) => void
    selectPage: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    fetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.items,
        totalCount: state.usersPage.totalCount,
        error: state.usersPage.error,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.app.isFetching,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        getUsers: (users: UserType[], totalCount: number, error: string | null) => dispatch(getUserActionCreator(users, totalCount, error)),
        selectPage: (pageNumber: number) => dispatch(selectPageActionCreator(pageNumber)),
        follow: (userId: number) => dispatch(followUserActionCreator(userId)),
        unfollow: (userId: number) => dispatch(unfollowUserActionCreator(userId)),
        fetching: (isFetching: boolean) => dispatch(isFetchingActionCreator(isFetching))
    }
}

export type ConnectedPropsType = MapDispatchToPropsType & MapStateToPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersConnectedComponent)
