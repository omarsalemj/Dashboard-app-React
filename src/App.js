import { Route, Routes } from "react-router-dom";

import './components/Sidebar.css'
import Home from "./components/Home";
import AdminsList from "./components/AdminsList";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import UsersList from "./components/UsersList";
import UserInfo from "./components/UserInfo";
import ResetPass from "./components/ResetPass";
import AdminInfo from "./components/AdminInfo";
import ResetAdminPass from "./components/ResetAdminPass";
import AddAdmin from "./components/AddAdmin";
import PersonalityTest from "./components/PersonalityTest";
import AddQuestion from "./components/AddQuestion";
import EditQuestion from "./components/EditQuestion";
import Login from "./components/Login";


function App() {
  return (
    <> 
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="admins" element={<AdminsList/>}/>
            <Route path="admins/add" element={<AddAdmin/>}/>
            <Route path="admins/adminInfo/:adminID" element={<AdminInfo/>}/>
            <Route path="admins/resetAdminPass/:adminID" element={<ResetAdminPass/>}/>
            <Route path="tasks" element={<TasksList/>}/>
            <Route path="tasks/add" element={<AddTask/>}/>
            <Route path="tasks/edit/:taskID" element={<EditTask/>}/>
            <Route path="users" element={<UsersList/>}/>
            <Route path="users/userInfo/:userID" element={<UserInfo/>}/>
            <Route path="users/resetPass/:userID" element={<ResetPass/>}/>
            <Route path="personalityTest" element={<PersonalityTest/>}/>
            <Route path="personalityTest/add" element={<AddQuestion/>}/>
            <Route path="personalityTest/edit/:questionID" element={<EditQuestion/>}/>
          </Routes>
    </>
  );
}

export default App;
