import { PostsList } from './feautures/posts/PostsList';
import { AddPostForm } from './feautures/posts/AddPostForm';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SinglePostPage } from './feautures/posts/SinglePostPage';
import { EditPostForm } from './feautures/posts/EditPostForm';
import { UserList } from './feautures/users/UsersList';
import { UserPage } from './feautures/users/UserPage';
import TodoList from './feautures/todos/TodoList';

function App() {
  return (
    <TodoList />
  );
}

export default App;
