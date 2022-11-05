import React, { useEffect } from "react";
import { Table, Paper, Typography, TextField,Select } from "@material-ui/core";
import { TableContainer, TableCell, TableRow,Button,MenuItem,FormControl, } from "@mui/material";
import { useState } from "react";
import axios from 'axios'
import { API } from "../config";
import { useParams } from "react-router-dom";


export const EditTaskInfo = ({prevTitle,prevDescription,prevPriority,prevTask_status,prevUser,task_id}) => {
  const[title,setTitle]=useState(prevTitle)
  const[description,setDescription]=useState(prevDescription)
  const[priority,setPriority]=useState(prevPriority)
  const[user,setUser]=useState(prevUser)
  const[task_status,setTask_status]=useState(prevTask_status)
  
  const taskID=task_id
  const id = useParams().id
  console.log(id)
  const [result,setResult]=useState([])
  let users=[]
  useEffect(() => {
    axios
      .get(`${API}/user/users`)
      .then((res) => {
        
        setResult(res.data.users)
        console.log(result)
      })
      .catch((err) => {
        console.log(err);
      });
  },[result]);
  result.map((user)=>(
    ((user._id!==id) ? users.push(user): null)
  ))
  
  //select bhako role ko value chaiyema use this---
  
  const priorities=[
    'Low',
    'Medium',
    'High',
    'Urgent'
  ]
  const statusAll=[
    'Pending',
    'Ongoing',
    'Completed'
  ]

  const handleChangePriority = (event) => {
    setPriority(event.target.value);
  };

  const updateTask = () =>
    axios
      .put(`${API}/task/update/${taskID}`, {
        title: title,
        description:description,
        priority:priority,
        task_status:task_status,
        user:user
      })
      .then(window.location.reload());

  return (
    <>
    <TableContainer
        component={Paper}
        className="paperStyle"
        sx={{ maxWidth: 700 }}
      >
        {/* <Typography className="formHeading" variant="h5">
          USER DETAIL
        </Typography> */}
        <Table>
          <TableRow>
            <TableCell variant="head">
              <Typography 
              variant="header" 
              className="tableHead">
                TITLE
              </Typography>
            </TableCell>
            <TableCell>
              <TextField 
              variant="outlined" 
              size="small" 
              value={title}
              onChange={(e)=>setTitle(e.target.value)} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                DESCRIPTION
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" value={description} onChange={(e)=>setDescription(e.target.value)} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                PRIORITY
              </Typography>
            </TableCell>
            <TableCell>
              {/* <TextField variant="outlined" size="small" value={priority} onChange={(e)=>setPriority(e.target.value)} /> */}
              <FormControl fullWidth>
                    <Select
                      id="selectedPriority"
                      variant="outlined"
                      value={priority}
                      onChange={handleChangePriority}
                      defaultValue={priority}
                      style={{ height: 40 }}
                    >
                      <MenuItem value="Select priority">
                        <em style={{ fontStyle: "normal", color: "gray" }}>
                          Select priority
                        </em>
                      </MenuItem>
                      {priorities.map((priority) => {
                        return (
                          <MenuItem key={priority} value={priority}>
                            {priority}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                STATUS
              </Typography>
            </TableCell>
            <TableCell>
            <FormControl fullWidth>
                    <Select
                      id="selectedStatus"
                      variant="outlined"
                      value={task_status}
                      onChange={(e)=>setTask_status(e.target.value)}
                      // defaultValue={task_status}
                      style={{ height: 40 }}
                    >
                      <MenuItem value="Select status">
                        <em style={{ fontStyle: "normal", color: "gray" }}>
                          Select status
                        </em>
                      </MenuItem>
                      {statusAll.map((status) => {
                        return (
                          <MenuItem key={status} value={status}>
                            {status}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
              
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                USER
              </Typography>
            </TableCell>
            <TableCell>
              {/* <TextField variant="outlined" size="small" value={user} onChange={(e)=>setUser(e.target.value)}/> */}
              <FormControl fullWidth>
                    <Select
                      id="selectedUser"
                      // label={user.name}
                      value={user}
                      variant="outlined"
                      onChange={(e)=>setUser(e.target.value)}
                      defaultValue={user.name}
                      style={{ height: 40 }}
                    >
                      <MenuItem value="Select user">
                        <em style={{ fontStyle: "normal", color: "gray" }}>
                          Select user
                        </em>
                      </MenuItem>
                      {users.map((user) => {
                        return (
                          <MenuItem key={user} value={user._id}>
                            {user.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <div className='edit_btn'>
        <Button variant="contained" onClick={()=>updateTask()}  autoFocus>
          Save Changes
        </Button>
        </div>
    </>
  )
}
