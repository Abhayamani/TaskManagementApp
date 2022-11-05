import React, { useEffect, useState } from "react";
import { AccountCircle } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import { API } from "../config";
import axios from "axios";

const NavHeader = ({page_title}) => {
  let {id} = useParams()
  // console.log(id)
  // const GETUSER_URL=`user/${id}`
  const [user,setUser] = useState({})
  
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
  return (
    <>
      <div className="nav_header">
        <div>
          <h2>{page_title}</h2>
        </div>
        <div className="nav_userInfo">
          <div>
            <h3>{user.name}</h3>
            <p>{user.role}</p>
          </div>
          <div>
            <AccountCircle style={{ fontSize: 45 }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHeader;
