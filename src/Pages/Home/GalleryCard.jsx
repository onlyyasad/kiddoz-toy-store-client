

const GalleryCard = ({ car }) => {

    const { img } = car;
    return (
        <div data-aos="fade-up" className="flex justify-center h-36 lg:h-56 bg-yellow-300 items-center hover:shadow-xl rounded-lg duration-500">
            <img className='p-4 w-3/4 hover:scale-125 duration-500' src={img} alt="Car" />
        </div>
    );
};

export default GalleryCard;