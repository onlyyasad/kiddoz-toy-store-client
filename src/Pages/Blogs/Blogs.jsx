import useTitle from "../../hooks/useTitle";

const Blogs = () => {
    useTitle("Blogs")
    return (
        <div>
            <div>

            </div>
            <div className="px-8 space-y-4">
                {/* Question 01 */}
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p>An access token is like a permission slip that allows a user to access certain things for a limited time. It&apos;s a short-lived pass. A refresh token is a special pass that can be used to get a new access token when the old one expires. Refresh tokens are important and should be stored in a safe place, like a locked box, to prevent unauthorized access.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Pin</button>
                        </div>
                    </div>
                </div>
                {/* Question 02 */}
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Compare SQL and NoSQL databases.</h2>
                        <p>SQL databases:</p>
                        <ul>
                            <li>Use structured tables with predefined schemas.</li>
                            <li>Suitable for applications with well-defined data structures and complex queries.</li>
                            <li>Scaling can be challenging.</li>
                        </ul>
                        <p>NoSQL databases:</p>
                        <ul>
                            <li>Use flexible data models without strict schemas.</li>
                            <li>Suitable for handling large amounts of data, high traffic, and dynamic data structures.</li>
                            <li>Designed for horizontal scalability.</li>
                        </ul>
                        <p>SQL databases are like organized spreadsheets, good for structured data and complex queries. NoSQL databases are flexible and handle large data with ease.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Pin</button>
                        </div>
                    </div>
                </div>
                {/* Question 03 */}
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is express JS? What is Nest JS ?</h2>
                        <p>Express.js and Nest.js are both popular web application frameworks used to build server-side applications, particularly in JavaScript and TypeScript environments.</p>
                        <p>Express.js:</p>
                        <p>Express.js is a simple and flexible framework of Node JS for building web applications in JavaScript. It helps in handling HTTP requests and building web servers. It is lightweight and easy to use.</p>
                        <p>Express.js:</p>
                        <p>Nest.js is a powerful framework for building server-side applications in TypeScript. It is built on top of Express.js, adding more features and structure. It provides a structured architecture and supports scalability.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Pin</button>
                        </div>
                    </div>
                </div>
                {/* Question 04 */}
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is MongoDB aggregate and how does it work?</h2>
                        <p>In MongoDB, the aggregate operation is used to perform advanced data processing and analysis tasks. It takes a series of steps, called stages, to filter, group, and manipulate data. These stages include matching documents, grouping them, reshaping fields, sorting, and more. The result is a set of aggregated data that can be used for complex queries and calculations.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Pin</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;