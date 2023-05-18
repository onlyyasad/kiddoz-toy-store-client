import car1 from '../../assets/images/car1.png'

const Banner = () => {
    return (
        <div className="carousel bg-teal-50 w-full">
            {/* slide 01 */}
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero min-h-screen ">
                    <div className="hero-content p-16 flex-col lg:flex-row-reverse">
                        <img src={car1} className="lg:w-1/2" />
                        <div className='lg:w-1/2'>
                            <h1 className="text-5xl font-bold">Zoom into Fun: Discover the Joy of Kids Car Toys!</h1>
                            <p className="py-6">Discover the joy of kids car toys at our shop! From sleek racers to rugged off-roaders, we have the perfect wheels for endless adventures. Start their excitement today!</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide 01 */}
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero min-h-screen ">
                    <div className="hero-content p-16 flex-col lg:flex-row-reverse">
                        <img src={car1} className="lg:w-1/2" />
                        <div className='lg:w-1/2'>
                            <h1 className="text-5xl font-bold">Zoom into Fun: Discover the Joy of Kids Car Toys!</h1>
                            <p className="py-6">Discover the joy of kids car toys at our shop! From sleek racers to rugged off-roaders, we have the perfect wheels for endless adventures. Start their excitement today!</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide 01 */}
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero min-h-screen ">
                    <div className="hero-content p-16 flex-col lg:flex-row-reverse">
                        <img src={car1} className="lg:w-1/2" />
                        <div className='lg:w-1/2'>
                            <h1 className="text-5xl font-bold">Zoom into Fun: Discover the Joy of Kids Car Toys!</h1>
                            <p className="py-6">Discover the joy of kids car toys at our shop! From sleek racers to rugged off-roaders, we have the perfect wheels for endless adventures. Start their excitement today!</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;