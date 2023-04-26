import { Button, Card, Header, TextInput } from '@tma/andreas-ui';
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
        <Header title="Blog" description="This is a blog app" />
        <TextInput placeholder="Product" onChange={handleChange} value={text} />
        <Button onClick={handleClick}>Search</Button>
      </div>
      <ul className={styles['posts']}>
        <Card title="Post 1" description="Lorem ipsum" />
        <Card title="Post 2" description="Lorem ipsum" />
      </ul>
    </div>
  );
}

export default App;
