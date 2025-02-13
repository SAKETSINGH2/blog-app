const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const getAllBlogs = async (search = "") => {
    const response = await fetch(`${API_BASE_URL}/blog`);
    return response.json();
};

export const getSingleBlog = async (id) => {
    const response = await fetch(`${API_BASE_URL}/blog/${id}`);
    return response.json();
};

export const addBlog = async (blogData) => {
    const response = await fetch(`${API_BASE_URL}/blog`, {
        method: "POST",
        body: blogData,
    });
    return response.json();
};
