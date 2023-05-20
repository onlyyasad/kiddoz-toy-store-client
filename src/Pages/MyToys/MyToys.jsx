import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import MyToysRow from "./MyToysRow";
import UpdateToyModal from "./UpdateToyModal";
import Swal from "sweetalert2";


const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const [toy, setToy] = useState({});

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/myToys?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMyToys(data)
            })
    }, [url])

    const handleOpenModalForUpdate = id => {
        fetch(`http://localhost:5000/toy/${id}`)
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
                fetch(`http://localhost:5000/toys/${id}`, {
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