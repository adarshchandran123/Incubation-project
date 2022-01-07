
const mongoose = require('mongoose')

const SlotSchema = mongoose.Schema(
    {
        ApplicationId:{
            type:mongoose.Types.ObjectId,
            default:null

        },
        IsActive:{
            type:Boolean,
            default:false
        },
        SeatNumber:{
            type:String,
            default:null

        }
        
    }
)

const Slot = mongoose.model("Slot",SlotSchema)
module.exports = Slot;
