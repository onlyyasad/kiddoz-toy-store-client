import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
    const toy = useLoaderData();
    
    const { _id, img, name, seller_name, seller_email, price, rating, available_quantity, description } = toy;
    useTitle(`Toy | ${_id}`)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <hr />
                        <p>${price}</p>
                        <p>Available Quantity: {available_quantity}</p>
                        <p>Seller: {seller_name}</p>
                        <p>Seller Email: {seller_email}</p>
                        <hr />
                        <p className="py-6">{description}</p>
                        <hr />
                        <button className="btn btn-primary normal-case">Add To Cart</button>
                        <p>Rating: {rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;