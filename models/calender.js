const mongoose = require('mongoose')
const calenderSchema = new mongoose.Schema({

    owner :{
        type :String,
    },

    Ename:{
        type : String,
        
       
    },
    loc :{
        type : String,
       
        
    },
    sTime :{
        type : String,
        
        
    },
    eTime :{
        type : String,
        
        
    },

},
{
    timestamps :true
})

const Calender = mongoose.model('calender' , calenderSchema)

module.exports = Calender