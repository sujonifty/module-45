import PropTypes from 'prop-types';

const User = ({user}) => {
    const {id, name, email}=user;
    return (
        <div className='p-5 bg-slate-100 '>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{email}</h3>
        </div>
    );
};
User.propTypes={
    user:PropTypes.object,
}
export default User;