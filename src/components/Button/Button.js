import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = ({ type = 'submit', className, onClick, children }) => {
    return (<button type={type} className={clsx(styles.button, className)} onClick={onClick}>{children}</button>);
};

export default Button;