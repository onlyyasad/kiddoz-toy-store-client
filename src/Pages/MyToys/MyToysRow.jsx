import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyToysRow = ({ toy, idx, handleDelete, handleOpenModalForUpdate }) => {

    const { _id, name, sub_category, price, available_quantity } = toy;

    

    
    return (
        <tr>
            <th>{idx + 1}</th>
            <td><p className="font-semibold font-Quicksand">{name}</p></td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{available_quantity}</td>
            <td><label htmlFor="my-modal-5" onClick={() => handleOpenModalForUpdate(_id)} className="font-Quicksand flex items-center gap-2 font-semibold text-teal-600 hover:text-[#FF503A] duration-300"><BiEdit className="text-lg"/></label></td>
            <td><button onClick={() => handleDelete(_id)} className="font-Quicksand flex items-center gap-2 font-semibold  text-[#FF503A] hover:text-teal-600 duration-300"><RiDeleteBin6Line className="text-lg"/></button></td>
        </tr>
    );
};

export default MyToysRow;