import "./Features.css";

export default function Features() {
    return (
    <>
        <section className="features py-5 d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="header pb-5">
                    <h2>Features</h2>
                </div>
                <div className="row justify-content-center g-5 pb-5">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card border-0 ">
                            <div className="card-body features-item">
                                <p className="icon-features">
                                    <i className="fa-regular fa-compass"></i>
                                </p>
                                <h5 className="card-title">Real-Time Slot Availability</h5>
                                <p className="card-text">Know exactly where parking spaces are available around you — no more driving in circles.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card border-0 ">
                            <div className="card-body features-item">
                                <p className="icon-features"><i className="fa-solid fa-location-dot"></i></p>
                                <h5 className="card-title">Reserve Your Slot</h5>
                                <p className="card-text">Book your parking space before you arrive and keep it ready just for you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card border-0 ">
                            <div className="card-body features-item">
                                <p className="icon-features"><i className="fa-regular fa-map"></i></p>
                                <h5 className="card-title">Smart Navigation</h5>
                                <p className="card-text"> Get guided directions straight to your parking slot with smooth in-app navigation.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center g-5 pb-5">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card border-0 ">
                            <div className="card-body features-item">
                                <p className="icon-features"><i className="fa-solid fa-lock"></i></p>
                                <h5 className="card-title">Easy & Secure Payments</h5>
                                <p className="card-text"> Pay instantly with your preferred method (cards / wallet /Apple Pay / Google Pay) — no cash needed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card border-0 ">
                            <div className="card-body features-item">
                                <p className="icon-features"><i className="fa-regular fa-clock"></i></p>
                                <h5 className="card-title">Track Your Parking Time</h5>
                                <p className="card-text"> See how long you’ve parked and get alerts before your time runs out.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card border-0 ">
                            <div className="card-body features-item">
                                <p className="icon-features"><i className="fa-solid fa-heart"></i></p>
                                <h5 className="card-title">Save Favorite Locations</h5>
                                <p className="card-text"> Quick access to your commonly used parking slots.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}