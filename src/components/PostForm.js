import React, { useState } from 'react';

function PostForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({
            title,
            author,
            content,
            createdAt: new Date().toString()
        });
        setTitle('');
        setAuthor('');
        setContent('');
    }

    return (

        <form className='form' onSubmit={handleSubmit}>
          <h2>Create Post Below:</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={e => setContent(e.target.value)}
                required
            />
            <button className="create-btn" type="submit">Create Post</button>
        </form>
    );
}

export default PostForm;