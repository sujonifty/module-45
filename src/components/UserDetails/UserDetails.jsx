import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user=useLoaderData();
    const {name, website}=user;
    const navigate=useNavigate();
    const handleUserBack=()=>{
        navigate(-1);
    }
    return (
        <div className=" bg-blue-100 p-5">
            <h2>Details about user:{name}</h2>
            <h2>Visit us:{website}</h2>
            <button onClick={handleUserBack} className='bg-blue-300 rounded-lg p-3 mt-5 shadow-xl'>Show details by btn</button>

        </div>
    );
};

export default UserDetails;