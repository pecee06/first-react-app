"use client"
import React from 'react';

function footer() {
    return(
        <footer>
            <div className="company-detail">
                <h2>Brand Name</h2>
                <div className="social">
                    <a href="#">facebook</a>
                    <a href="#">instagram</a>
                    <a href="#">linkedin</a>
                </div>
                <div className="copy">
                    <p>All Rights Reserved</p>
                    <p>&copy; 2023</p>
                </div>
            </div>
            <div className="links">
                <div className="left">
                    <ul>
                        <li>one</li>
                        <li>two</li>
                        <li>three</li>
                        <li>four</li>
                        <li>five</li>
                        <li>six</li>
                        <li>seven</li>
                    </ul>
                </div>
                <div className="right">
                <ul>
                        <li>eight</li>
                        <li>nine</li>
                        <li>ten</li>
                        <li>eleven</li>
                        <li>twelve</li>
                        <li>thriteen</li>
                        <li>fourteen</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default footer;