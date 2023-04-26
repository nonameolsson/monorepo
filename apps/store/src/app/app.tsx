import { Button, Header, TextInput } from '@tma/andreas-ui';
import { useState } from 'react';
import styles from './app.module.css';

export function App() {
  const [text, setText] = useState('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert(text);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className={styles['app']}>
      <div className={styles['wrapper']}>
        <Header
          title="Store"
          description="This is a store app, buy whatever you want!"
        />
        <TextInput placeholder="Product" onChange={handleChange} value={text} />
        <Button onClick={handleClick}>Buy!</Button>
      </div>
    </div>
  );
}

export default App;
