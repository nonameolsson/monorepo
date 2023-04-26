import { useState } from 'react';

import { Button, Card, Header, TextInput } from '@tma/andreas-ui';
import { Post } from '@tma/schemas';
import { useFetch } from '@tma/utils';

import styles from './app.module.css';

const url = `http://localhost:3333/api/posts/latest`;

export function App() {
  const { data, error } = useFetch<Post>(url);
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
      <div className={styles['wrapper']}>
        <h3>Latest post</h3>
        {data && <Card title={data.title} description={data.body} />}
        {error && <p>Error fetching posts</p>}
      </div>
    </div>
  );
}

export default App;
