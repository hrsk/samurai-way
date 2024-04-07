import React, { ClassAttributes } from "react";
import { ConnectedProps, connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Preloader } from "../../features/Preloader";
import { AppStateType } from "../../store/redux-store";
import { PostType, UserProfileType } from "../../types";
import { fetching } from "../reducers/appReducer";
import { addPost, changePostText, getUserProfile, getUserProfileThunkCreator } from "../reducers/profileReducer";
import { Profile } from "./Profile";

export class ProfileConnectedComponent extends React.Component<ConnectedPropsType, AppStateType> {

    // componentDidMount(): void {
    //     debugger
    //     const userId = this.props.match.params.userId

    //     this.props.fetching(true)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    //         .then((response) => {
    //             this.props.getUserProfile(response.data)
    //             this.props.fetching(false)
    //         })
    // }

    refreshProfile() {
        let userId = this.props.match.params.userId

        if (!userId) {
            this.props.getUserProfileThunkCreator(18933)
        }

        if (userId) {
            this.props.getUserProfileThunkCreator(Number(userId))
        }

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${Number(userId)}`)
        //     .then((response) => {
        //         this.props.getUserProfile(response.data)
        //         this.props.fetching(false)
        //     })
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
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        postText: state.profilePage.postText,
        userProfile: state.profilePage.user,
        isFetching: state.app.isFetching,
    }
}

interface OwnProps extends ClassAttributes<ProfileConnectedComponent> { }
type PropsFromRedux = ConnectedProps<typeof connector>
export type ConnectedPropsType = MapStateToPropsType & PropsFromRedux & OwnProps & RouteComponentProps<RouteParams>

const connector = connect(mapStateToProps, { getUserProfile, changePostText, addPost, fetching, getUserProfileThunkCreator });

type RouteParams = {
    userId: string
}

const WithRouterComponent = withRouter(ProfileConnectedComponent)
export const ProfileContainer = connector(WithRouterComponent)
