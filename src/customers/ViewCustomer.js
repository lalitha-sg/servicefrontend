import React, { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';
export default function ViewCustomer() {

      const [customer, setCustomer] = useState({
            firstName: '',
            lastNAme: '',
            emailId:''
      })

      const {id} = useParams();

      useEffect(()=>{
            loadCustomers()  
        },[]);


        const loadCustomers = async ()=>{
            const result = await axios.get(`http://localhost:8080/viewCustomer/${id}`)
            setCustomer(result.data);
      }

  return (
    <div className='container'>
    <div className='row'>
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
     <h2 className='text-center m-4'>Customer Details </h2>
     <div className='card'>
      <div className='card-header'>
            Detais of customer id:
            <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                     <b>First Name:</b>
                     {customer.firstName}
                  </li>

                  <li className='list-group-item'>
                     <b>Last Name:</b>
                     {customer.lastNAme}
                  </li>

                  <li className='list-group-item'>
                     <b>E-mail:</b>
                     {customer.emailId}
                  </li>
            </ul>

      </div>

     </div>
     <Link className='btn btn-primary my-2' to="/">Back to Home</Link>
     </div>
     </div>
     </div>
  );
}
