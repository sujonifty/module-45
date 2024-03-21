import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email}=user;
    const navigate = useNavigate()
    const handleUser=()=>{
        navigate(`/user/${id}`);
    }
    return (
        <div className='p-5 bg-blue-200 border-4 rounded-xl shadow-xl'>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <Link to={`/user/${id}`}>Click To Details</Link><br />
            <button onClick={handleUser} className='bg-blue-300 rounded-lg p-3 mt-5 shadow-xl'>Show details by btn</button>
            
        </div>
    );
};
User.propTypes={
    user:PropTypes.object,
}
export default User;