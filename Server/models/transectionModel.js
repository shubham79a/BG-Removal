import mongoose from "mongoose";


const transectionSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true
    },
    plan: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    credits: {
        type: Number,
        required: true
    },
    payment: {
        type: Boolean,
        default: false
    },
    date: {
        type: Number,
    }
})

const transectionModel = mongoose.models.transection || mongoose.model('transection', transectionSchema)

export default transectionModel;

