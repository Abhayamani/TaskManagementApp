import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiCog } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

import Logout from "@mui/icons-material/Logout";
// import axios from "axios";
// import { API } from "../config";
const SideBar = () => {

  // const navigate=useNavigate()
//   function changeLocation(placeToGo){
//     navigate(placeToGo, { replace: true })
//     window.location.reload()
// }
  const id = useParams().id;

  const routes = [
    {
      path: `/admin/dashboard/${id}`,
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/admin/users",
      name: "Users",
      icon: <FaUser />,
      subRoutes: [
        {
          path: `/admin/${id}/adduser`,
          name: "Add User ",
          icon: <FaUser />,
        },

        {
          path: `/admin/${id}/manageuser`,
          name: "Manage User",
          icon: <FaUser />,
        },
      ],
    },
    {
      path: "/tasks",
      name: "Tasks",
      icon: <MdMessage />,
      exact: true,
      subRoutes: [
        {
          path: `/admin/${id}/addtasks`,
          name: "Add Tasks ",
          icon: <FaUser />,
        },
        {
          path: `/admin/${id}/managetasks`,
          name: "Manage Tasks",
          icon: <FaLock />,
        },
      ],
    },

    {
      path: "/settings",
      name: "Settings",
      icon: <BiCog />,
      exact: true,
      subRoutes: [
        {
          path: `/admin/${id}/settings/2fa` ,
          name: "Change Password",
          icon: <FaLock />,
        },
        // {
        //   path: "/",
        //   name: "Logout",
        //   icon: <FaUser />,
        // },
      ],
    },
    {
      path: "/",
      name: "Logout",
      icon: <Logout fontSize="small" />,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const navStyle = { height: 70, padding: 20, paddingLeft: 8 };
  const handleLogout = () => {
    window.localStorage.clear()
    console.log("logout")
    // changeLocation(path)
  }
  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "16vw" : "3vw",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="logo" style={navStyle}>
            {isOpen ? (
              <img
                src={process.env.PUBLIC_URL + "/asterdio-light.png"}
                alt=""
                className="logo_image"
                style={{ maxHeight: "100%" }}
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + "/asterLogo_light.png"}
                alt=""
                className="logo_image"
                style={{ maxHeight: "100%" }}
              />
            )}
          </div>
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Asterdio
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                  onClick={ route.name==="Logout" ?handleLogout:null}
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        {/* 
        <main>{children}</main> */}
      </div>
    </>
  );
};

export default SideBar;
