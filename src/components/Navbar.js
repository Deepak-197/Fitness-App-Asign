import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from "../assets/fitness-logo.jpg"
import profile from "../assets/images.png"

export const Navbar = ({onSearch}) => {
    const [search, setSearch] = useState("");


    useEffect(() => {
       onSearch(search)
    }, [onSearch, search])

    console.log(search)

    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Logo" width={40} />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search Fitness Video" value={search} onChange={(e) => setSearch(e.target.value)} />
                   
                </div>
                <div className="profile">
                    <img src={profile} alt="Profile" />
                </div>
            </nav>
        </div>
    )
}
