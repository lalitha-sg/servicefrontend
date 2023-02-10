import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditCustomer() {
      let navigate = useNavigate();
      const {id} = useParams();
      const [customer, setCustomer] = useState({
            firstName: '',
            lastNAme: '',
            emailId:''
      })
     
      const{firstName, lastName, emailId} = customer;

      const onInputChange = (e)=>{

            setCustomer({...customer, [e.target.name]:e.target.value})

      }

      useEffect(()=>{
            loadCustomers()  
        },[]);

      const onSubmit = async(e) =>{
            e.preventDefault();
            await axios.put(`http://localhost:8080/customers/${id}`, customer)
            navigate("/");

      }

      const loadCustomers = async ()=>{
            const result = await axios.get(`http://localhost:8080/customers/${id}`)
            setCustomer(result.data);
      }

  return (
    <div className='container'>
    <div className='row'>
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
     <h2 className='text-center m-4'>Edit Customer</h2>
     <form onSubmit={(e)=>onSubmit(e)}>
     <div className='mb-3'>
        <label htmlFor='firstName' className='form-label'>First Name</label>
        <input
        type={'text'} 
        className='form-control'
        placeholder='Enter First Name'
        name='firstName'
        value={firstName}
        onChange = {(e)=>onInputChange(e)}/>
     </div>
     <div className='mb-3'>
        <label htmlFor='lastName' className='form-label'>Last Name</label>
        <input
        type={'text'} 
        className='form-control'
        placeholder='Enter Last Name'
        name='lastName'
        value={lastName}
        onChange = {(e)=>onInputChange(e)}/>
     </div>
     <div className='mb-3'>
        <label htmlFor='emailId' className='form-label'>E-mail</label>
        <input
        type={'text'} 
        className='form-control'
        placeholder='Enter your e-mail address'
        name='emailId'
        value={emailId}
        onChange = {(e)=>onInputChange(e)}/>
     </div>
     <button type='submit'className='btn btn-outline-primary'>Submit</button>
     <Link type='submit'className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
     </form>
    </div>
    </div>
    </div>
  )
}
