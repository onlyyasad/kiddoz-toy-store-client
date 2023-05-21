import useTitle from "../../hooks/useTitle";
import ToysRow from "./ToysRow";
import { useEffect, useState } from "react";


const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    useTitle("All Toys")

    useEffect(() => {
        fetch("https://assignment-11-server-umber.vercel.app/allToys?limit=20")
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, []);

    const handleSearch = () => {
        fetch(`https://assignment-11-server-umber.vercel.app/getToysByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                
                setToys(data);
            });
    };

    return (
        <div className="bg-teal-50">
            <div className="container mx-auto">
                <div className="flex justify-center items-center py-20">
                    <div className="form-control">
                        <div className="input-group">
                            <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search Toys" className="input input-bordered" required />
                            <button onClick={handleSearch} className="btn btn-square bg-[#FF523B] border-[#FF523B] hover:bg-[#FEBF00] hover:border-[#FEBF00]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="overflow-x-auto px-4 py-12">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr >
                                <th className="normal-case ">No.</th>
                                <th className="normal-case ">Toy Name</th>
                                <th className="normal-case ">Seller</th>
                                <th className="normal-case ">Sub Category</th>
                                <th className="normal-case ">Price</th>
                                <th className="normal-case ">Available <br /> Quantity</th>
                                <th className="normal-case ">View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map((toy, idx) => <ToysRow key={toy._id} toy={toy} idx={idx}></ToysRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;