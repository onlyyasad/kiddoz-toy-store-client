
import { useTimer } from 'react-timer-hook';

const OfferSection = () => {
    const time = new Date("2023-6-25");
    time.setHours(time.getHours() + 2);
    const expiryTimestamp = time;

    const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
        <div>
            <div className="hero py-8 md:min-h-screen">
                <div className="hero-overlay bg-base-100"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-screen-sm">
                        <h1 className="mb-5 text-3xl md:text-5xl font-Quicksand text-black font-bold">15% Discount on all Sports Car Toys</h1>
                        <p className="mb-5 text-xl text-black">Offer Expires On</p>
                        <div className='bg-[#FF503A] w-full flex justify-center items-center gap-4 md:gap-6 px-4 py-8 lg:px-10 lg:py-12 rounded-xl lg:rounded-3xl'>
                            <div>
                                <p className='text-3xl md:text-7xl'>{days}</p>
                                <p className='text-sm md:text-base'>Days</p>
                            </div>
                            <p className='text-3xl md:text-7xl'>:</p>
                            <div>
                                <p className='text-3xl md:text-7xl'>{hours}</p>
                                <p className='text-sm md:text-base'>Hours</p>
                            </div>
                            <p className='text-3xl md:text-7xl'>:</p>
                            <div>
                                <p className='text-3xl md:text-7xl'>{minutes}</p>
                                <p className='text-sm md:text-base'>Minutes</p>
                            </div>
                            <p className='text-3xl md:text-7xl'>:</p>
                            <div>
                                <p className='text-3xl md:text-7xl'>{seconds}</p>
                                <p className='text-sm md:text-base'>Seconds</p>
                            </div>
                        </div>
                        <button className="py-4 px-10 mt-8 bg-[#FF503A] text-black font-bold duration-500 rounded-[50px]  hover:bg-[#FEBF00]">Shop Now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferSection;