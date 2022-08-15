import axios from '../../../axios';
import React, { Component } from "react"
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
    }
    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 6);
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
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;