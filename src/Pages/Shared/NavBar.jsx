import { useContext } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import ActiveLink from '../../utility/ActiveLink';

const NavBar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const menuItems = <>
        <p className='hover:text-[#FF503A] duration-300'><Link to="/">Home</Link></p>
        <p className='hover:text-[#FF503A] duration-300'><ActiveLink to="/allToys">All Toys</ActiveLink></p>
        {user && <>
            <p className='hover:text-[#FF503A] duration-300'><ActiveLink to="/myToys">My Toys</ActiveLink></p>
            <p className='hover:text-[#FF503A] duration-300'><ActiveLink to="/addToy">Add a Toy</ActiveLink></p>
        </>}
        <p className='hover:text-[#FF503A] duration-300'><ActiveLink to="/blogs">Blogs</ActiveLink></p>
        {user && <button onClick={() => logOutUser()} className='lg:hidden justify-center items-center text-center border-2 rounded-[50px] border-[#FF503A]  hover:bg-[#FF503A] hover:text-white py-2 px-6 duration-500 font-semibold text-[#FF503A]'>Logout</button>}
    </>
    return (
        <div className='bg-teal-50'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={0} className="menu menu-compact font-Quicksand font-bold gap-4 dropdown-content mt-3 p-2 shadow bg-base-100  w-52">
                            {menuItems}
                        </div>
                    </div>
                    <img className='w-[150px]' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu gap-6 font-Quicksand font-bold menu-horizontal px-1">
                        {menuItems}
                    </div>
                </div>
                <div className="navbar-end gap-2">
                    {user ? <>
                        <button onClick={() => logOutUser()} className='hidden lg:inline-flex justify-center items-center text-center border-2 rounded-[50px] border-[#FF503A]  hover:bg-[#FF503A] hover:text-white py-2 px-6 duration-500 font-semibold text-[#FF503A]'>Logout</button>
                        <div className='bg-gray-100 rounded-full p-1 '>
                            {user.photoURL ? <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" title={user?.displayName} /> : <FaUser className='w-10 h-10 rounded-full' title={user?.displayName} />}
                        </div>
                    </> :
                        <Link to='/login' className='hidden lg:inline-flex justify-center items-center text-center border-2 rounded-[50px] border-[#FF503A]  hover:bg-[#FF503A] hover:text-white py-2 px-6 duration-500 font-semibold text-[#FF503A]'>Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;