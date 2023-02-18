import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddBorrower from './AddBrrower'
import AddLender from './AssLender'
import Borrowers from './Borrowers'
import Contract from './Contract'
import Home from './Home'
import Lenders from './Lenders'

export default function AllRoutes() {
  return (
    <div>
        {/* <Navbar /> */}
         <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lenders" element={<Lenders />} />
                <Route path="/borrowers" element={<Borrowers />} />
                <Route path="/contract" element={<Contract />} />
                <Route path="/addlender" element={<AddLender />} />
                <Route path="/addborrower" element={< AddBorrower/>} />


      </Routes>
    </div>
  )
}
