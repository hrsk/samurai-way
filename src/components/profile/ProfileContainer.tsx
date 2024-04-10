import React, { ClassAttributes } from "react";
import { ConnectedProps, connect } from "react-redux";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { Preloader } from "../../features/Preloader";
import { AppStateType } from "../../store/redux-store";
import { PostType, UserProfileType } from "../../types";
import { fetching } from "../reducers/appReducer";
import { addPost, changePostText, getUserProfile } from "../reducers/profileReducer";
import { Profile } from "./Profile";
import { withAuthRedirect } from "../../features/hoc/RedirectComponent";

export class ProfileConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    refreshProfile() {
        let userId = this.props.match.params.userId

        if (!userId) {
            this.props.getUserProfile(18933)
        }

        if (userId) {
            this.props.getUserProfile(Number(userId))
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

    changePostText = (value: string) => {
        this.props.changePostText(value)
    }

    addPost = () => {
        this.props.addPost()
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'} />
        return (
            this.props.isFetching
                ? <Preloader />
                : <Profile {...this.props} />
        )
    }
}

type MapStateToPropsType = {
    posts: PostType[]
    postText: string
    userProfile: UserProfileType
    isFetching: boolean
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        postText: state.profilePage.postText,
        userProfile: state.profilePage.user,
        isFetching: state.app.isFetching,
        isAuth: state.auth.isAuth,
    }
}

interface OwnProps extends ClassAttributes<ProfileConnectedComponent> { }
type PropsFromRedux = ConnectedProps<typeof connector>
export type ConnectedPropsType = MapStateToPropsType & PropsFromRedux & OwnProps & RouteComponentProps<RouteParams>

const connector = connect(mapStateToProps, { changePostText, addPost, fetching, getUserProfile });

type RouteParams = {
    userId: string
}

const WithRouterComponent = withRouter(ProfileConnectedComponent)
export const ProfileContainer = withAuthRedirect(connector(WithRouterComponent))
