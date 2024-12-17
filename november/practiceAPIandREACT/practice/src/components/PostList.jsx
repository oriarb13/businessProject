import { fetchData1 } from "../utils/API.jsx"

import { useState, useEffect } from 'react';



const PostList=()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const loadPosts=async ()=>{
            const data = await fetchData1()
            setPosts(data)
        }
        loadPosts()
    },[])
    return (
        <ul>
            {posts.map(post=>(
                <li key={post.id}>{post.title}</li>
            ))}

        </ul>

    )
}
export default PostList