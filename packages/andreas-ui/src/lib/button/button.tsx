import styles from './button.module.css';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button(props: ButtonProps) {
  return (
    <button className={styles['button']} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
