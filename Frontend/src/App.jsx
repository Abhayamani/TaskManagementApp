import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Pages/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import UserDashboard from "./components/Dashboard/UserDashboard"
import AddUser from "./components/Pages/AddUser";
import AddTask from './components/Pages/AddTask'
import { ChangePassword } from "./components/Pages/ChangePassword";
import TasksInfo from "./components/Pages/TasksInfo";
import { UserTask } from "./components/Pages/UserTask";
import Test from "./components/Pages/Test";
import './App.css';
import ManageUser from "./components/Pages/ManageUser";
import ManageTask from "./components/Pages/ManageTask";
import React from "react";
import PrivateRoutes from "./components/context/PrivateRoutes"
// import { ActionDialogBox } from "./components/Layout/ActionButton";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/admin/dashboard/:id" element={<AdminDashboard />} />
            <Route exact path="/admin/:id/adduser" element={<AddUser />} />
            <Route exact path="/admin/:id/manageuser" element={<ManageUser/> } />
            <Route exact path="/admin/:id/addtasks" element={<AddTask />} />
            <Route exact path="/admin/:id/managetasks" element={<ManageTask/> } />
            <Route exact path="/:currentUser/:id/settings/2fa" element={<ChangePassword />} />
            <Route exact path="/user/dashboard/:id" element={<UserDashboard/> } />
            <Route exact path="/user/:id/tasks" element={<UserTask />} />
            <Route exact path="/user/:id/tasks/:taskid" element={<TasksInfo />} />
            <Route exact path="/test" element={<Test />} />
          </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
