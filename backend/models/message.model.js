import mongoose, { mongo } from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        message: {
            type: String,
            required: true
        }
        // mongoose will add the createdAt, updatedAt fields if there is option timestamps: true
    },

    {timestamps: true}
)

const Message = mongoose.model("Message", messageSchema);

export default Message;