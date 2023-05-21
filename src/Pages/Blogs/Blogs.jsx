import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import BlogCard from "./BlogCard";

const Blogs = () => {
    const blogs = useLoaderData();

    useTitle("Blogs")

    return (
        <div className="">
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/LrgK4Js/blog.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl md:text-5xl font-Quicksand font-bold">Our popular Blogs!</h1>
                            <p className="mb-5">Read our popular blogs written by industry expert to boost your knowledge about latest web development tech!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto my-20 px-8 space-y-4">
                <h2 className="font-Quicksand text-3xl md:text-5xl text-center font-bold ">Frequently Asked Questions</h2>
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;