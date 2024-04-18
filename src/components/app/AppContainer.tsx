import React, { ComponentType } from "react"
import { ConnectedProps, connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import { AppStateType } from "../../store/redux-store"
import { getAuthUserData } from "../reducers/authReducer"
import { App } from "./App"

export class AppConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    componentDidMount(): void {
        this.props.getAuthUserData()
    }

    render() {
        return <App />
    }
}

type MapStateToPropsType = {
    isFetching: boolean
    isAuth: boolean
    isInitialized: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isFetching: state.app.isFetching,
        isAuth: state.auth.isAuth,
        isInitialized: state.app.isInitialized
    }
}

type PropsFromRedux = ConnectedProps<typeof connector>

const connector = connect(mapStateToProps, { getAuthUserData })

type ConnectedPropsType = MapStateToPropsType & PropsFromRedux

export const AppContainer = compose<ComponentType>(
    withRouter,
    connector,
)(AppConnectedComponent)