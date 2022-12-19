import { PostsList } from './feautures/posts/PostsList';
import { AddPostForm } from './feautures/posts/AddPostForm';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SinglePostPage } from './feautures/posts/SinglePostPage';
import { EditPostForm } from './feautures/posts/EditPostForm';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path='post'>
          <Route index element={<AddPostForm />} />
          <Route path=':postId' element={<SinglePostPage />} />
          <Route path='edit/:postId' element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
