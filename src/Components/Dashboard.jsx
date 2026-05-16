import Sidebar from "./Sidebar.jsx";
import { Outlet } from "react-router-dom";
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="d-flex flex-column flex-lg-row">
      <Sidebar />
      <div className="flex-grow-1 p-3 p-md-4">
        <Outlet />
      </div>
    </div>
  );
}