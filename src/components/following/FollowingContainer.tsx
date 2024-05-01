import React, { ComponentType } from "react";
import { AppStateType } from "../../store/redux-store";
import { ConnectedProps, connect } from "react-redux";
import { Nullable, UserType } from "../../types";
import { getFollowings, selectPage } from "../reducers/followingsReducer";
import { subscribeUser, unsubscribeUser } from "../reducers/usersReducer";
import { compose } from "redux";
import { Followings } from "./Followings";

export class FollowingsConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    componentDidMount() {
        this.props.getFollowings(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.selectPage(pageNumber, this.props.pageSize)
    }

    subscribe = (userId: number) => {
        this.props.subscribeUser(userId)
    }

    unsubscribe = (userId: number) => {
        this.props.unsubscribeUser(userId)
    }

    render() {
        return <Followings {...this.props}
            setCurrentPage={this.setCurrentPage}
            subscribe={this.subscribe}
            unsubscribe={this.unsubscribe} />

    }
}


type MapStateToPropsType = {
    followings: UserType[]
    currentPage: number
    pageSize: number
    totalCount: number
    error: Nullable<string>
    isFetching: boolean
    isFollow: number[]
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        currentPage: state.followings.currentPage,
        pageSize: state.followings.pageSize,
        followings: state.followings.followings,
        totalCount: state.followings.totalCount,
        error: state.usersPage.error,
        isFetching: state.app.isFetching,
        isFollow: state.usersPage.isFollow,
    }
}

type PropsFromRedux = ConnectedProps<typeof connector>
export type ConnectedPropsType = MapStateToPropsType & PropsFromRedux


const connector = connect(mapStateToProps, { getFollowings, selectPage, subscribeUser, unsubscribeUser });
export const FollowingsContainer = compose<ComponentType>(connector)(FollowingsConnectedComponent)
