import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    address: {
        type: String,
        required : true,
        unique: true,
    },
    balance: {
        type: Number,
    },
});

//Model Creation
const User = mongoose.model('userModel',userModel);

export default User;