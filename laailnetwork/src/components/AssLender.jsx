import axios from 'axios'
import React, { useState } from 'react'

export default function AddLender() {
    const [lender, setlender] = useState({})

    const handleSubmit = (e) =>{
            e.preventDefault()
            axios.post('http://localhost:5000/lender',lender)
            .then((res)=>(
                // console.log(res)
                alert(res.data.message)
            ))
            .then((err)=>{
                console.log(err)
            })
    }
    
    const handleChange = (e) =>{
         setlender({...lender, 
            [e.target.name]: e.target.value
        })
    }
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        padding:'10px',
  
    }}>
          <form onSubmit={handleSubmit} style={{
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                    padding:"50px",
                    borderRadius:"5px",
          }} >
            <label >Lender Name</label><br/>
            <input onChange={handleChange} type="text" name="Name" required /><br />
            <label >Phone Number</label><br/>
            <input onChange={handleChange} type="Number"  name="MobileNumber" required/><br/><br/>
            <input type="submit" className='btn btn-primary'  />
        </form> 
​
    </div>
  )
}
 