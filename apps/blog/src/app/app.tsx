import { Card, Header } from '@nonameolsson/andreas-ui';
import { Post, Posts, PostsSchema } from '@nonameolsson/schemas';
import { Uppercase } from '@nonameolsson/text-fns';
import { count, useFetch } from '@nonameolsson/utils';

import styles from './app.module.css';

// TODO: Move this to a hook library
function usePosts() {
  const url = `http://localhost:3333/api/posts`;
  const { data, error } = useFetch<Post[]>(url);

  let posts: Posts = [];
  if (data) {
    posts = PostsSchema.parse(data);
  }

  return { data: posts, error };
}

export function App() {
  const { data, error } = usePosts();

  return (
    <div className={styles['app']}>
      <div className={styles['wrapper']}>
        <Header title="Blog" description="This is an aswemom blog app" />
      </div>
      <h4>{Uppercase('posts')}</h4>
      {error ? (
        <div>{error.message}</div>
      ) : (
        <>
          <ul className={styles['posts']}>
            {data.map((post) => (
              <Card key={post.id} title={post.title} description={post.body} />
            ))}
          </ul>
          <h3>Number of posts: {count(data)}</h3>
        </>
      )}
    </div>
  );
}

export default App;
