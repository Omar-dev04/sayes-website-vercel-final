import { useState } from "react";
import "./RecentEvents.css";

export default function RecentEvents({ reservations, loading }) {
    const [showAll, setShowAll] = useState(false);
    const formatAdjustedTime = (dateString) => {
        const date = new Date(dateString);
        date.setHours(date.getHours() + 2);
        return date.toLocaleString();
    };
    if (loading) {
        return <p>Loading...</p>;
    }
    const displayedReservations = showAll ? reservations : reservations.slice(0, 10);
    return (
        <div className="table-responsive">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Slot</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedReservations.map((r) => {
                        const isActive = r.status.toLowerCase() === "active" || r.status.toLowerCase() === "reserved";
                        const isCompleted = r.status.toLowerCase() === "completed" || r.status.toLowerCase() === "expired";
                        const isPendingPayment = r.status.toLowerCase() === "pendingpayment" || r.status.toLowerCase() === "pending";
                        const rowClass = isActive ? "entry-row" : (isCompleted ? "exit-row" : (isPendingPayment ? "pending-row" : "default-row"));
                        const badgeClass = isActive ? "entry-badge" : (isCompleted ? "exit-badge" : (isPendingPayment ? "pending-badge" : "default-badge"));
                        return (
                            <tr key={r.reservationId} className={rowClass}>
                                <td>{r.userId}</td>
                                <td>{r.slotId}</td>
                                <td>{formatAdjustedTime(r.startTime)}</td>
                                <td>
                                    {r.endTime === "0001-01-01T00:00:00"
                                        ? "In Progress"
                                        : formatAdjustedTime(r.endTime)
                                    }
                                </td>
                                <td>
                                    <span className={`badge ${badgeClass} `}>
                                        {r.status}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {reservations.length > 10 && (
                <div className="text-center mt-3">
                    <button
                        className=" btn-custom"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}
        </div>
    );
}