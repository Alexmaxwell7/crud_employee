var mongoose = require('mongoose')
//defin user schema
var userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email:{
        type: String, 
        required: true
    },
    password:{
        type: String, 
        required: true
    },
    role:{
        type: String, 
        required: true
    },
    address:{
        type: String, 
        required: true
    },
    mobile:{
        type: Number, 
        required: true
    },
    isView:{
        type:Boolean,
        default:true
    }
})
module.exports = mongoose.model('users',userSchema)

