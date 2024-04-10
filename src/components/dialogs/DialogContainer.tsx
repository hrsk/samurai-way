import React from "react";
import { ConnectedProps, connect } from "react-redux";
import { AppStateType } from "../../store/redux-store";
import { DialogType, MessageType } from "../../types";
import { changeMessageText, sendMessage } from "../reducers/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../features/hoc/RedirectComponent";

export class DialogsConnectComponent extends React.Component<ConnectedPropsType, AppStateType> {
    componentDidMount(): void {

    }

    changeMessageText = () => {
        this.props.changeMessageText(this.props.messageText)
    }

    sendMessage = () => {
        this.props.sendMessage()
    }

    render(): React.ReactNode {
        if (!this.props.isAuth) return <Redirect to={'/login'} />
        return <Dialogs {...this.props} />
    }
}
type MapStateToPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    messageText: string
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        messageText: state.messagesPage.messageText,
        isAuth: state.auth.isAuth
    }
}

type PropsFromRedux = ConnectedProps<typeof connector>
export type ConnectedPropsType = MapStateToPropsType & PropsFromRedux

const connector = connect(mapStateToProps, { changeMessageText, sendMessage })

export const DialogsContainer = withAuthRedirect(connector(DialogsConnectComponent))