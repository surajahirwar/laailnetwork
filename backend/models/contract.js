const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema({

    lender: { type: Object},
    borrower: { type: Object},
    principle: { type: Number},
    interest: { type: Number},
    loanStartDate: { type: Date},
    loanDueDate: { type: Date},
    isRepaid: { type: Boolean, default: false},

  
 
},{
    timestamps:true,
    versionKey:false
});

const Contract = mongoose.model("contract", contractSchema);

exports.Contract = Contract;