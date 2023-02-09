import React, { useState } from 'react';

function Post({ post, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [content, setContent] = useState(post.content); function handleEdit() {
    onEdit({ ...post, title, author, content });
    setIsEditing(false);
  }

  return (
    <div className="post-container">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <button className="create-btn" onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p><strong>Author:</strong> {post.author}</p>
          <p><strong>Posted On:</strong> {post.createdAt}</p>
          <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="delete-btn" onClick={() => onDelete(post)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Post;

