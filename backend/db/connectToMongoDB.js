import mongoose from "mongoose";


const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://samarthagarwal115:MongoAtlas%40151202@cluster0.xqp8t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
