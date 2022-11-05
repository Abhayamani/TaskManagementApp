import React from "react";
import Navbar from "../Navbar/Navbar";
import NavHeader from "../Navbar/NavHeader";
import SideBar from "../Navbar/SideBar";
import SideBarUser from "../Navbar/SideBarUser";
import {AdminRightLayout} from "./AdminRightLayout";
import UserRightLayout from "./UserRightLayout";
const Wrapper = ({
  navBar,
  navHeader,
  children,
  adminSidebar,
  userSideBar,
  page_title,
  user_role,
  user_name
}) => {
  return (
    <>
      {navBar && <Navbar />}

      <div className="container_wrapper">
        <div className="sidebar">
          {adminSidebar && <SideBar />}
          {userSideBar && <SideBarUser />}
        </div>
        <main className="wrapper_children">
          <div className="top_layout">
            {navHeader && (
              <NavHeader
                page_title={page_title}
                user_role={user_role}
                user_name={user_name}
              />
            )}
          </div>
          <div className="dashboard_container">
          <div className="right_layout">
              {adminSidebar && <AdminRightLayout />}
              {userSideBar && <UserRightLayout />}
            </div>
            <div className="main_children">{children}</div>
            
          </div>
        </main>
      </div>
    </>
  );
};

export default Wrapper;
