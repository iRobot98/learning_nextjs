import mongoose from "mongoose";

let isConnected = false;

mongoose.set('strictQuery')
export const connectToDB = async ()=>{
    if(isConnected){
        console.log("mongodb already connected")
        return
    }
    try {
          await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"proomptopia",
            useNewUrlParser:true,
            useUnifiedTopology:true,
          })

          isConnected = true;
          console.log("MongoDB connected")
    } catch (error) {
        
    }
}
