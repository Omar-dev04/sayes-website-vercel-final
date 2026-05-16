import { apiUrl } from "../api.js";
import { useEffect, useState } from "react";
import "./RatingCard.css";

export default function RatingCard() {
    const [rating, setRating] = useState(0);

    useEffect(() => {
        fetch(apiUrl("/api/Ratings/average"), {
            headers: {
                "ngrok-skip-browser-warning": "true",
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then(data => {
                setRating(data.averageRating || 0);
            })
            .catch(err => {
                console.error("Error fetching rating:", err);
                setRating(4.7);
            });
    }, []);

    return (
        <div className="p-3 text-center cardsdashboard">
            <div className="stars-outer">
                <div className="stars-inner" style={{ width: `${(rating / 5) * 100}%` }}></div>
            </div>
            <h2 className="mt-2 mb-0">{rating.toFixed(1)}<span className="fs-5 text-muted">/5</span></h2>
        </div>
    );
}