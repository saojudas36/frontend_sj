import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import UserService from "./service/UserService";
import MyProfile from "./layouts/myprofile";
import AboutMe from "./pages/AboutMe";
import MedicInfos from "./pages/MedicInfos";
import Layout from "./layouts/start";
import Register from "./pages/Register";
import Common from "./layouts/common";
import EmployeeList from "./pages/EmployeeList";
import CreateQuestion from "./pages/CreateQuestion";
function App() {
  const isAuthenticated = UserService.isAuthenticated();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {isAuthenticated ? (
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/my-profile" />} />
            <Route path="my-profile" element={<MyProfile />}>
              <Route index element={<AboutMe />} />
              <Route path="medic-infos" element={<MedicInfos />} />
            </Route>
            <Route path="management" element={<Common />}>
              <Route index element={<Navigate to="/management/register" />} />
              <Route path="register" element={<Register />} />
              <Route path="employee-list" element={<EmployeeList />} />
            </Route>
            <Route path="/create-question" element={<CreateQuestion/>} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
