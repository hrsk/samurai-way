import {Profile} from "./Profile";
import React from "react";
import {AppStateType} from "../redux/redux-store";
import {ConnectedPropsType} from "./ProfileContainer";
import {API} from "../api/API";

export class ProfileClassComponent extends React.PureComponent<ConnectedPropsType, AppStateType> {
    componentDidMount() {

        API.authMe().then(data => {
            if (data.resultCode === 0) {
                this.props.auth({
                    id: data.data.id,
                    email: data.data.email,
                    login: data.data.login
                }, true, data.messages[0])
            }
        })

        let userId = Number(this.props.match.params.userId)

        if (!userId) {
            API.getUserProfile(18933).then(data => {
                this.props.setUserProfile(data)
            })
        }

        if (userId) {
            API.getUserProfile(userId).then(data => {
                this.props.setUserProfile(data)
            })
        }
    }

    render() {
        return <Profile {...this.props}/>;
    }
}