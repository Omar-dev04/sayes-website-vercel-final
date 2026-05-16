import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <>
            <footer className="d-flex align-items-center ">
                <div className="container">
                    <div className="row ">
                        <div className="footer col-lg-3 col-md-3 col-sm-12 col-12">
                            <p className="footer-logo">
                                <img src={logo} alt="logo" />
                                <span className="text">Sayes <br />
                                    <span className="park">Park</span>
                                </span>
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <ul>
                                <li><NavLink to="about" className="nav-link1">About</NavLink></li>
                                <li><NavLink to="termsandconditions" className="nav-link1">Terms and conditions</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <ul>
                                <li><NavLink to="features" className="nav-link1">Features</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-0 col-0"></div>
                    </div>
                </div>
            </footer>
        </>
    );
}