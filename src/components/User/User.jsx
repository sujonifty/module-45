import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email}=user;
    return (
        <div className='p-5 bg-blue-200 border-4 rounded-xl '>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <Link to={`/user/${id}`}>User Details</Link>
        </div>
    );
};
User.propTypes={
    user:PropTypes.object,
}
export default User;