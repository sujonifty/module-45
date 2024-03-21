import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post=useLoaderData();
    const {id, title, body}=post
    return (
        <div className="bg-red-200 p-5">
            <h2>post Id:{id} </h2>
            <h2>{title}</h2>
            <p>{body.slice(0,50)}</p>
        </div>
    );
};

export default PostDetails;