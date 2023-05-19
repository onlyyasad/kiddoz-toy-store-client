

const MyToysRow = ({ toy, idx, handleDelete, handleOpenModalForUpdate }) => {

    const { _id, name, sub_category, price, available_quantity } = toy;

    

    
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{available_quantity}</td>
            <td><label htmlFor="my-modal-5" onClick={() => handleOpenModalForUpdate(_id)} className="btn">Update</label></td>
            <td><button onClick={() => handleDelete(_id)} className="btn">Delete</button></td>
        </tr>
    );
};

export default MyToysRow;