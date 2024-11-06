'use client'

import React from "react"

import ThemeToggle from "./ThemeToggle";

const Navbar:React.FC = () => {
    return (
        <nav className="absolute top-0 right-2 p-4">
        <div className="flex space-x-4">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <button onClick={() => window.open("https://www.github.com/leobaehre", "_blank")}>
            GitHub
            </button>
            <ThemeToggle />
        </div>
        </nav>
    )
};

export default Navbar;