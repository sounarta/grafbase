import mongoose from "mongoose";

let isConnected:boolean = false

export const connectToDatabase = async()=>{

    mongoose.set('strictQuery',true)

    if(!process.env.MONGODB_URL)  return console.log('MISSING MONGODB_URL')

    if(isConnected) return console.log('Already Connected')


    try {
            await mongoose.connect(process.env.MONGODB_URL,{
                dbName:'Flexible'
            })


       isConnected = true
       
      console.log('MongoDB Connected')



    } catch (error) {
        console.log('MongoDb connection failed',error)
        
    }


}


