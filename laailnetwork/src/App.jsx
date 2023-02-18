import { useNavigate } from "react-router-dom"
import AllRoutes from "./components/AllRoutes"
import Navbar from "./components/Navbar"


function App() {

  const navigate = useNavigate()


  return (
    <div >
    
    <div style={{
     display: "flex",
     justifyContent: "space-between",
     width: "100%",
     position: "fixed",
     top: 10,
     left: 0,
     padding:'10px',
     boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'
     
    }}>
      <button onClick={(e)=>navigate('/')} className="btn btn-primary">Home</button>
      <button onClick={(e)=>navigate('/lenders')} className="btn btn-primary">Lenders</button>
      <button onClick={(e)=>navigate('/borrowers')} className="btn btn-primary">Borrowers</button>
      <button onClick={(e)=>navigate('/addlender')} className="btn btn-primary">Add Lender</button>
      <button onClick={(e)=>navigate('/addborrower')} className="btn btn-primary">Add Borrower</button>
      <button onClick={(e)=>navigate('/contract')} className="btn btn-primary">Add Contract</button>
      </div>
    <AllRoutes />

     
     
    </div>
  )
}

export default App
