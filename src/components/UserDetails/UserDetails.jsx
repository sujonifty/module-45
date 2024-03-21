import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user=useLoaderData();
    const {name, website}=user;
    return (
        <div className=" bg-blue-100 p-5">
            <h2>Details about user:{name}</h2>
            <h2>Visit us:{website}</h2>
        </div>
    );
};

export default UserDetails;