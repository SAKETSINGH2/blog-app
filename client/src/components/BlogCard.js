import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const navigate = useNavigate();

    return (
        <div
            className="border rounded-lg overflow-hidden shadow-md cursor-pointer"
            onClick={() => navigate(`/blogs/${blog._id}`)}
        >
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold">{blog.title}</h3>
                <p className="text-sm text-gray-500">By {blog.autherName}</p>
            </div>
        </div>
    );
};

export default BlogCard;
