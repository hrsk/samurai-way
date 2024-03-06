import style from "./Message.module.css"

type PropsType = {
    message: string
}

export const Message = ({ message }: PropsType) => {

    return (
        <li className={style.li}>
            {message}
        </li>
    );
};
