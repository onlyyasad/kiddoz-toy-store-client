

const BlogCard = ({blog}) => {
    const {question, answer} = blog;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{question}</h2>
                <p>{answer}</p>
                <div className="card-actions justify-end">
                    
                </div>
            </div>
        </div>
    );
};

export default BlogCard;