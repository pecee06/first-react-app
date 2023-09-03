"use client"
import React from 'react';
import Link from 'next/link'

function header() {
    return(
        <nav>
            <div className="left">
                <h1>Logo</h1>
            </div>
            <div className="right">
                <ul>
                    <li><Link href="/" className='link-class'>Home</Link></li>
                    <li><Link href="/About" className='link-class'>About</Link></li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default header;