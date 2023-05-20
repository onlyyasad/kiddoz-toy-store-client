import { Link } from "react-router-dom";

const SubCategoryCard = ({ car }) => {

    const {_id, img, name, price, rating } = car;

    return (
        <div className="card w-full border-2 duration-500 rounded-lg bg-base-100 hover:shadow-xl">
            <figure className="h-60 flex justify-center bg-base-200 items-center"><img className="w-3/4 p-4" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span>Price:</span>${price} </p>
                <p><span>Rating:</span>{rating} </p>
                <div className="card-actions justify-end">
                    <Link to={`/toy/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryCard;