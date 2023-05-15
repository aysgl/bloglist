import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './index.scss';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [posts, setPosts] = useState([])

  const fetchPost = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div className='container'>
      <div>
        <h1 className='title'>-blog-</h1>
      </div>
      <div className='row'>
        {posts.map(i =>
          <div className='col' key={i.id}>
            <Link to={`/blog/${i.id}`}>
              <div className='card'>
                <img className='card-img' id={`img-${i.id}`}
                  alt="Card image cap"
                  src={`https://picsum.photos/300/200?random=${i.id}`}
                  width="100%"
                />
                <div className='card-overlay'>
                  <div className="card-title">
                    {i.title}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
