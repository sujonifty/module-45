import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Our Users:{users.length}</h2>
            <p>Welcome to join us.</p>
            <div className="p-5  grid grid-cols-1 md:grid-cols-3  gap-10">
                {
                    users.map(user => <User  key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;