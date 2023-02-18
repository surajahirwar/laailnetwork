

import { Routes, Route, Link } from "react-router-dom";
import AddLender from "./components/addLender";
import Borrower from "./components/borrower";
import Contract from "./components/contract";
import Lenders from "./components/lenders";
import Navbar from "./components/navbar";


function App() {



  return(
    <div >
      <Navbar />
      <Routes>
       <Route path="/lenders" element={<Lenders />} />
       <Route path="/borrowers" element={<Borrower />} />
       <Route path="/contract" element={<Contract />} />
       <Route path="/addlender" element={<AddLender />} />

      </Routes>

    </div>
  )
}

export default App
