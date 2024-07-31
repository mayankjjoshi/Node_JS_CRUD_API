
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is requried']
    },
    email: {
        type: String,
        required: [true, 'email is requried'],
        unique: true
    },
    password: {
        type: String,
        required: [true,'password is requried'],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
  
}, {
    timeStamp:true
});


const User = mongoose.model('User', userSchema);

export default  User;