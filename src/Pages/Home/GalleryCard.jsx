import car1 from '../../assets/images/car1.png'

const GalleryCard = () => {
    return (
        <div className="card card-compact w-full bg-base-100">
            <figure><img className='w-1/2' src={car1} alt="Shoes" /></figure>
        </div>
    );
};

export default GalleryCard;