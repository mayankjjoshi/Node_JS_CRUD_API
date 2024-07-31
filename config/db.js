
import mongoose, { connections } from "mongoose";

// create DB connection

const connectDb = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/express_crud');
        console.log(`DB Connected at : ${conn.connection.host}`);
    } catch (error) {
        console.log(`MongoDB Erro : ${error.message}`);
        process.exit(1);
    }
 }



export default connectDb;