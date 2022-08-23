import React, { Component } from 'react';
// import axios from 'axios';
import './Blog.css';
import { Route, Routes, NavLink, useParams } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import About from './About/About';
import FullPost from './FullPost/FullPost';
const Blog = () => {

let {id} = useParams();

    return (
        <div className='Blog'>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/new-post'>Now Post</NavLink></li>
                        <li><NavLink to='/about' >About</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" exact element={<Posts />} />
                <Route path="/new-post" element={<NewPost />} />
                <Route path=":id"  element={<FullPost />} />
                {/* <Route path="/:id" exact element={<FullPost />} /> */}
                <Route path="/about" element={<About />} />
            </Routes>

        </div>
    );
}


export default Blog;