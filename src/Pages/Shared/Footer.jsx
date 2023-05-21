import logo from "../../assets/logo.svg"
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-900'>
            <div className='container px-4 mx-auto py-16 text-white'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                            <div>
                                <img className="w-[75%]" src={logo} alt="" />
                                <p className="mt-4">Kiddoz Toy Store LLC.</p>
                                <p className="mb-4">+012 356 456 88</p>
                            </div>
                            <div>
                                <h2 className='font-Quicksand text-2xl my-4'>About Us</h2>
                                <ul>
                                    <li><Link>Our Story</Link> </li>
                                    <li><Link>Contact</Link> </li>
                                    <li><Link>Terms & Conditions</Link> </li>
                                    <li><Link>Cookies Policy</Link> </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className='font-Quicksand text-2xl my-4'>Follow Us</h2>
                                <p>Follow us on our social media handles now!</p>
                                <div className='flex gap-4 mt-4'>
                                    <Link><FaFacebookF /></Link>
                                    <Link><FaTwitter /></Link>
                                    <Link><FaInstagram /></Link>
                                    <Link><FaPinterest /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className='font-Quicksand text-2xl my-4'>Subscribe to Newsletter!</h2>
                        <p>Subscribe to our newsletter got get the latest offer on toys updates regularly!</p>
                        <div className="my-4">
                            <input type="email" placeholder="Your email address" className="input border-none rounded-none rounded-s-3xl text-black" />
                            <button className="btn bg-black rounded-e-3xl font-normal normal-case border-none rounded-none">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className='pt-8'>
                    <p>© Copyright: Kiddoz 2023</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;