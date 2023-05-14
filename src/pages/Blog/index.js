import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

const Blog = () => {
    const params = useParams();

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [params.id])

    return (
        <div className='container pt-5'>
            <div className='card'>
                <img className='card-img' id={`img-${posts.id}`}
                    alt="Card image cap"
                    src={`https://picsum.photos/900/300?random=${posts.id}`}
                    width="100%"
                />
                <div className='card-overlay'>
                    <div className='card-title card-detail'>
                        <h1>{posts.title}</h1>
                        <h3>
                            {posts.body}
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog