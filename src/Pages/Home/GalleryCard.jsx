

const GalleryCard = ({ car }) => {

    const { img } = car;
    return (
        <div className="flex justify-center h-28 bg-yellow-200 items-center hover:shadow-xl rounded-lg duration-500">
            <img className='p-4 w-3/4 hover:scale-125 duration-500' src={img} alt="Car" />
        </div>
    );
};

export default GalleryCard;