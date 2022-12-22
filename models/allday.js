const mongoose = require('mongoose')
const alldaySchema = new mongoose.Schema({
    owner:{
        type :String
    },

    name:{
        type : String,
    },
    loc :{
        type : String,
    }
},
{
    timestamps :true
})

const allday = mongoose.model('allday' , alldaySchema)

module.exports = allday