import axios from "axios"
import React, { ClassAttributes } from "react"
import { ConnectedProps, connect } from "react-redux"
import { API } from "../../api/API"
import { AppStateType } from "../../store/redux-store"
import { UserType } from "../../types"
import { fetching } from "../reducers/appReducer"
import { followUser, following, getUsers, selectPage, unfollowUser } from "../reducers/usersReducer"
import { Users } from "./Users"
import { getUserProfile } from "../reducers/profileReducer"

export class UsersConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    componentDidMount() {
        this.props.fetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.getUsers(response.data.items, response.data.totalCount, response.data.error)
                this.props.fetching(false)
            })
    }

    selectUserProfile = (userId: number) => {
        this.props.fetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}}`)
            .then((response) => {
                this.props.getUserProfile(response.data)
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
        this.props.following(userId, true)
        API.followUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.followUser(userId)
                }
                this.props.following(userId, false)

            })
    }
    unfollow = (userId: number) => {
        this.props.following(userId, true)
        API.unfollowUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.unfollowUser(userId)
                }
                this.props.following(userId, false)
            })
    }

    render() {
        return <Users {...this.props} setPage={this.setPage} follow={this.follow} unfollow={this.unfollow} selectUserProfile={this.selectUserProfile} />
    }

}

type MapStateToPropsType = {
    users: UserType[]
    totalCount: number
    error: string | null
    currentPage: number
    pageSize: number
    isFetching: boolean
    isFollow: number[]
}

// type MapDispatchToPropsType = {
//     getUsers: (users: UserType[], totalCount: number, error: string | null) => void
//     selectPage: (pageNumber: number) => void
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     fetching: (isFetching: boolean) => void
// }

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.items,
        totalCount: state.usersPage.totalCount,
        error: state.usersPage.error,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.app.isFetching,
        isFollow: state.usersPage.isFollow,
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         getUsers: (users: UserType[], totalCount: number, error: string | null) => dispatch(getUserActionCreator(users, totalCount, error)),
//         selectPage: (pageNumber: number) => dispatch(selectPageActionCreator(pageNumber)),
//         follow: (userId: number) => dispatch(followUserActionCreator(userId)),
//         unfollow: (userId: number) => dispatch(unfollowUserActionCreator(userId)),
//         fetching: (isFetching: boolean) => dispatch(isFetchingActionCreator(isFetching))
//     }
// }

// export type ConnectedPropsType = MapDispatchToPropsType & MapStateToPropsType

interface OwnProps extends ClassAttributes<UsersConnectedComponent> { }
type PropsFromRedux = ConnectedProps<typeof connector>
export type ConnectedPropsType = MapStateToPropsType & PropsFromRedux & OwnProps

const connector = connect(mapStateToProps, {
    getUsers, selectPage, followUser, unfollowUser, fetching, getUserProfile, following,
});



// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersConnectedComponent)
export const UsersContainer = connector(UsersConnectedComponent)
