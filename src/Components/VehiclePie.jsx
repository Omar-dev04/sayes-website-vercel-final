import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
Chart.register(ArcElement, Tooltip);

export default function VehiclePie({ reservations = [] }) {
    let lessThan2 = 0;
    let between2And3 = 0;
    let moreThan3 = 0;
    reservations.forEach(r => {
        const start = new Date(r.startTime);
        const end = r.status.toLowerCase() === "active" ? new Date() : new Date(r.endTime);
        const diffMs = end - start;
        const diffHours = diffMs / (1000 * 60 * 60);
        if (diffHours < 2) lessThan2++;
        else if (diffHours <= 3) between2And3++;
        else moreThan3++;
    });
    const data = {
        labels: ["More than 3 hours", "2-3 hours", "less than 2 hours"],
        datasets: [{
            data: [moreThan3, between2And3, lessThan2],
            backgroundColor: ["#DFB91B", "#506C9C", "#163960"],
        },
        ],
    };
    return <Pie data={data} />;
}