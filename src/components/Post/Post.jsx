
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    const {id, title, body}=post;
    const navigate=useNavigate();
    const handlePost=()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='p-5 bg-blue-200 border-4 rounded-xl shadow-xl'>
            <h2>post Id:{id} </h2>
            <h2>{title}</h2>
            <p>{body.slice(0,50)}</p>
            <Link to={`/post/${id}`}>Post Details</Link><br />
            <button onClick={handlePost} className='bg-blue-300 rounded-lg shadow-xl p-3 mt-5'>Show details By Btn</button>
        </div>
    );
};

Post.propTypes={
    post:PropTypes.object,
}
export default Post;