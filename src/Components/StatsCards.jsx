import { apiUrl } from "../api.js";
import { useState, useEffect } from "react";
import "./StatsCards.css";

// eslint-disable-next-line react/prop-types
export default function StatsCards({ reservations = [] }) {
    const [revenue, setRevenue] = useState(0);

    useEffect(() => {
        fetch(apiUrl("/api/Payments"), {
            headers: {
                "ngrok-skip-browser-warning": "true",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                const today = new Date().toISOString().split('T')[0];
                const todayRevenue = data
                    .filter(p => p.createdAt.startsWith(today) && (p.status === "Paid" || p.status === "Completed") && p.paymentMethod !== "TopUp")
                    .reduce((sum, p) => sum + p.amount, 0);
                setRevenue(todayRevenue);
            })
            .catch(err => {
                console.error("Error fetching revenue:", err);
            });
    }, []);

    const occupiedCount = reservations.filter(r => r.status.toLowerCase() === "active").length;
    const totalSlots = 20;
    const availableCount = totalSlots - occupiedCount;

    const stats = [
        { title: "Total Slots", value: totalSlots, icon: "bi-grid-fill", color: "primary" },
        { title: "Occupied", value: occupiedCount, icon: "bi-car-front", color: "danger" },
        { title: "Available", value: availableCount < 0 ? 0 : availableCount, icon: "bi-check-circle", color: "success" },
        { title: "Revenue Today", value: `$${revenue.toFixed(2)}`, icon: "bi-cash-stack", color: "warning" }
    ];

    return (
        <div className="row">
            {stats.map((s) => (
                <div className="col-md-3 mb-3 statscards" key={s.title}>
                    <div className="card shadow-sm p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6>{s.title}</h6>
                                <h4 className="fw-bold">{s.value}</h4>
                            </div>
                            <i className={`bi ${s.icon} text-${s.color} fs-3`}></i>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}