/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import UserAccountPage from "./pages/UserAccountPage";
import ForgotPassword from "./pages/ForgotPassword";

import CalendarView from "./pages/Dashboard";

axios.defaults.baseURL = "https://student-dashboard-1-oz0y.onrender.com";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/useraccount" element={<UserAccountPage />} />

          <Route path="/calendar" element={<CalendarView />} />
        </Route>

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
