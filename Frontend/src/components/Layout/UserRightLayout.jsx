import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../config'
import { TaskCountCardContainer } from './Cards'

const UserRightLayout = () => {
  const {id} = useParams()
  let pending_count=0
  let ongoing_count=0
  let completed_count=0
  const [assignedTask,setAssignedTask]=useState([])
  
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
  assignedTask.map((task)=>(
    (task.task_status === "Pending" ?  (pending_count=pending_count+1): (null))
  ))
  assignedTask.map((task)=>(
    (task.task_status === "Ongoing" ?  (ongoing_count=ongoing_count+1): (null))
  ))
  assignedTask.map((task)=>(
    (task.task_status === "Completed" ?  (completed_count=completed_count+1): (null))
  ))
  return (
    <>
      <TaskCountCardContainer pending_count={pending_count} ongoing_count={ongoing_count} completed_count={completed_count}/>
    </>
  )
}

export default UserRightLayout
