import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Post from './components/Post';
import PostForm from './components/PostForm';




function App() {


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    if (storedPosts) {
      setPosts(storedPosts);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  function handleCreatePost(post) {
    setPosts([...posts, post]);
  }

  function handleEditPost(post) {
    setPosts(posts.map(p => (p.createdAt === post.createdAt ? post : p)));
  }

  function handleDeletePost(post) {
    setPosts(posts.filter(p => p.createdAt !== post.createdAt));
  }

  return (
    <div>
      <Header />
      <PostForm onSubmit={handleCreatePost} />
      {posts.map(post => (
        <Post
          key={post.createdAt}
          post={post}
          onEdit={handleEditPost} onDelete={handleDeletePost}
        />
      ))}
    </div>
  );
}


export default App;
