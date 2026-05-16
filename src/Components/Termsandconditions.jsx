import "./Termsandconditions.css";
export default function Termsandconditions() {
    return (
    <>
        <section className="terms container py-5">
            <div className="header pb-5">
                <h2>Terms and conditions</h2>
            </div>
            <div className="terms-content">
                <h3>Introduction & Acceptance</h3>
                <p>By accessing or using the Smart Parking System (“System”, “Service”, “We”, “Us”, or “Our”), you (“User”, “You”, “Your”) agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using the system.</p>
            </div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Purpose of the Service
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>The Smart Parking System is designed to enhance the overall parking experience by reducing congestion, saving time, and optimizing the use of available parking spaces.</p>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        User Responsibilities
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Users must:</p>
                        <p>1-Provide accurate and up-to-date information during registration and use.</p>
                        <p>2-Maintain the confidentiality of their login credentials.</p>
                        <p>3-Follow all parking rules and regulations displayed in the parking area.</p>
                        <p>4-Any misuse of the system or violation of these terms may result in suspension or termination of access.</p>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Parking Reservations
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>1-Reservations (if applicable) are valid only for the selected date and time.</p>
                        <p>2-The system does not guarantee space availability if the user arrives outside the reserved period.</p>
                        <p>3-All payments are final and non-refundable except in cases of system errors.</p>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Data Collection & Privacy
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>To improve service quality, the system may collect user details, vehicle information, and parking history. All data is handled according to our Privacy Policy and will not be shared with third parties without consent unless required by law.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}