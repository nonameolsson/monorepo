import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {
  title: string;
  description?: string;
}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['header']}>
      <h1>{props.title}</h1>
      {props.description && <h2>{props.description}</h2>}
    </div>
  );
}

export default Header;
