import React, { useState } from 'react';

const PostDetails = ({ post, onClose, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const handleEdit = () => {
        onEdit({ ...post, title, body });
        setIsEditing(false);
    };

    return (
        <div>
            <h2>Детали поста</h2>
            {isEditing ? (
                <div>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea value={body} onChange={e => setBody(e.target.value)} />
                    <button onClick={handleEdit}>Сохранить</button>
                </div>
            ) : (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button onClick={() => setIsEditing(true)}>Редактировать</button>
                </div>
            )}
            <button onClick={onClose}>Закрыть</button>
        </div>
    );
};

export default PostDetails;
