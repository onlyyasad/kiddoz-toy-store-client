import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";

const UpdateToyModal = ({toy, setToy, myToys, setMyToys}) => {
    // const [modalToy, setModalToy] = useState(toy);
    const id = toy?._id;
    console.log(toy)
    // console.log(modalToy)

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {

        // console.log(data)

        fetch(`http://localhost:5000/toys/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                if(result.modifiedCount > 0){
                    // state update
                    const remaining = myToys.filter(toy => toy._id !== id);
                    const updated = myToys.find(toy => toy._id === id);
                    updated.name = data.name;
                    updated.price = data.price;
                    updated.rating = data.rating;
                    updated.available_quantity = data.available_quantity;
                    updated.description = data.description;
                    const newToys = [updated, ...remaining];
                    setMyToys(newToys);
                    setToy(updated);
                    reset()
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })

    };
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-teal-50 w-11/12 max-w-5xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 pt-8 mx-auto">
                        {/* register your input into the hook by invoking the "register" function */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="mb-2 font-semibold">Name</p>
                                <input className="p-4 w-full" placeholder={toy?.name} {...register("name", { required: true })} />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div>
                                <p className="mb-2 font-semibold">Price</p>
                                <input type="number" className="p-4 w-full" placeholder={toy?.price} {...register("price", { required: true, valueAsNumber: true })} />
                                {errors.price && <span>This field is required</span>}
                            </div>
                            <div>
                                <p className="mb-2 font-semibold">Rating</p>
                                <input type="number" className="p-4 w-full" placeholder={toy?.rating} {...register("rating", { required: true, valueAsNumber: true })} />
                                {errors.rating && <span>This field is required</span>}
                            </div>
                            <div>
                                <p className="mb-2 font-semibold">Available Quantity</p>
                                <input type="number" className="p-4 w-full" placeholder={toy?.available_quantity} {...register("available_quantity", { required: true, valueAsNumber: true })} />
                                {errors.available_quantity && <span>This field is required</span>}
                            </div>
                        </div>
                        <div className="my-4">
                            <p className="mb-2 font-semibold">Description</p>
                            <textarea className="p-4 w-full" defaultValue={toy?.description} {...register("description", { required: true })} />
                            {errors.description && <span>This field is required</span>}
                        </div>
                        <input className="p-4 w-full border-2 border-teal-500 font-bold rounded-[50px] hover:bg-teal-500 duration-500" type="submit" value="Update" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn btn-circle">X</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateToyModal;