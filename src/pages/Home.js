import React,{ useEffect, useState } from 'react';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function Home() {

      const [customers,setCustomers] = useState([]);
      const {id} = useParams;

      useEffect(()=>{
            loadCustomers();
      },[])

      const loadCustomers = async()=>{
            const result = await axios.get("http://localhost:8080/customers");
            setCustomers(result.data);
           
      }

      const deleteCustomer = async (id)=>{
        await axios.delete(`http://localhost:8080/customers/${id}`)
        loadCustomers()
      }

  return (
    <div className='container'>
      <div className='py-4'>
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
      {
            customers.map((customer,index)=>(
                  <tr>
                  <th scope="row" key={index}>{index+1}</th>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.emailId}</td>
                  <td>
                    <Link className='btn btn-primary mx-2' to={`/viewCustomer/${customer.id}`}>View</Link>
                    <Link className='btn btn-outline-primary mx-2' to={`/customers/${customer.id}`}>Edit</Link>
                    <button className='btn btn-danger mx-2'
                    onClick={()=>deleteCustomer(customer.id)}>Delete</button>
                  </td>
                </tr>
            ))
      }
   
   
  </tbody>
</table>
      </div>
    </div>
  )
}
