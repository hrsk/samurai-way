import React from "react";
import { ConnectedProps, connect } from "react-redux";
import { AppStateType } from "../../store/redux-store";
import { LoginForm } from "./LoginForm";

export class LoginConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {
    // componentDidMount(): void {

    // }

    showResultValues = (values: any) => {
        console.log(JSON.stringify(values, null, 2))
    }

    render(): React.ReactNode {
        return <LoginForm {...this.props} onSubmit={(values) => this.showResultValues(values)} />
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
