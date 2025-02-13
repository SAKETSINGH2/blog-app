import { useState } from "react";
import { addBlog } from "./apis/blog";

const AddBlog = () => {
    const [form, setForm] = useState({
        title: "",
        content: "",
        autherName: "",
        image: null,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setForm({ ...form, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("content", form.content);
        formData.append("autherName", form.autherName);
        formData.append("image", form.image);

        await addBlog(formData);
        alert("Blog added successfully!");
    };

    return (
        <div className="container mx-auto p-4">
            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto p-4 border rounded-md shadow-md"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="w-full p-2 border mb-2"
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="content"
                    placeholder="Content"
                    className="w-full p-2 border mb-2"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="autherName"
                    placeholder="Author Name"
                    className="w-full p-2 border mb-2"
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    className="w-full p-2 border mb-2"
                    onChange={handleImageChange}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md"
                >
                    Add Blog
                </button>
            </form>
        </div>
    );
};

export default AddBlog;
