

const Banner = () => {
    return (
        <div className="bg-teal-50">
            <div className="carousel container mx-auto w-full">
                {/* slide 01 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero h-[700px] md:min-h-screen ">
                        <div className="hero-content p-8 md:p-16 flex-col lg:flex-row-reverse">
                            <img src="https://i.ibb.co/MCH8QDR/car1.png" className="mb-8 lg:w-1/2" />
                            <div className='lg:w-1/2'>
                                <h1 className="text-3xl md:text-5xl font-Quicksand font-bold"><span className="text-[#FF503A]">Zoom into Fun:</span><br /> Discover the Joy of Kids Car Toys!</h1>
                                <p className="py-6">Discover the joy of kids car toys at our shop! From sleek racers to rugged off-roaders, we have the perfect wheels for endless adventures. Start their excitement today!</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 bottom-5 right-[35%] md:right-[46%]">
                        <a href="#slide3" className="btn bg-[#FF503A] border-[#FF503A] hover:bg-white hover:border-[#FF503A] hover:text-[#FF503A] btn-circle">❮</a>
                        <a href="#slide2" className="btn bg-[#FF503A] border-[#FF503A] hover:bg-white hover:border-[#FF503A] hover:text-[#FF503A] btn-circle">❯</a>
                    </div>
                </div>
                {/* slide 01 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero h-[700px] md:min-h-screen ">
                        <div className="hero-content p-8 md:p-16 flex-col lg:flex-row-reverse">
                            <img src="https://i.ibb.co/HC6k7Jb/car2.png" className="mb-8 lg:w-1/2" />
                            <div className='lg:w-1/2'>
                                <h1 className="text-3xl md:text-5xl font-Quicksand font-bold"><span className="text-[#FF503A]">Rev Up the Fun:</span> <br /> Your One-Stop Shop for Toy Cars!</h1>
                                <p className="py-6">Embark on an incredible journey at Zooming Adventures, where toy cars spring to life, fueling imaginations and sparking endless play.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 bottom-5 right-[35%] md:right-[46%]">
                        <a href="#slide1" className="btn bg-[#FF503A] border-[#FF503A] hover:bg-white hover:border-[#FF503A] hover:text-[#FF503A] btn-circle">❮</a>
                        <a href="#slide3" className="btn bg-[#FF503A] border-[#FF503A] hover:bg-white hover:border-[#FF503A] hover:text-[#FF503A] btn-circle">❯</a>
                    </div>
                </div>
                {/* slide 01 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero h-[700px] md:min-h-screen ">
                        <div className="hero-content p-8 md:p-16 flex-col lg:flex-row-reverse">
                            <img src="https://i.ibb.co/Jdk68KV/car3.png" className="mb-8 lg:w-1/2" />
                            <div className='lg:w-1/2'>
                                <h1 className="text-3xl md:text-5xl font-Quicksand font-bold"><span className="text-[#FF503A]">Zooming Adventures:</span> <br /> Discover the Joy of Toy Cars!</h1>
                                <p className="py-6">Zooming Adventures is where young car enthusiasts can dive into a world of thrilling toy cars, sparking their imagination and igniting endless adventures.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 bottom-5 right-[35%] md:right-[46%]">
                        <a href="#slide2" className="btn bg-[#FF503A] border-[#FF503A] hover:bg-white hover:border-[#FF503A] hover:text-[#FF503A] btn-circle">❮</a>
                        <a href="#slide1" className="btn bg-[#FF503A] border-[#FF503A] hover:bg-white hover:border-[#FF503A] hover:text-[#FF503A] btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;