import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts=useLoaderData();

    // console.log(posts)
    return (
        <div className="p-5  grid grid-cols-1 md:grid-cols-3  gap-10">
            <h2>Posts:{posts.length}</h2>
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;