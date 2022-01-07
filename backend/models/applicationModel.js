const mongoose = require('mongoose')

const applicationSchema = mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
        },
        city:{
            type:String,
            require:true,
        },
        email:{
            type:String,
            require:true,
        },
        companyName:{
            type:String,
            require:true,
        },
        address:{
            type:String,
            require:true,
        },
        state:{
            type:String,
            require:true,
        },
        mobile:{
            type:Number,
            require:true,
        },
        companyBackground:{
            type:String,
            require:true,
        },
        companyAndProduct:{
            type:String,
            require:true,
        },
        companyProblems:{
            type:String,
            require:true,
        },
        solution:{
            type:String,
            require:true,
        },
        proposition:{
            type:String,
            require:true,
        },
        competitors:{
            type:String,
            require:true,
        },
        revenueModel:{
            type:String,
            require:true,
        },
        potentialMarketSize:{
            type:String,
            require:true,
        },
        marketProductAndService:{
            type:String,
            require:true,
        },
        incubation:{
            type:String,
            require:true,
        },
        userId:{
            type:String,
            
        },
        status:{
            type:String,
            
        }
        
    },
    {
        timestamps:true
    }
)

const Application = mongoose.model("application",applicationSchema)

module.exports = Application;
  