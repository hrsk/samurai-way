import React, { ComponentType } from "react"
import { Preloader } from "../../features/Preloader"
import { App } from "./App"
import { AppStateType } from "../../store/redux-store"
import { ConnectedProps, connect } from "react-redux"
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import { appInitializing } from "../reducers/appReducer"

export class AppConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    componentDidMount(): void {
        this.props.appInitializing(true)
    }

    render() {
        return this.props.isFetching ? <Preloader /> : <App />
    }
}

type MapStateToPropsType = {
    isFetching: boolean
    isInitialized: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isFetching: state.app.isFetching,
        isInitialized: state.app.isInitialized
    }
}

type PropsFromRedux = ConnectedProps<typeof connector>

const connector = connect(mapStateToProps, { appInitializing })

type ConnectedPropsType = MapStateToPropsType & PropsFromRedux

export const AppContainer = compose<ComponentType>(
    withRouter,
    connector,
)(AppConnectedComponent)