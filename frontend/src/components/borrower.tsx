import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Borrower() {
const [borrowers, setborrowers] = useState([])
useEffect(()=>{

    axios.get('http://localhost:5000/borrowers')
    .then((res)=>(setborrowers(res.data)))
    .catch((err)=>(console.log(err)));
        
},[])

console.log(borrowers)

  return (
    <div>
        <table className="table" style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
            
        }}>
  <thead>
    <tr>
      <th scope="col">Sno.</th>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Mobile Number</th>
    </tr>
  </thead>
  <tbody>
    {borrowers?.map((e, i)=>(

    <tr key={e._id}>
      <th scope="row">{i+1}</th>
      <td>{e._id}</td>
      <td>{e.Name}</td>
      <td>{e.MobileNumber}</td>
    </tr>
   
        ))}
  </tbody>
</table>
    </div>
  )
}
