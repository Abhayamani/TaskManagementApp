import { Paper, Typography,FormControl, Select, MenuItem} from '@material-ui/core'
import { Table, TableContainer, TableCell, TableRow, createTheme, ThemeProvider,Button  } from '@mui/material'
import {React, useState, useEffect } from 'react'
import axios from 'axios'
import SubmitButton from '../Layout/SubmitButton'
import './Pages.css'
import { useParams } from 'react-router-dom'
import Wrapper from '../Layout/Wrapper'
import {API} from '../config'

// import {Divider} from '@mui/material';

const theme = createTheme({
  typography: {
    header: {
      fontFamily: "Josefin Sans",
      fontWeight: 700,
    },
  },
});

const statusAll = ["Pending", "Ongoing", "Completed"];



const TasksInfo = () => {
  const {taskid} = useParams()
  const [status, setStatus] = useState("Select status");
  const [taskInfo,setTaskInfo]=useState({})
  // const [starttime, setStarttime] = useState("");
  // const [endtime, setEndtime] = useState("");
  // const [message, setMessage] = useState("");
  // const [button_label,setButton_label] = useState("START")
  // const [start,setStart] = useState(false)

  // const handlestarttime = (event) => {
  //   const start_time = event.target.value;
  //   setStarttime(start_time);
  // };

  // const handleendtime = (event) => {
  //   const end_time = event.target.value;
  //   setEndtime(end_time);
  // };

  // const submitStart = async (e) => {
  //   e.preventDefault();
  //   setButton_label(" END ")
  //   await axios
  //     .post(
  //       `${API}/timer/addtimer`,
  //       {
  //         starttime : starttime
          
  //       }
       
  //     )
  //     .then((result) => {
  //       // setMessage(result.data.msg);
  //       console.log(result.data);
  //       console.log(result.data.msg);
        
  //     });
  // };
  // const submitEnd = async (e) => {
  //   e.preventDefault();
    
  //   await axios
  //     .post(
  //       `${API}/timer/addtimer`,
  //       {
          
  //         endtime:endtime
  //       }
       
  //     )
  //     .then((result) => {
  //       setMessage(result.data.msg);
  //       console.log(result.data);
  //       console.log(result.data.msg);
  //     });
  // };
  

  useEffect(() => {
    axios
      .get(`${API}/task/${taskid}`)
      .then((res) => {
        console.log(res);
        setTaskInfo(res.data.task);
        setStatus(res.data.task.task_status)
      })
      .catch((err) => {
        console.log(err);
      });
  },[taskid]);
 
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  const updateTask = () =>
    axios
      .put(`${API}/task/update/${taskid}`, {
        
        task_status:status
      })
      .then(window.location.reload());
  // }
  return (
    <>
    <Wrapper userSideBar navHeader>
      <ThemeProvider theme={theme}>
            <TableContainer
              component={Paper}
              className="paperStyle"
              sx={{ maxWidth: 700 }}
            >
              <Typography className="formHeading" variant="h5">
                TASK DETAIL
              </Typography>
              <Table>
                <TableRow>
                  <TableCell variant="head">
                    <Typography variant="header" className="tableHead">
                      TASK
                    </Typography>
                  </TableCell>
                  <TableCell>{taskInfo.title}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">
                    <Typography variant="header" className="tableHead">
                      PRIORITY
                    </Typography>
                  </TableCell>
                  <TableCell>{taskInfo.priority}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">
                    <Typography variant="header" className="tableHead">
                      DESCRIPTION
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {taskInfo.description}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">
                    <Typography variant="header" className="tableHead">
                      STATUS
                    </Typography>
                    <FormControl>
                      <Select
                        id="selectedStatus"
                        variant="outlined"
                        value={status}
                        onChange={handleChangeStatus}
                        className="selectStyle"
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
                  <TableCell>
                    <SubmitButton
                      button_name="Update Status"
                      button_id="updateStatus_btn"
                      handleChange={()=>updateTask()}
                      // handleChange={()=> handleUpdate(taskInfo.task_status)}
                    />
                  </TableCell>
                </TableRow>
                {/* <TableRow> */}
                        {/* <TableCell fullWidth><Button>START TASK</Button></TableCell> */}
                    {/* <TableCell>

                    <SubmitButton
                    button_name={button_label}
                    value={starttime}
                    onChange={(e)=>setStarttime(e.target.value)}
                    handleChange={submitStart}
                    
                    />

                 
                    </TableCell>
                
                </TableRow> */}
              </Table>
            </TableContainer>
          
      </ThemeProvider>
      </Wrapper>
    </>
  );
};

export default TasksInfo