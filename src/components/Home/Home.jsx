import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>Welcome Home</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        
    );
};

export default Home;