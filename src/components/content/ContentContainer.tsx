import { connect } from "react-redux"
import { Dispatch } from "redux"
import { MessagesPageType, ProfilePageType } from "../../types"
import { Content } from "./Content"
import { addPostActionCreator, changePostTextActionCreator } from "../reducers/profileReducer"
import { changeMessageTextActionCreator, sendMessageActionCreator } from "../reducers/dialogsReducer"
import { AppStateType } from "../../store/redux-store"


export const ContentConnectComponent = (props: ConnectedProps) => {

    return <Content {...props} />
}

type MapStateToPropsType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

type MapDispatchToPropsType = {
    changePostText: (value: string) => void
    addPost: () => void,
    changeMessageText: (value: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        messagesPage: state.messagesPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changePostText: (value: string) => dispatch(changePostTextActionCreator(value)),
        addPost: () => dispatch(addPostActionCreator()),
        changeMessageText: (value: string) => dispatch(changeMessageTextActionCreator(value)),
        sendMessage: () => dispatch(sendMessageActionCreator()),
    }
}

export type ConnectedProps = MapDispatchToPropsType & MapStateToPropsType

export const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(ContentConnectComponent)