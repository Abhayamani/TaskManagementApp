import React, { useState } from "react";
import { Table, Paper, Typography, TextField ,} from "@material-ui/core";
import { TableContainer, TableCell, TableRow,Button } from "@mui/material";
// import { useState, useEffect } from 'react'
import axios from 'axios'
// import SubmitButton from '../Layout/SubmitButton'
import "./Pages.css";
import { API } from "../config";

export const EditUserInfo = ({ prevName, prevEmail, prevAddress,prevMobile, prevStatus,u_id }) => {
  const [name,setName]=useState(prevName)
  const [email,setEmail]=useState(prevEmail)
  const [address,setAddress]= useState(prevAddress)
  const [mobile,setMobile] = useState(prevMobile)
  // const [status,setStatus] = useState(prevStatus)
  const userID=u_id

  const updateUser = () =>
    axios
      .put(`${API}/user/${userID}`, {
        name: name,
        email: email,
        address: address,
        mobile: mobile,
        // status: status,
      })
      .then(window.location.reload());
  return (
    <div>
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
              <Typography variant="header" className="tableHead">
                NAME
              </Typography>
            </TableCell>
            <TableCell>
              <TextField
                variant="outlined"
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                EMAIL
              </Typography>
            </TableCell>
            <TableCell>
              <TextField
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                ADDRESS
              </Typography>
            </TableCell>
            <TableCell>
              <TextField
                variant="outlined"
                size="small"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                MOBILE
              </Typography>
            </TableCell>
            <TableCell>
              <TextField
                variant="outlined"
                size="small"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </TableCell>
          </TableRow>
          {/* <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                STATUS
              </Typography>
            </TableCell>
            <TableCell>
              <TextField
                variant="outlined"
                size="small"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </TableCell>
          </TableRow> */}
        </Table>
      </TableContainer>
      
        
        <div className='edit_btn'>
        <Button variant="contained" onClick={()=>updateUser()}  autoFocus>
          Save Changes
        </Button>
        </div>
        
      
    </div>
  );
};
