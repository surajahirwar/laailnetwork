const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name: { type: String},
    MobileNumber :{ type: String},
    role: {
        type: String,
    },
 
},{
    timestamps:true,
    versionKey:false
});

const User = mongoose.model("users", userSchema);

exports.User = User;