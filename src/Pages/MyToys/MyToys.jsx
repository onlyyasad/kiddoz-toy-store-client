import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import MyToysRow from "./MyToysRow";
import UpdateToyModal from "./UpdateToyModal";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";



const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const [toy, setToy] = useState({});

    useTitle('My Toys')

    const { user } = useContext(AuthContext);

    const url = `https://assignment-11-server-umber.vercel.app/myToys?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMyToys(data)
            })
    }, [url])

    const handleSort = event => {
        const method = event.target.value;
        fetch(`https://assignment-11-server-umber.vercel.app/myToysSort?email=${user?.email}&price=${method}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMyToys(data)
            })
    }

    const handleOpenModalForUpdate = id => {
        fetch(`https://assignment-11-server-umber.vercel.app/toy/${id}`)
            .then(res => res.json())
            .then(data => {
                setToy(data)
                // console.log(data)
            })
    }

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-umber.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {

                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div>
            <div className="flex justify-center items-center mt-8">
                <select onChange={handleSort} className="select select-bordered">
                    <option selected disabled>Sort by Price</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
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
                                <th>Available <br /> Quantity</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myToys.map((toy, idx) => <MyToysRow key={toy._id} toy={toy} idx={idx} handleDelete={handleDelete} handleOpenModalForUpdate={handleOpenModalForUpdate}></MyToysRow>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>

            {/* This is Modal for Update Toys Button  */}
            <div>
                <UpdateToyModal toy={toy} setToy={setToy} myToys={myToys} setMyToys={setMyToys}></UpdateToyModal>
            </div>
        </div>
    );
};

export default MyToys;