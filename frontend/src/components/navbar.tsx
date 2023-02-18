import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   
    <div style={{
      position: 'absolute',
      height: '100vh',
      width: '100vw',
      top: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      
     
      color: 'white'

    }}>
  <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
     <Link to="/lenders">
      <button className="btn btn-outline-success" > All lenders</button>
      </Link>
      <Link to="/borrowers">
      <button className="btn btn-outline-success" >All borrowers</button>
      </Link> 
      <Link to="/addlender">
            <button className="btn btn-outline-success" >Add lender</button>
            </Link>
      <button className="btn btn-outline-success" >Add borrower</button>
      <Link to="/contract">
      <button className="btn btn-outline-success" >Create Contract</button>
      </Link>
      <button className="btn btn-outline-success" >Search</button>

      
 
  </div>
</nav>
    
</div>
  )
}
