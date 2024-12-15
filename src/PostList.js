import React from 'react';

const PostList = ({ posts, onDetails, onDelete }) => {
    return (
        <div>
            <h2>Список постов</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <button onClick={() => onDetails(post.id)}>Подробнее</button>
                        <button onClick={() => onDelete(post.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
