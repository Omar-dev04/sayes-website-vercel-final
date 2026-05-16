import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="d-lg-none text-start p-2">
        <button className="btn" onClick={() => setOpen(!open)}>☰</button>
      </div>
      <div className={`sidebar d-flex flex-column p-3 shadow-sm ${open ? "open" : ""}`}>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/dashboard/overview" className="nav-link">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/parking-occupancy" className="nav-link">Parking Occupancy</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/vehicle-types" className="nav-link">Occupancy Types</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/recent-events" className="nav-link">Recent Parking Events</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/rating-Card" className="nav-link">Application Rating</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}