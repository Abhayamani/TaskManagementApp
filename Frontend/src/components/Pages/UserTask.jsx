import { Button,  } from '@material-ui/core';
import { Visibility } from '@material-ui/icons'
import { Table, TableContainer,Paper, TableBody,TableCell, TableHead, TableRow, Typography, createTheme, ThemeProvider  } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './Pages.css'
import { useParams } from 'react-router-dom'
import Wrapper from '../Layout/Wrapper';
import {API} from '../config'
const theme = createTheme({
  typography: {
    allVariants:{
      fontFamily: 'Josefin Sans',
      fontWeight:700
    }
  },
})

const Action = ({handleAction})=>(
  <>
    <Button onClick={handleAction} >View  {<Visibility/>} </Button>
  </>
)

// const userID = localStorage.getItem('id')
export const UserTask = () => {
  let {id} = useParams()

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${API}/task/assignedtask/tasks/${id}`)
      .then((res) => {
        console.log(id)
        setTasks(res.data.results);
      })
      ;
  },[id]);


  let navigate = useNavigate();
  const routeChange = (taskid) => {
    let path = `/user/${id}/tasks/${taskid}`;
    navigate(path);
  };
  return (
    <>
  <Wrapper userSideBar navHeader>
        
        <TableContainer
          component={Paper}
          className="paperStyle"
          sx={{ maxWidth: 700, maxHeight: 500 }}
        >
          <Typography className="formHeading" variant="h5">
            YOUR TASKS
          </Typography>
          <Table>
            <TableHead className="gridLine">
              <TableRow>
                <ThemeProvider theme={theme}>
                  <TableCell>
                    <Typography>ID</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>TASK</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>DESCRIPTION</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>STATUS</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>ACTION</Typography>
                  </TableCell>
                </ThemeProvider>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task,index) => (
                <TableRow
                  key={task._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index+1}
                  </TableCell>
                  <TableCell>{task.title}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>{task.task_status}</TableCell>
                  <TableCell>
                    <Action handleAction={()=>routeChange(task._id)} />{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Wrapper>
    </>
  );
};
