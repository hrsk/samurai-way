import React from "react"
import { ConnectedProps, connect } from "react-redux"
import { AppStateType } from "../../store/redux-store"
import { getAuthUserData, logoutUser } from "../reducers/authReducer"
import { Header } from "./Header"

export class HeaderConnectComponent extends React.Component<ConnectedPropsType, AppStateType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    logoutUserHandler = () => {
        this.props.logoutUser()
    }

    render() {
        return <Header {...this.props} />
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    email: string | null
    login: string | null
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        email: state.auth.authData.email,
        login: state.auth.authData.login,
    }
}

type PropsFromRedux = ConnectedProps<typeof connector>

const connector = connect(mapStateToProps, { getAuthUserData, logoutUser });

export type ConnectedPropsType = MapStateToPropsType & PropsFromRedux

export const HeaderContainer = connector(HeaderConnectComponent)