import { useContext } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const NavBar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    if (user) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alltoys">All Toys</Link></li>
        <li><Link to="/mytoys">My Toys</Link></li>
        <li><Link to="/addtoy">Add a Toy</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-teal-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className='w-[150px]' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {user ? <>
                    <button onClick={() => logOutUser()} className=' hidden lg:inline-flex justify-center items-center text-center border border-teal-900  hover:bg-teal-900 hover:text-white py-2 px-4 duration-500 text-teal-950'>Logout</button>
                    <div className='bg-gray-100 rounded-full p-1 '>
                        {user.photoURL ? <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" title={user?.displayName} /> : <FaUser className='w-10 h-10 rounded-full' title={user?.displayName} />}
                    </div>
                </> :
                    <Link to='/login' className=' inline-flex items-center text-center border border-teal-900  hover:bg-teal-900 hover:text-white py-2 px-4 duration-500 text-teal-950'>Login</Link>}
            </div>
        </div>
    );
};

export default NavBar;