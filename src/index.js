import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { fetchUsers } from './feautures/users/usersSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchPosts } from './feautures/posts/postsSlice';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './feautures/api/apiSlice';

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ApiProvider api={apiSlice}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  </Provider>
);
