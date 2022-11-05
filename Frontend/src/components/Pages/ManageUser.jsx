import React, { useEffect, useState } from "react";
import Wrapper from "../Layout/Wrapper";
import Table from "react-bootstrap/Table";
import { EditButton, DeleteButton } from "../Layout/ActionDialogBox";
import { EditUserInfo } from "./EditUserInfo";
import axios from "axios";
import { API } from "../config";

const ManageUser = () => {
  const currentUserId=localStorage.getItem('id')
  const handleDelete = (id) => {
    axios
    .delete(`${API}/user/delete/${id}`)
    .then(window.location.reload())
    
  };

  // const handleEdit = () => {
  //   console.log('edit')
  // };
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
      <Wrapper adminSidebar navHeader page_title="Manage Users">
        
            <div className="table-wrapper ttw">
              <Table responsive="sm" striped hover>
                <thead className="table_header">
                  <tr>
                    <th scope="col">S.N.</th>
                    <th scope="col">NAME</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">ADDRESS</th>
                    <th scope="col">MOBILE</th>
                    {/* <th scope="col">STATUS</th> */}
                    <th className="action_col" scope="col">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((row, index) => (
                    (row._id===currentUserId ? 
                    users.splice(index,1):
                    <tr className="table_row" key={index + 1}>
                      <td className="">{index + 1}</td>
                      <td>{row.name}</td>
                      <td>{row.email}</td>
                      <td>{row.address}</td>
                      <td>{row.mobile}</td>

                      {/* <td>{row.status}</td> */}
                      <td>
                        {
                          <div className="action_column">
                            <EditButton
                              dialogTitle="Edit User"
                              // handleEdit={() => handleEdit()}
                              dialogContent={
                                <EditUserInfo
                                  u_id={row._id}
                                  prevName={row.name}
                                  prevEmail={row.email}
                                  prevAddress={row.address}
                                  prevMobile={row.mobile}
                                  prevStatus={row.status}
                                />
                              }
                            />
                            <DeleteButton
                              dialogTitle="Delete User"
                              dialogContent="Are you sure you want to delete the selected user?"
                              handleDelete={() => handleDelete(row._id)}
                            />
                          </div>
                        }
                      </td>
                    </tr>
                  )))}
                </tbody>
              </Table>
            </div>
          
      </Wrapper>
    </>
  );
};

export default ManageUser;
