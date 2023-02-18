import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Home() {

    const [contract, setcontract] = useState([])
    const [number, setnumber] = useState()
    useEffect(()=>{
        axios.get('http://localhost:5000/contract')
        .then((res)=>(setcontract(res.data)))
        .catch((err)=>(console.log(err)));
            
    },[])


    const handleNumberSubmit = (e)=>{
        if(number==""){
            
            alert('Please enter a number')

        }
       else if(number==1){
        console.log(number)
       }
       else{

        console.log('hello')

       }
       
    }   

    console.log(contract)





  return (
    <div> 
        <label >All Contract</label>
    <table border='1' >
        <thead>
        <tr>
        <th scope="col">Sno.</th>
        <th scope="col">Id</th>
        <th scope="col">Lender</th>
        <th scope="col">Borrower</th>
        <th scope="col">Amount</th>

        </tr>
        </thead>
        <tbody>
        {contract?.map((e, i)=>(

        <tr key={e._id}>
        <th scope="row">{i+1}</th>
        <td>{e._id}</td>
        <td>{e.lender.Name}</td>
        <td>{e.borrower.Name}</td>
        <td>{e.principle}</td>


        </tr>

            ))}
        </tbody>
    </table>

    <div style={{
        padding:"10px"

    }}>
        <input type="number" onChange={(e)=>setnumber(e.target.value)}  className='p-1 mr-5'/>
        <button onClick={(e)=>handleNumberSubmit(e)}  className='btn btn-primary'>check</button>
    </div>
    <label >If you type 1 then you will get all lender name or total and if you type any number then you will get sorted ascending by number of people they have given loans to. Eg.  </label>
    <table border='1' >
        <thead>
        <tr>
        <th scope="col">Sno.</th>
        <th scope="col">Id</th>
        <th scope="col">Lender</th>
        <th scope="col">Borrower</th>
        <th scope="col">Amount</th>

        </tr>
        </thead>
        <tbody>
        {contract?.map((e, i)=>(

        <tr key={e._id}>
        <th scope="row">{i+1}</th>
        <td>{e._id}</td>
        <td>{e.lender.Name}</td>
        <td>{e.borrower.Name}</td>
        <td>{e.principle}</td>


        </tr>

            ))}
        </tbody>
    </table>


    </div>
  )
}
