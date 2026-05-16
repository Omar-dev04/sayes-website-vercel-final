import "./Home.css";
import app from "../assets/app.png";
import screen1 from "../assets/screen1.png";
import screen2 from "../assets/screen2.png";
import screen3 from "../assets/screen3.png";
import screen4 from "../assets/screen4.png";
import screen5 from "../assets/screen5.png";
import screen6 from "../assets/screen6.png";
import screen7 from "../assets/screen7.png";
import mobilehome from "../assets/mobilehome.png";
import mobilebooking from "../assets/mobilebooking.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import people from "../assets/people.png";

export default function Home() {
    return (
        <>
            <section className="home">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12 text-center mb-lg-0">
                            <div className="left-home">
                                <img src={app} alt="app" className="img-fluid home-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 d-flex justify-content-center">
                            <div className="right-home text-center w-100">
                                <p className="home-text">Parking just got a <br /> Simpler</p>
                                <a href="#" className="btnhome" target="_blank" rel="noreferrer">Download App</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="screens py-3">
                <div className="container">
                    <div className="screens-intro">
                        <h2>A closer look at our application</h2>
                    </div>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            {[screen1, screen2, screen3, screen4, screen5, screen6, screen7].map((_, i) => (
                                <button key={i} type="button" data-bs-target="#carouselExampleIndicators"data-bs-slide-to={i}className={i === 0 ? "active" : ""}aria-current={i === 0 ? "true" : undefined}aria-label={`Slide ${i + 1}`}></button>
                            ))}
                        </div>
                        <div className="carousel-inner">
                            {[screen1, screen2, screen3, screen4, screen5, screen6, screen7].map((img, i) => (
                                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                                    <div className="screen-content d-flex flex-column align-items-center">
                                        <img src={img} alt={`screen${i+1}`} className="img-fluid" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="solution">
                <div className="container">
                    <div className="row align-items-center">
                        <div className=" col-lg-6 col-md-6 col-12 mb-lg-0">
                            <div className="left-mobilehome w-100">
                                <h3>The solution to your <br />parking problems</h3>
                                <p>We understand that a parking space can be a challenge for <br />many. Our app addresses this problem with these three essential features</p>
                                <p id="text-icon"><i className="fa-regular fa-circle-check pe-3 icon-home"></i>Well-organized information</p>
                                <p id="text-icon"><i className="fa-regular fa-circle-check pe-3 icon-home"></i>Map integration</p>
                                <p id="text-icon"><i className="fa-regular fa-circle-check pe-3 icon-home"></i>Integratin with car sensors</p>
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-6 col-12 ">
                            <div className="right-mobilehome">
                                <img src={mobilehome} alt="mobilehome" className="img-fluid mobilehome-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="solution ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className=" col-lg-6 col-md-6 col-12 mb-4">
                            <div className="right-mobilehome">
                                <img src={mobilebooking} alt="mobilebooking" className="img-fluid mobilebooking-img" />
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-6 col-12 mb-lg-0">
                            <div className="left-mobilehome w-100">
                                <h3>The solution to your <br />parking problems</h3>
                                <p>We understand that a parking space can be a challenge for <br />many. Our app addresses this problem with these three essential features</p>
                                <p id="text-icon"><i className="fa-regular fa-circle-check pe-3 icon-home"></i>Well-organized information</p>
                                <p id="text-icon"><i className="fa-regular fa-circle-check pe-3 icon-home"></i>Map integration</p>
                                <p id="text-icon"><i className="fa-regular fa-circle-check pe-3 icon-home"></i>Integratin with car sensors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="advice">
                <div className="marquee">
                    <span >Don’t waste time book your parking spot now</span>
                    <span>Don’t waste time book your parking spot now</span>
                </div>
            </section>
            <section className="blog d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row justify-content-center g-5">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="card border-0 shadow-sm custom-card">
                                <img src={img1} className="card-img-top" alt="img" />
                                <div className="card-body">
                                    <h5 className="card-title underline-title underline-title1">Anti Thief</h5>
                                    <p className="card-text">IoT technology keeps your car protected. Our smart parking system ensures total safety and zero theft.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="card border-0 shadow-sm custom-card">
                                <img src={img2} className="card-img-top" alt="Spacious Parking Lot" />
                                <div className="card-body">
                                    <h5 className="card-title underline-title underline-title2">Spacious Parking Lot</h5>
                                    <p className="card-text">Our spacious parking lots are designed for comfort, safety, and easy access through smart technology.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="homefinal">
                <img src={people} alt="people" />
            </section>
        </>
    );
}