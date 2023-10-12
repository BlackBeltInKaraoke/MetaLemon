import React from "react";
import logo from "../images/Logo .svg"
const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} />
                    <p>We are a family owned restaurant, focused on traditional recipes served with a modern twist. </p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contacts</h3>
                    <ul>
                        <li>Address: <br/> 69 Paradise Passage, Chicago IL</li>
                        <li>Phone: <br/> 01800 456 7890</li>
                        <li>Email: <br/> littlelemon@meta.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media</h3>
                    <ul>
                    <li><a href="/">Instagram</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">X</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
