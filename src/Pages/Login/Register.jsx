import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import Swal from 'sweetalert2';



const Register = () => {
    const [error, setError] = useState("");

    const { createUser, updateUserData, logOutUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegistration = (event) => {
        event.preventDefault();
        setError("")
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
            .then(result => {
                form.reset();
                const user = result.user;
                updateUserData(user, name, photo)
                    .then(() => { })
                    .catch(error => { console.log(error.message) })
                logOutUser();
                Swal.fire({
                    title: 'Success!',
                    text: 'Account Created Successfully! Now Please Login!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                navigate("/login")
            })
            .catch(error => setError(error.message));
    }

    return (
        <div className="min-h-screen py-8 flex justify-center items-center bg-gradient-to-b from-teal-50">
            <div className="flex flex-col lg:w-[33%] gap-4">
                <div className="card rounded-lg shadow-lg w-full bg-base-100">
                    <form onSubmit={handleRegistration} className="card-body">
                        <h1 className="text-3xl text-teal-500 font-bold font-Quicksand mb-4 text-center ">Create an Account!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' required placeholder="Your Name" className="input input-bordered rounded-[50px]" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered rounded-[50px]" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered rounded-[50px]" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered rounded-[50px]" />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already have an account? Login</Link>
                            </label>
                        </div>

                        <div className="form-control gap-4 mt-6">
                            <button type='submit' className=" text-center border border-teal-500  hover:bg-teal-500 hover:text-white py-2 px-4 duration-500 rounded-[50px] font-semibold text-teal-950">Register</button>
                        </div>
                        {error && <label className="label">
                            <p className='label-text-alt text-red-600'>{error}</p>
                        </label>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;