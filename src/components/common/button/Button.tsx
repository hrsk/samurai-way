import { ReactChild } from 'react'
import classes from './Button.module.css'

type defaultProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ButtonProps extends defaultProps {
    className?: string
    children: ReactChild
    onClick?: () => void
    type?: 'submit' | 'reset' | 'button' | undefined
}

export const Button = ({ children, className, onClick, type }: ButtonProps) => <button className={className || classes.button} onClick={onClick} type={type || "button"}>{children}</button>