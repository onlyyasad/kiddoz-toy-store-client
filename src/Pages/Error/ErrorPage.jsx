import { Link } from 'react-router-dom';
import errorPage from '../../assets/errorPage.svg'
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    useTitle("Error")
    return (
        <div className='flex flex-col justify-center items-center p-8 gap-4 max-h-screen'>
            <img className='max-w-xl' src={errorPage} alt="" />
            <Link className='py-4 px-6 font-semibold border-2 border-teal-500 rounded-[50px] hover:bg-teal-500 duration-500' to="/">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;