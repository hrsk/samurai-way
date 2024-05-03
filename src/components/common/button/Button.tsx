import { ReactChild, ReactNode } from 'react'
import classes from './Button.module.css'

type defaultProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ButtonProps extends defaultProps {
    className?: string
    children: ReactChild
    onClick: () => void
}

export const Button = ({ children, className, onClick }: ButtonProps) => <button className={className || classes.button} onClick={onClick} type="button">{children}</button>