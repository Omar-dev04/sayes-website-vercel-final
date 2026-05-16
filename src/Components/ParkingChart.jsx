import { Line } from "react-chartjs-2";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function ParkingChart({ reservations = [] }) {
    const labels = ["1 AM", "4 AM", "7 AM", "10 AM", "1 PM", "4 PM", "7 PM", "10 PM"];
    const checkHours = [1, 4, 7, 10, 13, 16, 19, 22];
    const dataPoints = checkHours.map(hour => {
        const count = reservations.filter(r => {
            const start = new Date(r.startTime).getHours();
            let end = r.status.toLowerCase() === "active" ? 24 : new Date(r.endTime).getHours();
            if (r.status.toLowerCase() !== "active" && new Date(r.endTime) < new Date(r.startTime)) {
                end = 24;
            }
            return start <= hour && end > hour;
        }).length;
        return count;
    });

    const data = {
        labels: labels,
        datasets: [{
            label: "Occupied",
            data: dataPoints,
            borderColor: "#506C9C",
            pointBackgroundColor: "#163960",
            pointBorderColor: "#163960",
            tension: 0.4
        },],
    };
    const options = {
        scales: {
            x: {
                ticks: {
                    color: "#506C9C",
                    font: { size: 14 }
                },
                grid: { color: "#163960" }
            },
            y: {
                ticks: {
                    color: "#506C9C",
                    font: { size: 14 }
                },
                grid: { color: "#163960" }
            }
        }
    };
    return <Line data={data} options={options} />;
}