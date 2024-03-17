import { connect } from "react-redux"
import { Dispatch } from "redux"
import { AppStateType, MessagesPageType, ProfilePageType } from "../../store/store"
import { Content } from "./Content"


export const ContentConnectComponent = (props: ConnectedProps) => {
    return <Content profilePage={props.profilePage} messagesPage={props.messagesPage} />
}

type MapStateToPropsType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

type MapDispatchToPropsType = {
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        messagesPage: state.messagesPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {

    }
}

type ConnectedProps = MapDispatchToPropsType & MapStateToPropsType

export const ContentContainer = connect(mapStateToProps)(ContentConnectComponent)