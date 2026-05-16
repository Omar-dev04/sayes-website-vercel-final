import RatingCard from './RatingCard'
import "./Overview.css";
import "./RatingCard.css";

export default function RatingCardPage() {
    return (
    <>
        <div className="row rating">
            <div className="col-12 col-lg-4">
                <div className="card shadow-sm p-3 cardsdash h-100">
                    <h5 className="title text-center">Application Rating</h5>
                    <RatingCard />
                </div>
            </div>
        </div>
    </>
    )
}