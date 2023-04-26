import { Card, Header } from '@tma/andreas-ui';
import { Post } from '@tma/schemas';
import { useFetch } from '@tma/utils';

import styles from './app.module.css';

const url = `http://localhost:3333/api/posts`;

export function App() {
  const { data, error } = useFetch<Post[]>(url);

  return (
    <div className={styles['app']}>
      <div className={styles['wrapper']}>
        <Header title="Blog" description="This is a blog app" />
      </div>
      <ul className={styles['posts']}>
        {data &&
          data.map((post) => (
            <Card key={post.id} title={post.title} description={post.body} />
          ))}
      </ul>
      {error && <div>{error.message}</div>}
    </div>
  );
}

export default App;
