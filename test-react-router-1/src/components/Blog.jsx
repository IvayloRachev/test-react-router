import React, { useState, useEffect} from 'react';
import '../lib';
import { Link } from 'react-router-dom';

const Blog = () => {
        useEffect(() => {
            getAllPosts();
        }, [])
        const [posts, setPosts] = useState([])
        const getAllPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const allPosts = await response.json()
            console.log(allPosts);
            setPosts(allPosts);
        }
    return ( 
        <div>
            <h1>Blog</h1>
            {posts.take().map(post => <h4><Link key={post.id}>{post.title}</Link></h4>)}
        </div>
    );
}
 
export default Blog;