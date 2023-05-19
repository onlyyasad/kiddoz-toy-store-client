import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";


const Gallery = () => {

    const [cars, setCars] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5000/toys")
        .then(res => res.json())
        .then(data => {
            setCars(data)
        })
    }, [])

    console.log(cars)
    return (
        <div className="bg-gradient-to-b from-teal-50 space-y-8">
            <h2 className="text-3xl font-bold text-center">Toys Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-10 gap-4 p-4">
                {
                    cars.map(car => <GalleryCard key={car._id} car={car}></GalleryCard>)
                }
            </div>
        </div>
    );
};

export default Gallery;