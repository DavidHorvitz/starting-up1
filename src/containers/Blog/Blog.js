import React, { Component } from 'react';
// import axios from 'axios';
import './Blog.css';
import { Route, Routes, Link } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import About from './About/About';
class Blog extends Component {

    render() {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/new-post'>Now Post</Link></li>
                            <li><Link to='/about' >About</Link></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" exact element={<Posts />} />
                    <Route path="/new-post" element={<NewPost />} />
                    <Route path="/about" element={<About />} />
                </Routes>

            </div>
        );
    }
}

export default Blog;