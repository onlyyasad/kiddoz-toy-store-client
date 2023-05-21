import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? "underline underline-offset-8 text-[#FF503A] duration-500" : ""} >
            {children}
        </NavLink>
    );
};

export default ActiveLink;