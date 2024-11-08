import {Profile} from "./Profile";
import React from "react";
import {AppStateType} from "../redux/redux-store";
import {ConnectedPropsType} from "./ProfileContainer";

export class ProfileClassComponent extends React.PureComponent<ConnectedPropsType, AppStateType> {
    componentDidMount() {

        this.props.authMe()

        let userId = Number(this.props.match.params.userId)

        if (!userId) {
            this.props.getUserProfile(18933)
        }

        if (userId) {
            this.props.getUserProfile(userId)
        }
    }

    render() {
        return <Profile {...this.props}/>;
    }
}