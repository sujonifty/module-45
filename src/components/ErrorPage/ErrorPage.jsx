import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2 className="text-3xl ">oops</h2>
            <p>{error.statusText || error.massage}</p>
            {
                error.status===404 && <div className='p-5 bg-blue-200 border-4 rounded-xl shadow-xl'>
                <h2>Page Not Found</h2>
                <Link to="/"><button className='bg-blue-300 rounded-lg shadow-xl p-3 mt-5'>Back Home</button></Link>
            </div>
            }
            
        </div>
    );
};

export default ErrorPage;