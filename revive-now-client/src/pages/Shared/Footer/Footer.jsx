import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-gray-700">
            <div className="max-w-7xl md:mx-40 mx-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo & About */}
                <div>
                    <Link to={"/"}><h2 className="flex items-center gap-2 text-2xl font-bold text-emerald-600">
                        <span className="bg-emerald-600 p-2 rounded-full text-white">+</span>
                        Revive <span className="text-[#F7A582]">Now</span>
                    </h2></Link>
                    <p className="mt-4 text-sm leading-relaxed">
                        Revive Now is dedicated to providing quality healthcare services and
                        modern treatment solutions for everyone.
                    </p>
                    <Link
                        to="/appointment"
                        className="inline-block mt-5 border border-[#F7A582] text-[#F7A582] font-semibold px-4 py-2 rounded-md hover:bg-[#F7A582] hover:text-white transition"
                    >
                        Appointment
                    </Link>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/about" className="hover:text-emerald-600">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-emerald-600">Service</Link></li>
                        <li><Link to="/doctors" className="hover:text-emerald-600">Doctors</Link></li>
                        <li><Link to="/departments" className="hover:text-emerald-600">Departments</Link></li>
                        <li><Link to="/payment" className="hover:text-emerald-600">Online Payment</Link></li>
                        <li><Link to="/contact" className="hover:text-emerald-600">Contact Us</Link></li>
                        <li><Link to="/account" className="hover:text-emerald-600">My Account</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Revive Now Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/services/pediatric" className="hover:text-emerald-600">Pediatric Clinic</Link></li>
                        <li><Link to="/services/diagnosis" className="hover:text-emerald-600">Diagnosis Clinic</Link></li>
                        <li><Link to="/services/cardiac" className="hover:text-emerald-600">Cardiac Clinic</Link></li>
                        <li><Link to="/services/laboratory" className="hover:text-emerald-600">Laboratory Analysis</Link></li>
                        <li><Link to="/services/gynecology" className="hover:text-emerald-600">Gynecological Clinic</Link></li>
                        <li><Link to="/services/counseling" className="hover:text-emerald-600">Personal Counseling</Link></li>
                        <li><Link to="/services/dental" className="hover:text-emerald-600">Dental Clinic</Link></li>
                    </ul>
                </div>

                {/* Working Hours */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Monday - 10 am to 7 pm</li>
                        <li>Tuesday - 10 am to 7 pm</li>
                        <li>Wednesday - 10 am to 7 pm</li>
                        <li>Thursday - 10 am to 7 pm</li>
                        <li>Friday - 10 am to 7 pm</li>
                        <li>Saturday - 10 am to 7 pm</li>
                        <li>Sunday - 10 am to 7 pm</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="border-t py-4 text-center text-sm text-gray-500">
                Copyright © {new Date().getFullYear()} - All rights reserved by Revive Now
            </div>
        </footer>
    );
};

export default Footer;
