import React, { useState } from 'react'

export default function Contract() {

    const [contract, setcontract] = useState({})

    const handleChange =(e:any)=>{
        const { name, value } = e.target
		setcontract({
		  ...contract,
		  [name]: value,
		});
    }

    const handleSubmit = (e:any)=>{
		e.preventDefault();
		console.log(contract)

		}
  return (
    <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label>Select lenderId</label>
                    <select defaultValue={'Select'} onChange={handleChange} className="form-control">
                                        <option value="select">Select lenderId</option>

                                        </select>
            </div>              
            <div className="form-group">
                <label >Select borrower</label>
                <select defaultValue={'Select'} onChange={handleChange} className="form-control">
                <option value='select'>Select borrower</option>

                </select>
            </div>
           
            <div className="form-group">
                <label >Add principle</label>
                <input onChange={handleChange} value="surja"  type="text" name="principle" className="form-control" placeholder="Enter principle" />
            </div>
            <div className="form-group">
                <label >Add interest</label>
                <input onChange={handleChange} type="number" className="form-control" placeholder="Enter interest" />
                
            </div>
            <div className="form-group">
                <label >Add loanStartDate</label>
                <input onChange={handleChange} type="date" className="form-control" placeholder="Enter loanStartDate" />
            </div>
            <div className="form-group">
                <label >Add loanDueDate</label>
                <input onChange={handleChange} type="date" className="form-control" placeholder="Enter loanDueDate" />
            </div>
            
         
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>





    </div>
  )
}
