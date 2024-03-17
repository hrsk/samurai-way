import { Dispatch } from "redux"
import { AppStateType } from "../../store/redux-store"
import { Users } from "./Users"
import { connect } from "react-redux"
import React from "react"
import axios from "axios"
import { UserType, getUserActionCreator } from "../reducers/usersReducer"

export class UsersConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then((response) => {
                this.props.getUsers(response.data.items, response.data.totalCount, response.data.error)
            })
    }


    render() {
        return <Users {...this.props} />
    }

}

type MapStateToPropsType = {
    users: UserType[]
    totalCount: number | null
    error: string | null
}

type MapDispatchToPropsType = {
    getUsers: (users: UserType[], totalCount: number, error: string | null) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.items,
        totalCount: state.usersPage.totalCount,
        error: state.usersPage.error,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        getUsers: (users: UserType[], totalCount: number, error: string | null) => dispatch(getUserActionCreator(users, totalCount, error))
    }
}

export type ConnectedPropsType = MapDispatchToPropsType & MapStateToPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
