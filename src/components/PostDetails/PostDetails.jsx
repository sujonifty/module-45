import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post=useLoaderData();
    const {id, title, body}=post
    const navigate=useNavigate();
    const handlePostBack=()=>{
        navigate(-1);
    }
    return (
        <div className="bg-red-200 p-5">
            <h2>post Id:{id} </h2>
            <h2>{title}</h2>
            <p>{body.slice(0,50)}</p>
            <button onClick={handlePostBack} className='bg-blue-300 rounded-lg shadow-xl p-3 mt-5'>Show details By Btn</button>

        </div>
    );
};

export default PostDetails;