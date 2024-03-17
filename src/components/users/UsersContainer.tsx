import { Dispatch } from "redux"
import { AppStateType } from "../../store/redux-store"
import { Users } from "./Users"
import { connect } from "react-redux"
import React from "react"

export class UsersConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    render() {
        return <Users {...this.props} />
    }

}

type MapStateToPropsType = {

}

type MapDispatchToPropsType = {
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
    }
}

export type ConnectedPropsType = MapDispatchToPropsType & MapStateToPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)