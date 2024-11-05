import {Profile} from "./Profile";
import React from "react";
import {AppStateType} from "../redux/redux-store";
import {ConnectedPropsType, ProfilePropsType} from "./ProfileContainer";
import axios from "axios";
import {ProfileResponseType} from "../reducers/profile-reducer";
import {AuthResponseType} from "../reducers/auth-reducer";

export class ProfileClassComponent extends React.PureComponent<ConnectedPropsType, AppStateType> {
    componentDidMount() {

        axios.get<AuthResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
            // headers: {
            //     "Authorization": "Bearer d8575c15-bcce-416f-922a-aee98bc89411"
            // }
        }).then(
            response => {
                if (response.data.resultCode === 0) {
                    this.props.auth({
                        id: response.data.data.id,
                        email: response.data.data.email,
                        login: response.data.data.login
                    }, true, response.data.messages[0])
                }
            }
        )

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
                })
        }

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