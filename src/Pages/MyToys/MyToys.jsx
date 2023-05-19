import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import MyToysRow from "./MyToysRow";


const MyToys = () => {
    const [myToys, setMyToys] = useState([]);

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/myToys?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyToys(data)
            })
    }, [url])
    return (
        <div>
            <div>
                <h1>My toys: {myToys.length}</h1>
            </div>
            <div>
                <div className="overflow-x-auto p-8">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Toy Name</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myToys.map((toy, idx) => <MyToysRow key={toy._id} toy={toy} idx={idx}></MyToysRow>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;