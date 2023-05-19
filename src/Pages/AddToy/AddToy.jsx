import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProviders/AuthProviders";

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        if (data.sub_category === "Sports Car") {
            data.sub_category_id = "a"
        }
        else if (data.sub_category === "Truck") {
            data.sub_category_id = "b"
        }
        else if (data.sub_category === "Regular Car") {
            data.sub_category_id = "c"
        }
        else if (data.sub_category === "Mini Police Car") {
            data.sub_category_id = "d"
        }
        else if (data.sub_category === "Mini Fire Truck") {
            data.sub_category_id = "e"
        }

        console.log(data)

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if(result.insertedId){
                    alert("Toy Added Successfully!")
                    reset()
                }
            })

    };



    return (
        <div className="bg-teal-50 py-20 mx-auto">
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 mx-auto">
                {/* register your input into the hook by invoking the "register" function */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input className="p-4 w-full" placeholder="Photo URL" {...register("img", { required: true })} />
                        {errors.img && <span>This field is required</span>}
                    </div>
                    <div>
                        <input className="p-4 w-full" placeholder="Toy Name" {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div>
                        <input className="p-4 w-full" value={user?.displayName} {...register("seller_name", { required: true })} />
                        {errors.seller_name && <span>This field is required</span>}
                    </div>
                    <div>
                        <input className="p-4 w-full" value={user?.email} {...register("seller_email", { required: true })} />
                        {errors.seller_email && <span>This field is required</span>}
                    </div>
                    <div>
                        <select className="p-4 w-full" {...register("sub_category")}>
                            <option value="Sports Car">Sports Car</option>
                            <option value="Truck">Truck</option>
                            <option value="Regular Car">Regular Car</option>
                            <option value="Mini Police Car">Mini Police Car</option>
                            <option value="Mini Fire Truck">Mini Fire Truck</option>
                        </select>
                    </div>
                    <div>
                        <input type="number" className="p-4 w-full" placeholder="Price" {...register("price", { required: true, valueAsNumber: true })} />
                        {errors.price && <span>This field is required</span>}
                    </div>
                    <div>
                        <input type="number" className="p-4 w-full" placeholder="Rating" {...register("rating", { required: true, valueAsNumber: true })} />
                        {errors.rating && <span>This field is required</span>}
                    </div>
                    <div>
                        <input type="number" className="p-4 w-full" placeholder="Quantity" {...register("available_quantity", { required: true, valueAsNumber: true })} />
                        {errors.available_quantity && <span>This field is required</span>}
                    </div>
                </div>
                <div className="my-4">
                    <textarea className="p-4 w-full" placeholder="Description" {...register("description", { required: true })} />
                    {errors.description && <span>This field is required</span>}
                </div>
                <input className="p-4 w-full border-2 border-teal-500 font-bold rounded-[50px] hover:bg-teal-500 duration-500" type="submit" value="Add Toy" />
            </form>
        </div>
    );
};

export default AddToy;