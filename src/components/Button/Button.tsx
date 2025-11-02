import type { ReactNode } from "react"
import styles from './Button.module.css'

interface IButtonProps {
    children: ReactNode
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    className?: string 
}

const Button = ({children, onClick, className = ''}: IButtonProps) => {
    return (
        <div>
            <button className={`${styles.button} ${className}`} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}
export default Button