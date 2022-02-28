import classes from './Button.module.css';


interface ButtonProps {
    type?: any;
    className?: string;
    children: React.ReactNode;
    onClick?: any;
    disabled?: any;
}
const Button = (props: ButtonProps) => {
    return (
        <button
            type={props.type || 'button'}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
        {props.children}
      </button>
    )
}

export default Button;