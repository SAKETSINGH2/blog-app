import mongoose, { model } from "mongoose";

const blogModelSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        autherName: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    }
    // {
    //     timeStamps: true,
    // }
);

const blogModelSchemaDbClient = mongoose.model("blog", blogModelSchema);

export default blogModelSchemaDbClient;
