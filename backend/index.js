const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
const { User } = require("./models/users");
const { Contract } = require("./models/contract");
const app = express();
app.use(cors())
app.use(express.json({limit: '50mb'}));


app.get("/", (req, res)=>{
    return res.send("welcone to my world")
})

app.get('/lenders', async(req, res)=>{
    try{
        let lenders = await User.find({role:'lender'});
        return res.status(200).send(lenders)
    }
    catch(err){
        return res.status(500).send({"message":err})
        console.log(err)
    }
})

app.get('/contract', async(req, res)=>{
    try{
        let contract = await Contract.find({});
        return res.status(200).send(contract)
    }
    catch(err){
        return res.status(500).send({"message":err})
        console.log(err)
    }
})

app.get('/borrowers', async(req, res)=>{
    try{
        let borrowers = await User.find({role:'borrower'});
        return res.status(200).send(borrowers)
    }
    catch(err){
        return res.status(500).send({"message":err})
        console.log(err)
    }
})

app.post('/lender', async(req, res)=>{
    console.log(req.body)
    try{
        const lender = {
            Name:req.body.Name,
            MobileNumber:req.body.MobileNumber,
            role: 'lender',
          };
        let user = await User.create(lender)
        return res.status(200).send({
            message: 'Lender created successfully'
          })

    }
    catch(err){
        return res.status(500).send({"message":err.message})
        console.log(err)

    }
    
})

app.post('/borrower', async(req, res)=>{

    try{

        const borrower = {
            role: 'borrower',
            Name:req.body.Name,
            MobileNumber:req.body.MobileNumber
          };
        let user = await User.create(borrower)
        return res.status(200).send({
            message: 'Borrower created successfully'
          })
    }
    catch(err){
        return res.status(500).send({"message":err})
        console.log(err)

    }
   

})


app.post('/contract', async(req, res) => {
    try{
        // const {lenderId, borrowerId, principle, interest, loanStartDate, loanDueDate, isRepaid} = req.body;
        let lendersId = await User.findOne({_id:req.body.lenderId});
        let borrowerId = await User.findOne({_id:req.body.borrowerId});

        var contract = {
            lender: lendersId,
            borrower: borrowerId,
            principle: req.body.principle,
            interest: req.body.interest,
            loanStartDate: req.body.loanStartDate,
            loanDueDate: req.body.loanDueDate,
        }

        

        
        let contracts = await Contract.create(contract)
        return res.status(200).send({message: 'Contract created successfully'})
        

    }   
    catch(err){
        return res.status(500).send({"message":err})
        console.log(err)

    }
})


app.post('/lendertotal', async(req, res) => {
    try{
        // const {lenderId, borrowerId, principle, interest, loanStartDate, loanDueDate, isRepaid} = req.body;
        var lendertotal = [];

        let contract = await Contract.find({});
        contract.forEach(async function (item){
            
            lendertotal.forEach(function (e){
               
            })

        });    
        return res.status(200).send(contract)

    }   
    catch(err){
        return res.status(500).send({"message":err})
        console.log(err)

    }
})




app.listen(5000, async()=>{
    try{
        await connect()
        console.log("Listening on port 5000...")
    }
    catch(err){
        console.log(err)
        }
})