"use server";
import mongoose from "mongoose";

// export const MongodbConnection = async (connectionString) => {
//   try {
//     if (
//       !connectionString.startsWith("mongodb://") &&
//       !connectionString.startsWith("mongodb+srv://")
//     ) {
//       throw new Error("Invalid connection string format. It must start with 'mongodb://' or 'mongodb+srv://'.");
//     }

//     const connection = await mongoose.createConnection(connectionString).asPromise();
//     console.log("Connected to MongoDB:", connectionString);
//     return connection;
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//     throw error;
//   }
// };


export const fetchAllData = async (connectionString) => {
  try {
    const connection = await mongoose.createConnection(connectionString).asPromise();
    const db = connection.db;
    const collections = await db.listCollections().toArray();
    const data = {};

    for (const collection of collections) {
      const collectionName = collection.name;
      const documents = await db.collection(collectionName).find({}).toArray();
      data[collectionName] = documents;
    }

    // Close the connection after fetching data
    await connection.close();

    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
