import mongoose from "mongoose";
import { wait } from "./utilities";

let isConnected = false;

mongoose.set("strictQuery");
let attempts = 0;
export const connectToDB = async () => {
  if (isConnected) {
    return isConnected;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "proomptopia",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB connected");
    return isConnected;
  } catch (error) {
    if (attempts++ > 3) process.exit(1);
    console.log(error.message);
    return await wait(attempts).then(connectToDB);
  }
};
connectToDB();
