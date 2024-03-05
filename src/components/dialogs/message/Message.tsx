
type PropsType = {
    message: string
}

export const Message = ({ message }: PropsType) => {

    return (
        <li style={{ paddingBottom: '10px' }}>
            {message}
        </li>
    );
};
