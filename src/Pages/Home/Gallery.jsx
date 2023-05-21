import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("https://assignment-11-server-umber.vercel.app/allToys?limit=10")
            .then(res => res.json())
            .then(data => {
                setCars(data)

            })
    }, [])


    
    return (
        <div className="bg-gradient-to-b from-teal-50">
            <div className="container mx-auto py-20 space-y-8">
                <h2 data-aos="fade-up" className="text-5xl font-bold font-Quicksand text-center">Toys Gallery</h2>
                <p className="text-center px-4">Have a quick look at our toy cars collection for your Kid!</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
                    {
                        cars.map(car => <GalleryCard key={car._id} car={car}></GalleryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gallery;