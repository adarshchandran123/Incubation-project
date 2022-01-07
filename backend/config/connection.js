const mongoose = require('mongoose')

const connectDB =async () =>{
    try{
        
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            //useFindAndModify: false,
            //useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log('mongodb connected');
    }catch (error){
        console.error(`error : ${error.message}`);
        process.exit();  
    }
}

module.exports = connectDB;