import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const ToysRow = ({toy, idx}) => {
    const {_id, name, seller_name, sub_category, price, available_quantity} = toy;
    return (
        <tr>
            <th>{idx+1}</th>
            <td><p className="font-semibold font-Quicksand">{name}</p></td>
            <td>{seller_name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{available_quantity}</td>
            <td><Link to={`/toy/${_id}`}><button className="font-Quicksand flex items-center gap-2 font-semibold text-teal-600 hover:text-[#FF503A] duration-300">View Details<FaArrowRight/></button></Link></td>
        </tr>
    );
};

export default ToysRow;