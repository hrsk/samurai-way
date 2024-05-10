import { ReactChild, } from 'react'
import classes from './CustomButton.module.css'

type defaultProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ButtonProps extends defaultProps {
    className?: string
    children: ReactChild
    onClick?: () => void
    disabled?: boolean
    type?: 'submit' | 'reset' | 'button' | undefined
}

export const CustomButton = ({ children, className, onClick, type }: ButtonProps) => <button className={className || classes.button} onClick={onClick} type={type || "button"}>{children}</button>