import React, { useEffect, useState } from "react";
import Wrapper from "../Layout/Wrapper";
import axios from 'axios';
import { EventCard, TaskCard } from "../Layout/Cards";
import {API} from '../config'
import { useParams } from "react-router-dom";
import moment from 'moment'
export default function AdminDashboard() {
  let { id } = useParams();
  // console.log(id);
  // const GETUSER_URL=`user/${id}`
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/user/${id}`)
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  },[user,id]);

  useEffect(() => {
    axios
      .get(`${API}/task/tasks`)
      .then((res) => {
        setTasks(res.data.tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tasks]);
  

  const pending_tasks = tasks.map((task) =>
    task.task_status === "Pending" ? <li>{task.title } ({task.user.name})</li> : null
  );
  const ongoing_tasks = tasks.map((task) =>
    task.task_status === "Ongoing" ? <li>{task.title} ({task.user.name})</li> : null
  );
  const completed_tasks = tasks.map((task) =>
    task.task_status === "Completed" ? <li>{task.title} ({task.user.name})</li> : null
  );
  // console.log(pending_tasks, ongoing_tasks, completed_tasks);
  const today = moment().format('MMMM Do YYYY')
  // const today = new Date().toLocaleDateString()
  return (
    <>
      <Wrapper
        adminSidebar
        navHeader
        page_title="Dashboard"
        user_name={user.name}
        user_role={user.role}
      >
        <div>
          <div className="dash_top">
            <div className="user_greeting">
              <h2>Hi, Mary Smith!</h2>
              <p>
                Welcome to your dashboard. You can view and update your tasks
                here. You can also view your meeting schedules.
              </p>
            </div>
            <EventCard eventHeader={"Today's Events"} subheader={today}  />
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
}
