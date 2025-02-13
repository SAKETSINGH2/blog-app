import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "./apis/blog";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await getSingleBlog(id);
                setBlog(data.blog);
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-gray-500 text-lg animate-pulse">
                    Loading...
                </p>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-red-500 text-lg">Blog not found</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-72 object-cover"
                />
                <div className="p-6">
                    <h1 className="text-4xl font-bold text-gray-900">
                        {blog.title}
                    </h1>
                    <p className="text-blue-600 mt-2 text-lg font-medium">
                        By{" "}
                        <span className="font-semibold">{blog.autherName}</span>
                    </p>
                    <div className="mt-4 text-gray-700 text-lg leading-relaxed">
                        {blog.content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
