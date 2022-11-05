import { ViewButton, EditButton, DeleteButton } from "../Layout/ActionDialogBox";
import Wrapper from "../Layout/Wrapper";
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../config";
import { EditTaskInfo } from "./EditTaskInfo";
import {ViewTask} from "./ViewTask";


const ManageTask = () => {
  const [tasks,setTasks]=useState([])
  
  const [users, setUsers] = useState([]);


  const handleDelete = (id) => {
    axios.delete(`${API}/task/delete/${id}`);
    window.location.reload()
  };
  useEffect(()=>{
    axios
    .get(`${API}/task/tasks`)
    .then((res)=>{
      setTasks(res.data.tasks)
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  useEffect(()=>{
    axios.get(`${API}/user/users`)
    .then((res)=>{
      setUsers(res.data.users)
    })
    .catch((err) => {
      console.log(err);
    });
  },[tasks])
  console.log(users)
  
  return (
    <>
    
      <Wrapper adminSidebar navHeader page_title="Manage tasks">
            <div className="ttw">
              <Table responsive='sm' striped hover>
                <thead className="table_header" >
                  <tr>
                    <th scope="col">S.N.</th>
                    <th scope="col">TASK</th>
                    <th scope="col">PRIORITY</th>
                    <th scope="col">STATUS</th>
                    {/* <th scope="col">DURATION</th> */}
                    
                    <th scope="col">TASK ALLOCATED</th>
                    <th className="action_col" scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((row,index) => (
                    <tr className="table_row" key={index+1}>
                      <td className="paddingtoptd">{index+1}</td>
                      <td>{row.title}</td>
                      <td>{row.priority}</td>
                      <td>{row.task_status}</td>
                      {/* <td>{row.duration}</td> */}
                      {/* <td>{users.find(user=>user._id===row.user).name}</td> */}
                      {/* {console.log(users.find(user=>user._id===row.user).name)} */}
                      {/* {console.log(users.map((user)=>(user.createdAt.valueOf())))} */}
                      <td>{row.user.name}</td>
                      <td>{
                        <div className="action_column">
                          <ViewButton dialogTitle="View Task" 
                          dialogContent={
                            <ViewTask
                            title={row.title}
                            description={row.description}
                            priority={row.priority}
                            task_status={row.task_status}
                            user={row.user.name}
                            />
                          }/>
                          <EditButton 
                          dialogTitle="Edit Task" 
                          dialogContent={
                            <EditTaskInfo
                            task_id={row._id}
                            prevTitle={row.title}
                            prevDescription={row.description}
                            prevPriority={row.priority}
                            prevTask_status={row.task_status}
                            prevUser={row.user._id}
                            />

                          }
                          
                          />
                          <DeleteButton
                          dialogTitle="Delete Task"
                          dialogContent="Are you sure you want to delete the selected task?"
                          handleDelete={() => handleDelete(row._id)}
                          />
                        </div>
                        }</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
      </Wrapper>
    </>
  );
};

export default ManageTask;
