import { useEffect, useState } from "react";
import mongoose from "mongoose";

let isConnected = false;

const dbConnection = async () => {
    mongoose.set("strictQuery", true);

    const mongoUrl = process.env.MONGODB_CONNECTION_STRING;
    if (!mongoUrl) {
        console.log("MONGODB_CONNECTION_STRING not found");
        return;
    }

    if (isConnected) {
        console.log("Already connected to MongoDB");
        return;
    }

    try {
        await mongoose.connect(mongoUrl);
        isConnected = true;
        console.log("Mongoose is connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

const MongoDBConnectionComponent = () => {
    const [isConnectedToDB, setIsConnectedToDB] = useState(false);

    useEffect(() => {
        const connectToDatabase = async () => {
            await dbConnection();
            setIsConnectedToDB(isConnected);
        };

        connectToDatabase();
    }, []);

    return (
        <div>
            {isConnectedToDB ? (
                <p>Successfully connected to MongoDB!</p>
            ) : (
                <p>Connecting to MongoDB...</p>
            )}
        </div>
    );
};

export default MongoDBConnectionComponent;
