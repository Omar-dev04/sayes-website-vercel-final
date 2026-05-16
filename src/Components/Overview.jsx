import { apiUrl } from "../api.js";
import { useState, useEffect } from "react";
import StatsCards from "./StatsCards.jsx";
import ParkingChart from "./ParkingChart.jsx";
import VehiclePie from "./VehiclePie.jsx";
import RecentEvents from "./RecentEvents.jsx";
import RatingCard from "./RatingCard.jsx";
import "./Overview.css";

export default function Overview() {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchReservations = () => {
        fetch(apiUrl("/api/Reservations"), {
            headers: {
                "ngrok-skip-browser-warning": "true",
                "Content-Type": "application/json"
            }
        })
            .then(async res => {
                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(`Server returned ${res.status}: ${text.slice(0, 100)}...`);
                }
                const text = await res.text();
                try {
                    return JSON.parse(text);
                // eslint-disable-next-line no-unused-vars
                } catch (e) {
                    throw new Error(`Invalid JSON response: ${text.slice(0, 100)}...`);
                }
            })
            .then(data => {
                const sorted = data.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
                setReservations(sorted);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching reservations:", err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchReservations();
        const interval = setInterval(fetchReservations, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <StatsCards reservations={reservations} />
            <div className="row mt-4">
                <div className="col-12 col-lg-8 mb-3">
                    <div className="card shadow-sm p-3 cardsdash park h-100">
                        <h5 className="title">Parking Occupancy</h5>
                        <ParkingChart reservations={reservations} />
                    </div>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                    <div className="card shadow-sm p-3 cardsdash h-100">
                        <h5 className="title">Occupancy Types (waiting time)</h5>
                        <VehiclePie reservations={reservations} />
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card shadow-sm p-3 cardsdash h-100">
                        <h5 className="title">Recent Parking Events</h5>
                        <RecentEvents reservations={reservations} loading={loading} />
                    </div>
                </div>
            </div>
            <div className="row mt-4 justify-content-center">
                <div className="col-12 col-lg-4">
                    <div className="card shadow-sm p-3 cardsdash h-100">
                        <h5 className="title text-center">Application Rating</h5>
                        <RatingCard />
                    </div>
                </div>
            </div>
        </>
    );
}