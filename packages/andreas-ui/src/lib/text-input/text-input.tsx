import styles from './text-input.module.css';

/* eslint-disable-next-line */
export interface TextInputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export function TextInput(props: TextInputProps) {
  // const [value, setValue] = useState<string>('');

  // const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setValue(e.target.value);
  // };

  return (
    <input
      className={styles['text-input']}
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
}

export default TextInput;
