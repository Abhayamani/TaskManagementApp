import React, { useEffect, useState } from "react";
import { TaskCard } from "../Layout/Cards";
import Wrapper from "../Layout/Wrapper";
import {  useParams } from 'react-router-dom'
import axios from "axios";
import { API } from "../config";
// import AuthContext  from '../context/AuthProvider';


const token = localStorage.getItem("token")

axios.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${token}`
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

const UserDashboard = () => {
  // const { auth } = useContext(AuthContext)
  let {id} = useParams()
  console.log(id)
  // const GETUSER_URL=`user/${id}`
  const [user,setUser] = useState({})
  const [assignedTask,setAssignedTask]=useState([])

  
  useEffect(()=>{
    axios
    .get(`${API}/user/${id}`)
    .then((res)=>{
      setUser(res.data.user)
    })
    .catch((err) => {
      console.log(err);
    });
  },[id])

  useEffect(()=>{
    axios
    .get(`${API}/task/assignedtask/tasks/${id}`)
    .then((res)=>{
      setAssignedTask(res.data.results)
    })
    .catch((err) => {
      console.log(err);
    });
  },[id])
  const pending_tasks=assignedTask.map((task)=>(
    (task.task_status === "Pending" ?  (<li>{task.title}</li>): (null))
  ))
  const ongoing_tasks=assignedTask.map((task)=>(
    (task.task_status === "Ongoing" ?  (<li>{task.title}</li>): (null))
  ))
  const completed_tasks=assignedTask.map((task)=>(
    (task.task_status === "Completed" ?  (<li>{task.title}</li>): (null))
  ))
  console.log(pending_tasks,ongoing_tasks,completed_tasks)
  console.log(user)
  console.log(assignedTask)
  return (
    <>
      <Wrapper userSideBar navHeader page_title="Dashboard" >
        <div className="dashboard_container">
          <div>
            
            
            <div className="user_greeting">
              <h2>Hi, {user.name}!</h2>
              <p>
                Welcome to your dashboard. You can view and update your tasks
                here. You can also view your meeting schedules.
              </p>
            </div>
            
              
            <div className="taskcards_container">
              <div className="pending_card">
                <TaskCard
                  task_title={pending_tasks}
                  taskCard_title="Pending Tasks"
                />
              </div>
              <div className="ongoing_card">
                <TaskCard
                  task_title={ongoing_tasks}
                  taskCard_title="Ongoing Tasks"
                />
              </div>
              <div className="completed_card">
                <TaskCard
                  task_title={completed_tasks}
                  taskCard_title="Completed Tasks"
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default UserDashboard;
