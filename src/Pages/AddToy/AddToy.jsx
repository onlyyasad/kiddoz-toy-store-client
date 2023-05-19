import { useForm } from "react-hook-form";

const AddToy = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

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
                        <input className="p-4 w-full" defaultValue="Your Name" {...register("seller_name", { required: true })} />
                        {errors.seller_name && <span>This field is required</span>}
                    </div>
                    <div>
                        <input className="p-4 w-full" defaultValue="Your Email" {...register("seller_email", { required: true })} />
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
                    <textarea className="p-4 w-full" placeholder="Description" {...register("description" ,{ required: true })} />
                    {errors.description && <span>This field is required</span>}
                </div>
                <input className="p-4 w-full border-2 border-teal-500 font-bold rounded-[50px] hover:bg-teal-500 duration-500" type="submit" value="Add Toy" />
            </form>
        </div>
    );
};

export default AddToy;