import React, { Component } from 'react';
// import axios from 'axios';
import './Blog.css';
import { Route, Routes } from 'react-router-dom';

class Blog extends Component {

    render() {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/new-post'>Now Post</a></li>
                            <li><a href='/about'>Now Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" exact element={<h1>Home</h1>} />
                    <Route path="/new-post" exact element={<h1>New Post</h1>} />
                    <Route path="/about" exact element={<h1>about</h1>} />
                </Routes>

            </div>
        );
    }
}

export default Blog;