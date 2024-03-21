import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email}=user;
    return (
        <div className='p-5 bg-blue-200 border-4 rounded-xl shadow-xl'>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <button className='bg-blue-300 rounded-lg p-3 mt-5 shadow-xl'><Link to={`/user/${id}`}>User Details</Link></button>
            
        </div>
    );
};
User.propTypes={
    user:PropTypes.object,
}
export default User;