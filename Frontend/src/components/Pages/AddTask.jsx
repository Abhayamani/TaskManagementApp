// import React, { useEffect, useState } from 'react';
// import {Paper, Grid, Typography,  FormControl, MenuItem, createTheme, ThemeProvider, } from '@mui/material';
// import {Select,TextField} from '@material-ui/core'
// import './Pages.css'
// import SubmitButton from '../Layout/SubmitButton';
// import Wrapper from '../Layout/Wrapper';
// import axios from 'axios';
// import { API } from '../config';
// import { useParams } from 'react-router-dom';
// import { ActionButton } from '../Layout/ActionButton';
// //defining theme to overRide the default topography fontFamily
// const theme = createTheme({
//   typography: {
//     allVariants:{
//       fontFamily: 'Josefin Sans',
//     }
//   },
// });


// const priorities=[
//   'Low',
//   'Medium',
//   'High',
//   'Urgent'
// ]

// const statusAll=[
//   'Pending',
//   'Ongoing',
//   'Completed'
// ]

// export default function AddTask() {
//   const id = useParams().id
//   console.log(id)
//   const [result,setResult]=useState([])
//   let users=[]
//   useEffect(() => {
//     axios
//       .get(`${API}/user/users`)
//       .then((res) => {
        
//         setResult(res.data.users)
//         // console.log(result)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   },[result]);

//   result.map((user)=>(
//     ((user._id!==id) ? users.push(user.name): null)
//   ))
  
//   //select bhako role ko value chaiyema use this---
//   const [user, setUser] = useState("Select user");
//   const [priority, setPriority] = useState("Select priority");
//   const [status, setStatus] = useState("Select status");

//   const handleChange = (event) => {
//     setUser(event.target.value);
//   };
  
//   return (
//     <>
//       <Wrapper adminSidebar navHeader >
//         <ThemeProvider theme={theme}>
//           {/* <div className='mainDiv'> */}
//           <Paper className="paperStyle">
//             <Typography className="formHeading" variant="h4">
//               ADD TASK
//             </Typography>

//             <Grid container>
//               <Grid container className="gridContainer">
//                 <Grid item xs={12} md={3}>
//                   <Typography>User</Typography>
//                 </Grid>
//                 <Grid item xs={12} md={9}>
//                   <FormControl fullWidth>
//                     <Select
//                       id="selectedUser"
//                       value={user}
//                       variant="outlined"
//                       onChange={handleChange}
//                       defaultValue={user}
//                       style={{ height: 40 }}
//                     >
//                       <MenuItem value="Select user">
//                         <em style={{ fontStyle: "normal", color: "gray" }}>
//                           Select user
//                         </em>
//                       </MenuItem>
//                       {users.map((user) => {
//                         return (
//                           <MenuItem key={user} value={user}>
//                             {user}
//                           </MenuItem>
//                         );
//                       })}
//                     </Select>
//                   </FormControl>
//                 </Grid>
//               </Grid>

//               <Grid container className="gridContainer">
//                 <Grid item xs={12} md={3}>
//                   <Typography>Task</Typography>
//                 </Grid>
//                 <Grid item xs={12} md={9}>
//                   <TextField
//                     id="taskSubject"
//                     size="small"
//                     variant="outlined"
//                     fullWidth
//                   ></TextField>
//                 </Grid>
//               </Grid>

//               <Grid container className="gridContainer">
//                 <Grid item xs={12} md={3}>
//                   <Typography>Priority</Typography>
//                 </Grid>
//                 <Grid item xs={12} md={9}>
//                   <FormControl fullWidth>
//                     <Select
//                       id="selectedPriority"
//                       variant="outlined"
//                       value={priority}
//                       onChange={(e)=>setPriority(e.target.value)}
//                       defaultValue={priority}
//                       style={{ height: 40 }}
//                     >
//                       <MenuItem value="Select priority">
//                         <em style={{ fontStyle: "normal", color: "gray" }}>
//                           Select priority
//                         </em>
//                       </MenuItem>
//                       {priorities.map((priority) => {
//                         return (
//                           <MenuItem key={priority} value={priority}>
//                             {priority}
//                           </MenuItem>
//                         );
//                       })}
//                     </Select>
//                   </FormControl>
//                 </Grid>
//               </Grid>

//               <Grid container className="gridContainer">
//                 <Grid item xs={12} md={3}>
//                   <Typography>Description</Typography>
//                 </Grid>
//                 <Grid item xs={12} md={9}>
//                   <TextField
//                     id="taskDescription"
//                     multiline
//                     minRows={3}
//                     variant="outlined"
//                     fullWidth
//                   ></TextField>
//                 </Grid>
//               </Grid>

//               <Grid container className="gridContainer">
//                 <Grid item xs={12} md={3}>
//                   <Typography>Status</Typography>
//                 </Grid>
//                 <Grid item xs={12} md={9}>
//                   <FormControl fullWidth>
//                     <Select
//                       id="selectedStatus"
//                       variant="outlined"
//                       value={status}
//                       onChange={(e)=>setStatus(e.target.value)}
//                       defaultValue={status}
//                       style={{ height: 40 }}
//                     >
//                       <MenuItem value="Select status">
//                         <em style={{ fontStyle: "normal", color: "gray" }}>
//                           Select status
//                         </em>
//                       </MenuItem>
//                       {statusAll.map((status) => {
//                         return (
//                           <MenuItem key={status} value={status}>
//                             {status}
//                           </MenuItem>
//                         );
//                       })}
//                     </Select>
//                   </FormControl>
//                 </Grid>
//               </Grid>
//             </Grid>
//             <Grid container xs={12} md={12} className="gridButton">
//             <ActionButton 
//               actionButton={<SubmitButton button_name="ADD" button_id="addTask_btn" />}
//               dialogTitle="Task Assigned"
//               dialogContent={"New task has been assigned"}
//               dialogAction={<SubmitButton button_name="Ok" button_id="addTask_btn" />}
//               handleClose={()=>(window.location.reload())}
//               />
//             </Grid>
//           </Paper>
//           {/* </div> */}
//         </ThemeProvider>
//       </Wrapper>
//     </>
//   );
// }

import React, { useEffect, useState } from 'react';
// <<<<<<< HEAD
import { Paper, Grid, Typography, FormControl, MenuItem, createTheme, ThemeProvider, } from '@mui/material';
import { Select, TextField } from '@material-ui/core'

import './Pages.css'
import SubmitButton from '../Layout/SubmitButton';
import Wrapper from '../Layout/Wrapper';
import axios from 'axios';
// <<<<<<< HEAD
import { API } from "../config";
import { useParams } from 'react-router-dom';
import { ActionButton } from '../Layout/ActionButton';


//defining theme to overRide the default topography fontFamily
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Josefin Sans',
    }
  },
});



const priorities=[
  'Low',
  'Medium',
  'High',
  'Urgent'
]

const statusAll = [
  'Pending',
  'Ongoing',
  'Completed'
]

export default function AddTask() {
  const id = useParams().id
  console.log(id)
// <<<<<<< HEAD
  const [result, setResult] = useState([])
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
  const [user, setUser] = useState("Select user");
  const [priority, setPriority] = useState("Select priority");
  const [status, setStatus] = useState("Select status");
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState("");

  
  const submitTask = async (e) => {
    e.preventDefault();
   
    await axios
      .post(
        `${API}/task/addtask`,
        {
          user: user,
          priority: priority,
          task_status: status,
          title:task,
          description: description
        }
      )
      .then((result) => {
        setMessage(result.data.msg);
        console.log(result.data,message);
        console.log(result.data.msg);
        // window.location.reload()
      });
  };

  

  return (
    <>
      <Wrapper adminSidebar navHeader >
        <ThemeProvider theme={theme}>
          {/* <div className='mainDiv'> */}
          <Paper className="paperStyle">
            
              <Typography className="formHeading" variant="h4">
                ADD TASK
              </Typography>

              <Grid container>
              <Grid container className="gridContainer">
                <Grid item xs={12} md={3}>
                  <Typography>User</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  {/* <FormControl fullWidth>
                    <Select
                      id="selectedUser"
                      value={user}
                      variant="outlined"
                      onChange={(e)=>setUser(e.target.value)}
                      defaultValue={user}
                      style={{ height: 40 }}
                    >
                      <MenuItem value="Select user">
                        <em style={{ fontStyle: "normal", color: "gray" }}>
                          Select user
                        </em>
                      </MenuItem>
                      {users.map((user) => {
                        return (
                          <MenuItem key={user} value={user}>
                            {user}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl> */}
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
                </Grid>
              </Grid>

              <Grid container className="gridContainer">
                <Grid item xs={12} md={3}>
                  <Typography>Task</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    value={task}
                    id="taskSubject"
                    onChange={(e)=>setTask(e.target.value)}
                    size="small"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </Grid>
              </Grid>

              <Grid container className="gridContainer">
                <Grid item xs={12} md={3}>
                  <Typography>Priority</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <FormControl fullWidth>
                    <Select
                      id="selectedPriority"
                      variant="outlined"
                      value={priority}
                      onChange={(e)=>setPriority(e.target.value)}
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
                </Grid>
              </Grid>

              <Grid container className="gridContainer">
                <Grid item xs={12} md={3}>
                  <Typography>Description</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    id="taskDescription"
                    value={description}
                    multiline
                    onChange={(e)=>setDescription(e.target.value)}
                    minRows={3}
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </Grid>
              </Grid>

              <Grid container className="gridContainer">
                <Grid item xs={12} md={3}>
                  <Typography>Status</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <FormControl fullWidth>
                    <Select
                      id="selectedStatus"
                      variant="outlined"
                      value={status}
                      onChange={(e)=>setStatus(e.target.value)}
                      defaultValue={status}
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
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={12} md={12} className="gridButton">
              {/* <SubmitButton button_name="ADD" handleChange={submitTask} button_id="addTask_btn" /> */}
              <ActionButton 
              actionButton={<SubmitButton button_name="ADD" handleChange={submitTask} button_id="addTask_btn" />}
              dialogTitle="Task Added"
              dialogContent={"A new task has been added"}
              dialogAction={<SubmitButton button_name="Ok" button_id="addTask_btn" />}
              handleClose={()=>(window.location.reload())}
              />
            </Grid>
          </Paper>
          {/* </div> */}
        </ThemeProvider>
      </Wrapper>
    </>
  );
}