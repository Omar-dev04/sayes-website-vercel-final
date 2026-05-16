import { apiUrl } from "../api.js";
import VehiclePie from "./VehiclePie";
import "./VehicleTypes.css";
import { useState, useEffect } from "react";

export default function VehicleTypes() {
    const [reservations, setReservations] = useState([]);
    const [, setLoading] = useState(true);

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
            <div className="card shadow-sm p-4 vehicle">
                <h5 className="vehicle-title">Occupancy Types (waiting time)</h5>
                <VehiclePie reservations={reservations} />
            </div>
        </>
    );
}