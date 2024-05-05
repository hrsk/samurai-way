import { ReactChild, } from 'react'
import classes from './CustomButton.module.css'

type defaultProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ButtonProps extends defaultProps {
    className?: string
    children: ReactChild
    onClick: () => void
    disabled?: boolean
}

export const CustomButton = ({ children, className, onClick }: ButtonProps) => <button className={className || classes.button} onClick={onClick} type="button">{children}</button>