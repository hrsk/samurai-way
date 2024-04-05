import { ConnectedProps, connect } from "react-redux"
import { AppStateType } from "../../store/redux-store"
import { auth } from "../reducers/authReducer"
import { Header } from "./Header"
import React from "react"
import { API } from "../../api/API"

export class HeaderConnectComponent extends React.Component<ConnectedPropsType, AppStateType>  {

    componentDidMount() {
        API.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.auth(response.data.data)
                }
            })

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

const connector = connect(mapStateToProps, { auth });

export type ConnectedPropsType = MapStateToPropsType & PropsFromRedux

export const HeaderContainer = connector(HeaderConnectComponent)