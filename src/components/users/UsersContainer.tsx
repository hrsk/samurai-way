import React, { ClassAttributes } from "react"
import { ConnectedProps, connect } from "react-redux"
import { AppStateType } from "../../store/redux-store"
import { UserType } from "../../types"
import { Users } from "./Users"
import { getUsers, selectPage, subscribeUser, unsubscribeUser } from "../reducers/usersReducer"
import { selectUser } from "../reducers/profileReducer"

export class UsersConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.selectPage(pageNumber, this.props.pageSize)
    }

    subscribe = (userId: number) => {
        this.props.subscribeUser(userId)
    }

    unsubscribe = (userId: number) => {
        this.props.unsubscribeUser(userId)
    }

    render() {
        return <Users {...this.props}
            setCurrentPage={this.setCurrentPage}
            subscribe={this.subscribe}
            unsubscribe={this.unsubscribe}
        />
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

interface OwnProps extends ClassAttributes<UsersConnectedComponent> { }
type PropsFromRedux = ConnectedProps<typeof connector>
export type ConnectedPropsType = MapStateToPropsType & PropsFromRedux & OwnProps

const connector = connect(mapStateToProps, {
    getUsers, selectUser, selectPage,
    subscribeUser, unsubscribeUser
})

export const UsersContainer = connector(UsersConnectedComponent)
