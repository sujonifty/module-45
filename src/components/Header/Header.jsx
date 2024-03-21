import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
        
            <nav className="flex justify-evenly">
                <Link to="/">Home </Link>
                <Link to="/about">About </Link>
                <Link to="/posts">Posts</Link>
                <Link to="/contact">Contact </Link>
                <Link to="/users">Users</Link>
                
            </nav>
        </div>
    );
};

export default Header;