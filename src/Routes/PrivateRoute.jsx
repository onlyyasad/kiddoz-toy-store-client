import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import { AuthContext } from '../AuthProviders/AuthProviders';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='h-screen flex justify-center items-center'><BounceLoader color="#36d7b7" /></div>
    }
    if(user){
        return children
    }
    Swal.fire({
        title: 'Error!',
        text: 'You have to log in first to view details',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;