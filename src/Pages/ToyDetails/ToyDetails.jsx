import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { AiOutlineShoppingCart } from "react-icons/ai";

const ToyDetails = () => {
    const toy = useLoaderData();

    const { _id, img, name, seller_name, seller_email, price, rating, available_quantity, description } = toy;
    useTitle(`Toy | ${_id}`)
    return (
        <div className="bg-gradient-to-b from-teal-50">
            <div className="hero min-h-screen container mx-auto">
                <div className="hero-content flex-col  lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg" />
                    <div className="space-y-4">
                        <h1 className="text-3xl font-Quicksand md:text-5xl font-bold">{name}</h1>
                        <div className="tooltip tooltip-top" data-tip={rating}>
                            <Rating
                                style={{ maxWidth: 80 }}
                                value={rating}
                                readOnly
                            />
                        </div>
                        <div>
                            <p className="font-Quicksand text-2xl md:text-3xl font-bold text-[#FF503A]">${price}</p>
                            <p className="font-bold mt-4">Available Quantity: {available_quantity}</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-400">Seller: <span className="text-gray-400">{seller_name}</span></p>
                            <p className="font-bold text-gray-400">Email: {seller_email}</p>
                        </div>
                        <div className="py-6">
                            <p className="font-bold">Description:</p>
                            <p className="mt-2">{description}</p>
                        </div>
                        <div className="space-x-4 space-y-4">
                            <button className="px-10 py-4 flex gap-2 items-center border-2 bg-white border-[#FF503A] hover:bg-[#FF503A] hover:text-white duration-500 font-semibold rounded-[50px] normal-case">Add To Cart <AiOutlineShoppingCart/> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;