const mongoose = require("mongoose")
const connect=()=>{
    return mongoose.connect('mongodb+srv://laail:surajsunita@cluster0.qaeeuly.mongodb.net/laail')

}

module.exports=connect;