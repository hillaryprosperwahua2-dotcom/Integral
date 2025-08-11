import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connectToDB = async () => {
    mongoose.set("strictQuery", true); // Set strictQuery to true for better query validation to avoid errors

    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "roofhunt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true; // Update the connection status
        console.log("MongoDB is connected successfully")
    } catch (error) {
        console.log(error);
    }
}