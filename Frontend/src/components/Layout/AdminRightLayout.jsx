import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '@mui/material';
import axios from 'axios';
import { API } from '../config';
import { EventCard } from './Cards';
// import { TeamCard } from './Cards'

export const Team = ({ name, position, icon }) => (
  <>
    <div className="teamMember">
      <div className="descimage">
        {/* <div className="taskicon">
          <img src={icon} alt="#"></img>
        </div> */}
      </div>
      <div className="userInfo">
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  </>
);

export const AdminRightLayout = ({name,role}) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/user/users`)
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  },[users]);
  return (
    <>
    <div className='admin_RightLayout'>
    <Card className="teamCard">
        <h2 className="teamCard_title">Team Members</h2>
        <CardContent className="teamCardContent">
          {users.map((user)=>(
            <Team
            name={user.name}
            position={user.role}
            
          />
          ))}
          
          
        </CardContent>
      </Card>
      <EventCard action eventHeader={"Events"} allEvents viewEvent deleteEvent/>
    </div>
      
    </>
  );
}
