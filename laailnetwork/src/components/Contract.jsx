import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Contract() {

    const [contract, setcontract] = useState({})
    const [lenders,setlenders] = useState([])
    const [borrowes,setborrowers] = useState([])
    const handleChange =(e)=>{
        const { name, value } = e.target

		setcontract({
		  ...contract,
		  [name]: value,
		});
    }

    const handleSubmit = (e)=>{
		e.preventDefault();
        axios.post('http://localhost:5000/contract',contract)
        .then((res)=>(
            // console.log(res)
            alert(res.data.message)
        ))
        .then((err)=>{
            console.log(err)
        })

		}


 useEffect(()=>{

    axios.get('http://localhost:5000/lenders')
    .then((res)=>(setlenders(res.data)))
    .catch((err)=>(console.log(err)));

    axios.get('http://localhost:5000/borrowers')
    .then((res)=>(setborrowers(res.data)))
    .catch((err)=>(console.log(err)));

 },[])
 
 console.log(lenders, borrowes)
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        color: 'white',
        fontSize: '15px',
        fontFamily: 'Arial',
        textAlign: 'center',
        // padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
    
    }} >
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <select name="lenderId" onChange={handleChange} className="form-control" required>
                                        <option defaultValue={"Select"} >Select lenderId</option> 
                                        {lenders?.map((e)=>(
                                                <option key={e._id} value={e._id}>{e.Name}</option>
                                        ))}

                                        </select>
            </div>              
            <div className="form-group">
                <select  name="borrowerId"  onChange={handleChange} className="form-control" required>
                <option  defaultValue={"Select"}>Select borrower</option>
                {borrowes?.map((e)=>(
                                                <option key={e._id} value={e._id}>{e.Name}</option>
                                        ))}

                </select>
            </div>
           
            <div className="form-group">
                <input onChange={handleChange}   type="number" name="principle" className="form-control" placeholder="Enter principle" required />
            </div>
            <div className="form-group">
                <input onChange={handleChange} type="number" name='interest' className="form-control" placeholder="Enter interest" required />
                
            </div>
            <div className="form-group">
                <input onChange={handleChange} type="date" name='loanStartDate' className="form-control" placeholder="Enter loanStartDate" required />
            </div>
            <div className="form-group">
                <input onChange={handleChange} type="date" name='loanDueDate' className="form-control" placeholder="Enter loanDueDate" required />
            </div>
            
         
            <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>





    </div>
  )
}
