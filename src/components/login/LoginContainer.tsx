import React from "react";
import { ConnectedProps, connect } from "react-redux";
import { AppStateType } from "../../store/redux-store";
import { Login } from "./Login";
import { FormDataType } from "./LoginForm";
import { loginUser } from "../reducers/authReducer";

export class LoginConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    handleSubmit = (values: FormDataType) => {
        this.props.loginUser(values.email, values.password, values.rememberMe)
        console.log(JSON.stringify(values, null, 2))
        console.log(this.props.error)
    }

    render(): React.ReactNode {
        return <Login {...this.props} onSubmit={this.handleSubmit} />
    }
}

type MapStateToPropsType = {
    error: string | null
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        error: state.auth.error
    }
}

type PropsFromRedux = ConnectedProps<typeof connector>
export type ConnectedPropsType = MapStateToPropsType & PropsFromRedux

const connector = connect(mapStateToProps, { loginUser })

export const LoginContainer = connector(LoginConnectedComponent)
