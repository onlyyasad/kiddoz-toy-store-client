import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
import { BounceLoader } from 'react-spinners';


const Gallery = () => {

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        fetch("https://assignment-11-server-umber.vercel.app/toys")
        .then(res => res.json())
        .then(data => {
            setCars(data)
            setLoading(false)
        })
    }, [])

    if(loading){
        return <div className='h-screen flex justify-center items-center'><BounceLoader color="#36d7b7" /></div>
    }

    console.log(cars)
    return (
        <div className="bg-gradient-to-b from-teal-50 space-y-8">
            <h2 data-aos="fade-up" className="text-3xl font-bold text-center">Toys Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-10 gap-4 p-4">
                {  
                    cars.map(car => <GalleryCard key={car._id} car={car}></GalleryCard>)
                }
            </div>
        </div>
    );
};

export default Gallery;