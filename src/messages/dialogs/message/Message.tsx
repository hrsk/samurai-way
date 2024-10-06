type PropsType = {
	messageText: string
}
export const Message = (props: PropsType) => {
	return <li>{props.messageText}</li>
}
