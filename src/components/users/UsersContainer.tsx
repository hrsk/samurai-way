import { Dispatch } from "redux"
import { AppStateType } from "../../store/redux-store"
import { Users } from "./Users"
import { connect } from "react-redux"
import React from "react"
import axios from "axios"
import { UserType, getUserActionCreator, selectPageActionCreator } from "../reducers/usersReducer"

export class UsersConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.getUsers(response.data.items, response.data.totalCount, response.data.error)
            })
    }

    setPage = (pageNumber: number) => {
        this.props.selectPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.getUsers(response.data.items, response.data.totalCount, response.data.error)
            })
    }

    render() {
        return <Users {...this.props} setPage={this.setPage} />
    }

}

type MapStateToPropsType = {
    users: UserType[]
    totalCount: number
    error: string | null
    currentPage: number
    pageSize: number
}

type MapDispatchToPropsType = {
    getUsers: (users: UserType[], totalCount: number, error: string | null) => void
    selectPage: (pageNumber: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.items,
        totalCount: state.usersPage.totalCount,
        error: state.usersPage.error,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        getUsers: (users: UserType[], totalCount: number, error: string | null) => dispatch(getUserActionCreator(users, totalCount, error)),
        selectPage: (pageNumber: number) => dispatch(selectPageActionCreator(pageNumber))
    }
}

export type ConnectedPropsType = MapDispatchToPropsType & MapStateToPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersConnectedComponent)
