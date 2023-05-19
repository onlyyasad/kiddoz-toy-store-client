import { Link } from "react-router-dom";


const ToysRow = ({toy, idx}) => {
    const {_id, name, seller_name, sub_category, price, available_quantity} = toy;
    return (
        <tr>
            <th>{idx+1}</th>
            <td>{name}</td>
            <td>{seller_name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{available_quantity}</td>
            <td><Link to={`/toy/${_id}`}><button className="btn">View Details</button></Link></td>
        </tr>
    );
};

export default ToysRow;