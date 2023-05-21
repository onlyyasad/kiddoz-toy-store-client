import { AiOutlineRocket, AiOutlineSafety } from "react-icons/ai";
import { BsBoxes, BsRecycle } from "react-icons/bs";

const SafetySection = () => {
    return (
        <div className="bg-[#FF523B]">
            <div className="pt-8 container mx-auto">
                <div className="flex flex-col-reverse lg:flex-row">
                    <div className="lg:w-1/4">
                        <div className="flex justify-center ">

                            <img src="https://i.ibb.co/cLGB67V/safety.png" className="max-w-sm" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center ml-2 p-4 lg:w-3/4">
                        <div className="text-white space-y-6">
                            <h1 className="text-3xl md:text-5xl font-Quicksand font-bold">Safe Toys For Children</h1>
                            <div className="flex items-center gap-8">
                                <AiOutlineRocket className="text-5xl font-light" />
                                <p className="text-xl">Beautiful & Well Designed</p>
                            </div>
                            <div className="flex items-center gap-8">
                                <BsBoxes className="text-5xl font-light" />
                                <p className="text-xl">High durable toys</p>
                            </div>
                            <div className="flex items-center gap-8">
                                <BsRecycle className="text-5xl font-light" />
                                <p className="text-xl">Recyclable materials</p>
                            </div>
                            <div className="flex items-center gap-8">
                                <AiOutlineSafety className="text-5xl font-light" />
                                <p className="text-xl">Safe & Non-toxic</p>
                            </div>
                            <button className="px-10 py-4 font-bold bg-white hover:bg-[#FEBF00] rounded-[50px] duration-500 text-black">Shop Now!</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SafetySection;