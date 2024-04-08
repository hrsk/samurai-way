import React from "react";
import { ConnectedProps, connect } from "react-redux";
import { AppStateType } from "../../store/redux-store";
import { Login } from "./Login";

class LoginConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {
    componentDidMount(): void {

    }

    render(): React.ReactNode {
        return <Login {...this.props} />
    }
}

type MapStateToPropsType = {

}

const mapStateToProps = (): MapStateToPropsType => {
    return {

    }
}

type PropsFromRedux = ConnectedProps<typeof connector>
export type ConnectedPropsType = MapStateToPropsType & PropsFromRedux

const connector = connect(mapStateToProps, {})

export const LoginContainer = connector(LoginConnectedComponent)
