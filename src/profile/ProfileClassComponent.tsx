import {Profile} from "./Profile";
import React from "react";
import {AppStateType} from "../redux/redux-store";
import {ConnectedPropsType, ProfilePropsType} from "./ProfileContainer";
import axios from "axios";
import {ProfileResponseType} from "../reducers/profile-reducer";

export class ProfileClassComponent extends React.PureComponent<ConnectedPropsType, AppStateType> {
    componentDidMount() {

        let userId = this.props.match.params.userId

        if (!userId) {
            axios
                .get<ProfileResponseType>(
                    `https://social-network.samuraijs.com/api/1.0/profile/${18933}`
                )
                .then(response => {
                    this.props.setUserProfile(response.data)
                })
        }

        if (userId) {
            axios
                .get<ProfileResponseType>(
                    `https://social-network.samuraijs.com/api/1.0/profile/${Number(userId)}`
                )
                .then(response => {
                    this.props.setUserProfile(response.data)
                })        }

        // axios
        //     .get<ProfileResponseType>(
        //         `https://social-network.samuraijs.com/api/1.0/profile/2`
        //     )
        //     .then(response => {
        //         this.props.setUserProfile(response.data)
        //     })
    }

    render() {
        return <Profile {...this.props}/>;
    }
}