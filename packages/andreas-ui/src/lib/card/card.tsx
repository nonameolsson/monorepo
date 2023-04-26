import styles from './card.module.css';

/* eslint-disable-next-line */
export interface CardProps {
  title: string;
  description: string;
}

export function Card(props: CardProps) {
  return (
    <li className={styles['card']}>
      <h3 className={styles['card__header']}>{props.title}</h3>
      <p className={styles['card__body']}>{props.description}</p>
    </li>
  );
}

export default Card;
