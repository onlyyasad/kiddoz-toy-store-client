

const MyToysRow = ({toy, idx}) => {

    const {_id, name, sub_category, price, available_quantity} = toy;

    const handleUpdate = id => {
        
    }

    const handleDelete = id => {

    }
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{available_quantity}</td>
            <td><button onClick={() => handleUpdate(_id)} className="btn">Update</button></td>
            <td><button onClick={() => handleDelete(_id)} className="btn">Delete</button></td>
        </tr>
    );
};

export default MyToysRow;