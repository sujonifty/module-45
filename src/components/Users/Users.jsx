import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users =useLoaderData();
    return (
        <div>
            <h2>Our Users:{users.length}</h2>
            <p>Welcome to join us.</p>
            {
                users.map(user=><User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;