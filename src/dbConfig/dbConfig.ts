import mongoose from "mongoose";
export default function dbConfig(){
    try{
        mongoose.connect(process.env.MONGODB_URL!)
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('mongoDB connected successfully!')
        })
        connection.on('error',err=>{
            console.log(`Error connecting to mongoDb: ${err}`)
        })
    }catch(error){
        console.log('something went wrong!');
        console.log(error)
    }

}