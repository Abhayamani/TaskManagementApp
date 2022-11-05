// import { Paper, TextField } from '@mui/material'
import { Paper } from '@mui/material'
// import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Pages.css'
import SideBar from '../Navbar/SideBar'

const Test = () => {
  const [users,setUsers]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/user')
      .then(res=>{                              //res is response and err is error
        console.log(res)
        setUsers(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
  },[])

  return (
    
    <>
    <SideBar>
    <div className='mainDiv'>
        {/* <Paper className='paperStyle' style={{width:200}}>
            <TextField value={uname} variant='outlined' label='Name' name='uname' style={{marginBottom:20}}></TextField>
            <TextField value={phone} variant='outlined' label='Phone' name='phone' style={{marginBottom:20}}></TextField>
            <TextField value={email} variant='outlined' label='Email' name='email' style={{marginBottom:20}}></TextField>
            <Button>Add</Button>
        </Paper> */}
        <Paper className='paperStyle' style={{width:200}}>
         
            {
              users.map(user=>(
                <ul>
                  <li>Name:{user.uname}</li>
                  <li>Address:{user.address} </li>
                </ul>
              ))
            }
          
        </Paper>
    </div>
    </SideBar>
    </>
  )
}

export default Test
