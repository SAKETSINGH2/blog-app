import dbClient from "./dbClient.js";

export const addBlog = async (blogDetails) => {
    const result = await dbClient.create({
        title: blogDetails.title,
        autherName: blogDetails.autherName,
        content: blogDetails.content,
        image: blogDetails.image,
    });

    return result._id ?? null;
};

export const getAllBlogs = async () => {
    return await dbClient.find({}).sort({ createdAt: -1 });
};
export const getBlog = async (blogId) => {
    const result = await dbClient.findById(blogId);

    if (!result) {
        return false;
    }

    return result;
};
