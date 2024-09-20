import React, { useState } from "react";
import "./start.css";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [sidebar, setSidebar] = useState(false);
  
  return (
    <div className="layout-container">
      <Navbar setSidebar={setSidebar} />
      <div className="main-content">
        <Sidebar show={sidebar} setSidebar={setSidebar} />
        <div className={`conteudo-paginas ${sidebar ? "shifted" : ""}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
