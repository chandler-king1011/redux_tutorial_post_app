import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import Posts from './components/posts';
import PostForm from './components/postForm';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
