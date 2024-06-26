import React, { ClassAttributes, ComponentType } from "react";
import { ConnectedProps, connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { Preloader } from "../../features/Preloader";
import { withAuthRedirect } from "../../features/hoc/RedirectComponent";
import { AppStateType } from "../../store/redux-store";
import { PostType, UserProfileType } from "../../types";
import { fetching } from "../reducers/appReducer";
import { addPost, getUserProfile, uploadUserPhotoThunk } from "../reducers/profileReducer";
import { changeUserStatus, getUserStatus, setUserStatus } from "../reducers/usersReducer";
import { Profile } from "./Profile";

export class ProfileConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    refreshProfile() {
        let userId = this.props.match.params.userId

        if (!userId) {
            this.props.getUserProfile(Number(this.props.userId))
            this.props.getUserStatus(Number(this.props.userId))
            // this.props.getUserProfile(18933)
            // this.props.getUserStatus(18933)
        }

        if (userId) {
            this.props.getUserProfile(Number(userId))
            this.props.getUserStatus(Number(userId))
        }
    }

    componentDidMount() {

        this.refreshProfile()
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    // changePostText = (value: string) => {
    //     this.props.changePostText(value)
    // }

    addPost = (value: string) => {
        this.props.addPost(value)
    }

    changeUserStatusHandler = (value: string) => {
        this.props.changeUserStatus(value)
    }

    setUserStatusHandler = (value: string) => {
        this.props.setUserStatus(value)
    }

    setUserPhotoHandler = (image: File) => {
        this.props.uploadUserPhotoThunk(image)
    }

    render() {

        let isOwner: boolean = !this.props.match.params.userId

        // if (!this.props.isAuth) return <Redirect to={'/login'} />
        return (
            this.props.isFetching
                ? <Preloader />
                : <Profile {...this.props}
                    isOwner={isOwner}
                    uploadUserPhoto={this.setUserPhotoHandler}
                    changeUserStatusHandler={this.changeUserStatusHandler}
                    setUserStatusHandler={this.setUserStatusHandler} />
        )
    }
}

type MapStateToPropsType = {
    posts: PostType[]
    // postText: string
    userProfile: UserProfileType
    isFetching: boolean
    isAuth: boolean
    status: string
    userId: number | null
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        // postText: state.profilePage.postText,
        userProfile: state.profilePage.user,
        isFetching: state.app.isFetching,
        isAuth: state.auth.isAuth,
        status: state.usersPage.status,
        userId: state.auth.authData.id
    }
}

interface OwnProps extends ClassAttributes<ProfileConnectedComponent> { }
type PropsFromRedux = ConnectedProps<typeof connector>
export type ConnectedPropsType = MapStateToPropsType & PropsFromRedux & OwnProps & RouteComponentProps<RouteParams>

const connector = connect(mapStateToProps, {
    addPost, fetching, getUserProfile,
    getUserStatus, changeUserStatus,
    setUserStatus, uploadUserPhotoThunk,
});

type RouteParams = {
    userId: string
}

// const WithRouterComponent = withRouter(ProfileConnectedComponent)
// export const ProfileContainer = withAuthRedirect(connector(WithRouterComponent))

export const ProfileContainer = compose<ComponentType>(
    withAuthRedirect,
    withRouter,
    connector,
)(ProfileConnectedComponent)