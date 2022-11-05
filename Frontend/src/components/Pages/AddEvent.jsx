import React, { useState } from "react";
import { Table, Paper, Typography, TextField } from "@material-ui/core";
import { TableContainer, TableCell, TableRow,Button } from "@mui/material";
import axios from "axios";
import { API } from "../config";

export const AddEvent = () => {

  const [eventTitle,setEventTitle]=useState('')
  const [eventDate,setEventDate]=useState('')
  const [eventDetail,setEventDetail]=useState('')

  const addEvent = () =>
    (
      axios
      .post(`${API}/event/addevent`,{
        eventTitle:eventTitle,
        eventDate:eventDate,
        eventDetail:eventDetail
      })
      .then((response) => {
        window.location.reload()
      })
    )
  
  return (
    <>
      <TableContainer
        component={Paper}
        className="paperStyle"
        sx={{ maxWidth: 700 }}
      >
        <Table>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                Event Title
              </Typography>
            </TableCell>
            <TableCell>
              <TextField 
              variant="outlined" 
              size="small" 
              value={eventTitle}
              onChange={(e)=>setEventTitle(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                Event Date
              </Typography>
            </TableCell>
            <TableCell>
              <TextField 
              variant="outlined" 
              size="small"
              placeholder="YYYY-MM-DD" 
              value={eventDate} 
              onChange={(e)=>setEventDate(e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                Event Details
              </Typography>
            </TableCell>
            <TableCell>
              <TextField
                variant="outlined"
                size="small"
                multiline
                minRows={3}
                value={eventDetail}
                onChange={(e)=>setEventDetail(e.target.value)}
                fullWidth
              />
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <div className='edit_btn'>
        <Button variant="contained" onClick={()=>addEvent()}  autoFocus>
          Add Event
        </Button>
        </div>
    </>
  );
};
