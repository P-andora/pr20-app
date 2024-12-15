import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, body, userId: 1 });
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Добавить новый пост</h2>
            <input
                type="text"
                placeholder="Название поста"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Текст поста"
                value={body}
                onChange={e => setBody(e.target.value)}
                required
            />
            <button type="submit">Добавить пост</button>
        </form>
    );
};

export default PostForm;
