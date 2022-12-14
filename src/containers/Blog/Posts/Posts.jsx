import axios from '../../../axios';
import { Link } from 'react-router-dom'
import React, { Component } from "react"
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
    }
    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(this.props);
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 4);
                const updatePosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'David'
                    }
                })
                this.setState({ posts: updatePosts });
                // console.log(res);
            })
            .catch(error => {
                console.log(error);
                // this.setState({ error: true });
            });
    }
    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        if (!this.state.error) {

            posts = this.state.posts.map(post => {
                return (
                    <Link to={'/' + post.id} key={post.id}>
                        <Post
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)} />
                    </Link>
                );
            });
        }
        return (
            <section className="Posts" >
                {posts}
            </section>
        );
    }
}

export default Posts;