
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Post = ({post}) => {
    const {id, title, body}=post;
    return (
        <div className='p-5 bg-blue-200 border-4 rounded-xl shadow-xl'>
            <h2>post Id:{id} </h2>
            <h2>{title}</h2>
            <p>{body.slice(0,50)}</p>
            <button className='bg-blue-300 rounded-lg shadow-xl p-3 mt-5'><Link to={`/post/${id}`}>Post Details</Link></button>
        </div>
    );
};

Post.propTypes={
    post:PropTypes.object,
}
export default Post;