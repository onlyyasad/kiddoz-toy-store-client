import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import '@smastrom/react-rating/style.css';
import { FaArrowRight } from "react-icons/fa";

const SubCategoryCard = ({ car }) => {

    const { _id, img, name, price, rating } = car;

    return (
        <div data-aos="fade-up" className="card card-compact w-full border-2 duration-500 rounded-lg bg-base-100 hover:shadow-xl">
            <figure className="h-60 flex justify-center items-center"><img className="w-3/4 p-4" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="font-Quicksand font-bold text-lg">{name}</h2>
                <p className="font-Quicksand text-2xl font-bold text-[#FF503A]">${price}</p>
                <div className="flex mt-2 justify-between items-center">
                    <Link to={`/toy/${_id}`}><button className="font-Quicksand flex items-center gap-2 font-semibold text-teal-600 hover:text-[#FF503A] duration-300">View Details<FaArrowRight/></button></Link>
                    <div className="tooltip tooltip-top" data-tip={rating}>
                        <Rating
                            style={{ maxWidth: 80 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryCard;