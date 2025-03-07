import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        team: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
        text: {type: String},
        task: {type: mongoose.Schema.Types.ObjectId, ref: "Task"},
        notiType:{type: String, enum: ["alert","message"]},
        isRead:[{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
    },{timestamps: true});

    const Notice = mongoose.model("Notice", notificationSchema);

    export default Notice;