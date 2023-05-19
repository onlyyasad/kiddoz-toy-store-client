import { useEffect, useState } from "react";
import SubCategoryCard from "./SubCategoryCard";


const SubCategory = () => {
    const [cars, setCars] = useState([]);
    const [active, setActive] = useState("All Cars");

    useEffect(()=>{
        fetch(`http://localhost:5000/toys/${active}`)
        .then(res => res.json())
        .then(data => {
            setCars(data)
        })
    }, [active])

    const handleActiveTab = (category) => {
        setActive(category)
    }
    return (
        <div className='my-20 px-8'>
            <h2 className="my-8 text-3xl font-bold text-center">Shob By Category</h2>
            <div className="mx-auto font-bold flex flex-col md:flex-row justify-between items-center w-full md:w-3/4">
                <button
                    onClick={() => handleActiveTab("All Cars")}
                    className={`border-2 duration-500 border-teal-500 py-4 px-8 rounded-[50px] hover:bg-teal-500 ${active === "All Cars"? "bg-teal-500" : ""}`}
                >
                    All Cars
                </button>
                <button
                    onClick={() => handleActiveTab("Sports Car")}
                    className={`border-2 duration-500 border-teal-500 py-4 px-8 rounded-[50px] hover:bg-teal-500 ${active === "Sports Car"? "bg-teal-500" : ""}`}
                >
                    Sports Car
                </button>
                <button
                    onClick={() => handleActiveTab("Regular Car")}
                    className={`border-2 duration-500 border-teal-500 py-4 px-8 rounded-[50px] hover:bg-teal-500 ${active === "Regular Car"? "bg-teal-500" : ""}`}
                >
                    Regular Car
                </button>
                <button
                    onClick={() => handleActiveTab("Truck")}
                    className={`border-2 duration-500 border-teal-500 py-4 px-8 rounded-[50px] hover:bg-teal-500 ${active === "Truck"? "bg-teal-500" : ""}`}
                >
                    Truck
                </button>
                <button
                    onClick={() => handleActiveTab("Mini Police Car")}
                    className={`border-2 duration-500 border-teal-500 py-4 px-8 rounded-[50px] hover:bg-teal-500 ${active === "Mini Police Car"? "bg-teal-500" : ""}`}
                >
                    Mini Police Car
                </button>
                <button
                    onClick={() => handleActiveTab("Mini Fire Truck")}
                    className={`border-2 duration-500 border-teal-500 py-4 px-8 rounded-[50px] hover:bg-teal-500 ${active === "Mini Fire Truck"? "bg-teal-500" : ""}`}
                >
                    Mini Fire Truck
                </button>
            </div>
            <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    cars.map(car => <SubCategoryCard key={car._id} car={car}></SubCategoryCard>)
                }
            </div>
        </div>
    );
};

export default SubCategory;