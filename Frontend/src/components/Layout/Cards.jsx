import { CardContent, Typography } from '@material-ui/core';
// import { AddBox } from '@material-ui/icons';
import {  Card, CardActions, CardHeader } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from '../config';
import { ViewEvent } from '../Pages/ViewEvent';
import { AddEventButton, DeleteButton, ViewButton } from './ActionDialogBox';
import moment from 'moment'

//TEAM MEMBER CARD

export const TaskCard=({task_title,taskCard_title})=>(
  <Card className="task_card">
    <h2>{taskCard_title}</h2>
    <ul>
      {task_title}
    </ul>
  </Card>
)

//TASK COUNT CARD
export const TaskCountCard = ({taskCount,taskCount_title,taskCountIcon}) => (
  <div className="card">
    
      <div className="card-left">
        <i className={taskCountIcon}></i>
        <div className="total-leave"></div>
      </div>
      <div className="card-right">
        <div className="days-no">{taskCount}</div>
        <div className="leave-type-card">{taskCount_title}</div>
      </div>
   
  </div>
);



export const EventCard = ({subheader,viewEvent,deleteEvent,eventHeader,action,allEvents}) => {
  const today = moment().format('MMMM Do YYYY')
  const [events,setEvents]=useState([])


  const handleDelete = (id) => {
    axios
    .delete(`${API}/event/delete/${id}`)
    .then(window.location.reload())
  };
  
  useEffect(()=>{
    axios
    .get(`${API}/event/events`)
    .then((response)=>{
      setEvents(response.data.events)
    })
    .catch((err) => {
      console.log(err);
    });
  },[events])
  
  const event_list = events.map((event) => (
    <li className='eventlist'>
      <div>{event.eventTitle}</div>
      <div>
        {viewEvent && <ViewButton dialogTitle={"View Event"} dialogContent={<ViewEvent eventTitle={event.eventTitle} eventDate={event.eventDate} eventDetail={event.eventDetail} />} />}
        {deleteEvent && <DeleteButton dialogTitle={"Delete Event"} dialogContent={"Are you sure you want to delete the selected event?"} handleDelete={() => handleDelete(event._id)}  />
}      </div>
    </li>
  ));
  const today_event_list = events.map((event)=>(
    
      (moment(event.eventDate).format('MMMM Do YYYY')===today ? <li className='eventlist'>{event.eventTitle}</li> : null)
    
  ))
  
  return (
    <div className="event-card">
      <Card>
        <CardHeader 
        title={eventHeader} 
        subheader={subheader} 
        action = {action && <AddEventButton />}
        />
        
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <ul>{allEvents && event_list}</ul>
            <ul>{subheader && today_event_list }</ul>
          </Typography>
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
    </div>
  );
};
export const TaskCountCardContainer=({pending_count,ongoing_count,completed_count})=>(
  <div className="card-container">
                <ul className="pd-ul">
                  <li>
                    <TaskCountCard
                      taskCount={pending_count}
                      taskCount_title="Pending Tasks"
                      taskCountIcon="fa fa-tasks bx1"
                    />
                  </li>
                  <li>
                    <TaskCountCard
                      taskCount={ongoing_count}
                      taskCount_title="Ongoing Tasks"
                      taskCountIcon="fa fa-bar-chart bx5"
                    />
                  </li>

                  <li>
                    <TaskCountCard
                      taskCount={completed_count}
                      taskCount_title="Completed Tasks"
                      taskCountIcon="fa fa-bars bx3"
                    />
                  </li>
                </ul>
                
              </div>
  )