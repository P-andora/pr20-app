import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PostList from './PostList';
import PostDetails from './PostDetails';
import PostForm from './PostForm';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts', error);
        }
    };

    const fetchPostDetails = async (id) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setSelectedPost(response.data);
        } catch (error) {
            console.error('Error fetching post details', error);
        }
    };

    const createPost = async (newPost) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
            setPosts([...posts, response.data]);
        } catch (error) {
            console.error('Error creating post', error);
        }
    };

    const updatePost = async (updatedPost) => {
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, updatedPost);
            setPosts(posts.map(post => (post.id === updatedPost.id ? response.data : post)));
            setSelectedPost(null);
        } catch (error) {
            console.error('Error updating post', error);
        }
    };

    const deletePost = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error('Error deleting post', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="App">
            <h1>Работа с Axios и JSONPlaceholder</h1>
            <button onClick={fetchPosts}>Загрузить посты</button>
            <PostList posts={posts} onDetails={fetchPostDetails} onDelete={deletePost} />
            {selectedPost && <PostDetails post={selectedPost} onClose={() => setSelectedPost(null)} onEdit={updatePost} />}
            <PostForm onSubmit={createPost} />
        </div>
    );
};

export default App;
