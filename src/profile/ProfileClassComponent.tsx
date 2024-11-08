import {Profile} from "./Profile";
import React from "react";
import {AppStateType} from "../redux/redux-store";
import {ConnectedPropsType} from "./ProfileContainer";

export class ProfileClassComponent extends React.PureComponent<ConnectedPropsType, AppStateType> {
    componentDidMount() {

        this.props.authMe()

        let userId = Number(this.props.match.params.userId)

        if (!userId) {
            this.props.getUserProfile(this.props.id)
        }

        if (userId) {
            this.props.getUserProfile(userId)
        }
    }

    render() {
        //TODO: redirect with use Redirect component

        // if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile {...this.props}/>
    }
}