import {Profile} from "./Profile";
import React from "react";
import {AppStateType} from "../redux/redux-store";
import {ProfilePropsType} from "./ProfileContainer";
import axios from "axios";
import {ProfileResponseType} from "../reducers/profile-reducer";

export class ProfileClassComponent extends React.PureComponent<ProfilePropsType, AppStateType> {
    componentDidMount() {
        axios
            .get<ProfileResponseType>(
                `https://social-network.samuraijs.com/api/1.0/profile/2`
            )
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props}/>;
    }
}