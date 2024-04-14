import React from "react";
import { ConnectedProps, connect } from "react-redux";
import { AppStateType } from "../../store/redux-store";
import { Login } from "./Login";
import { FormDataType } from "./LoginForm";

export class LoginConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    handleSubmit = (values: FormDataType) => {
        console.log(JSON.stringify(values, null, 2))
    }

    render(): React.ReactNode {
        return <Login {...this.props} onSubmit={this.handleSubmit} />
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
