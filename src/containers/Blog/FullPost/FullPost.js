import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FullPost.css';
import { useParams } from 'react-router-dom';



const FullPost = (props) => {

    const [loadedPost, setLoadedPost] = useState();
    function setLoad() {
        setLoadedPost(loadedPost = null);
    }
    const par = useParams();

    const deletePostHandler = (props) => {
        axios.delete('/posts/' + props.id)
            .then(res => {
                console.log('Delete post :', deletePostHandler(res));
            });
    }
    useEffect(() => {
        if (props.id) {
            if (!loadedPost || (loadedPost && loadedPost.id !== props.id)) {
                axios.get('/posts/' + props.id)
                    .then(res => {
                        // console.log(res);
                        setLoadedPost({ loadedPost: deletePostHandler(res.data) });
                    });
            }
        };
    });


    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

    if (props.id) {
        post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
    }
    if (loadedPost) {
        post = <div className="FullPost">
            <h1>{loadedPost.title}</h1>
            <p>{loadedPost.body}</p>
            <div className="Edit">
                <button className="Delete" onClick={deletePostHandler}>Delete</button>
            </div>
        </div>
    }
    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );


}
export default FullPost;
{/* class FullPost extends Component {
//     state = {
//         loadedPost: null
//     }
//     params = () => {
//         const par = useParams();
//     }
//     componentDidMount() {
//         if (this.props.id) {
//             console.log(this.props.id);
//             if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
//                 axios.get('/posts/' + this.props.id)
//                     .then(res => {
//                         // console.log(res);
//                         this.setState({ loadedPost: res.data });
//                     });
//             }
//         };
//     }
//     deletePostHandler = () => {
//         axios.delete('/posts/' + this.props.id)
//             .then(res => {
//                 console.log('Delete this post :', res);
//             });
//     }
//     render() {
//         let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

//         if (this.props.id) {
//             post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
//         }
//         if (this.state.loadedPost) {
//             post = (
//                 <div className="FullPost">
//                     <h1>{this.state.loadedPost.title}</h1>
//                     <p>{this.state.loadedPost.body}</p>
//                     <div className="Edit">
//                         <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
//                     </div>
//                 </div>

//             );
//         }
//         return post;
//     }
// }

// export default FullPost;
 */}
