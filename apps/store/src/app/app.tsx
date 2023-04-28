import { useState } from 'react';

import { Button, Card, Header, TextInput } from '@nonameolsson/andreas-ui';
import { Post } from '@nonameolsson/schemas';
import { useFetch } from '@nonameolsson/utils';

import styles from './app.module.css';

// TODO: Change to `useFetch()`
const url = `http://localhost:3333/api/posts/latest`;
const total = `http://localhost:3333/api/posts/total`;

export function App() {
  const { data: postData, error: postError } = useFetch<Post>(url);
  const { data: totalData } = useFetch<string>(total);
  const [text, setText] = useState('');

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    alert(text);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <div className={styles['app']}>
      <div className={styles['wrapper']}>
        <Header
          title="Store"
          description="This is a store app, buy whatever you want!"
        />
        <div>
          <p>We have {totalData} products</p>
          <TextInput
            placeholder="Product"
            onChange={handleChange}
            value={text}
          />
          <Button onClick={handleClick}>Buy!</Button>
        </div>
      </div>
      <div className={styles['wrapper']}>
        <h3>Latest post</h3>
        {postData && (
          <Card title={postData.title} description={postData.body} />
        )}
        {postError && <p>Error fetching posts</p>}
      </div>
    </div>
  );
}

export default App;
