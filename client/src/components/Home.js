import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBlogs } from "./apis/blog";
import SearchBar from "./SearchBar";
import BlogCard from "./BlogCard";

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            const data = await getAllBlogs();
            setBlogs(data.blogs);
            setFilteredBlogs(data.blogs);
        };
        fetchBlogs();
    }, []);

    useEffect(() => {
        if (search.trim() === "") {
            setFilteredBlogs(blogs);
        } else {
            setFilteredBlogs(
                blogs.filter((blog) =>
                    blog.title.toLowerCase().includes(search.toLowerCase())
                )
            );
        }
    }, [search, blogs]);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    Explore Blogs
                </h1>
                <button
                    onClick={() => navigate("/add_blog")}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-200"
                >
                    Add Blog
                </button>
            </div>

            <SearchBar setSearch={setSearch} />

            {filteredBlogs.length > 0 ? (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                    {filteredBlogs.map((blog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-600 text-center text-lg mt-6">
                    No blogs found
                </p>
            )}
        </div>
    );
};

export default Home;
