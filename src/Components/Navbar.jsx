import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const correctEmail = "admin@gmail.com";
    const correctPassword = "123";
    const handleLogin = (e) => {
        e.preventDefault();
        if (email === correctEmail && password === correctPassword) {
            setIsLoggedIn(true);
            setEmail("");
            setPassword("");
            setError("");
        } 
        else {
            setError("Wrong email or password");
        }
    };
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
            <div className="container">
                <NavLink className="navbar-brand leftnav" to="/"><img src={logo} alt="logo" /> Sayes</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/features" className="nav-link">Features</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/termsandconditions" className="nav-link">Terms & Conditions</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            {!isLoggedIn ? (
                                <>
                                    <button className="nav-link dropdown-toggle btn btn-link admin-btn me-5" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        Admin
                                    </button>
                                    <ul className="dropdown-menu px-3 py-4">
                                        <form onSubmit={handleLogin} onClick={(e) => e.stopPropagation()}>
                                            <div className="mb-2">
                                                <input type="email" className="form-control" value={email}onChange={(e) => setEmail(e.target.value)} required placeholder="Email"/>
                                            </div>
                                            <div className="mb-4 position-relative">
                                                <input type={showPassword ? "text" : "password"} className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password"/>
                                                <span className="position-absolute top-50 end-0 translate-middle-y me-3 password-toggle" style={{ cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); togglePassword();}}>
                                                    <i className={showPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i>
                                                </span>
                                                <div style={{ height: "20px" }}>
                                                    {error && <p style={{ color: "red", margin: "0" ,fontSize:"15px"}}>{error}</p>}
                                                </div>
                                            </div>
                                            <button type="submit" className="btn w-100">Login</button>
                                        </form>
                                    </ul>
                                </>
                            ) : (
                                <NavLink to="/dashboard/overview" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Dashboard</NavLink>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}