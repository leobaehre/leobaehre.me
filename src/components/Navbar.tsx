'use client'

import React from "react"

import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Navbar:React.FC = () => {
    return (
        <nav className="absolute top-0 right-2 p-4">
        <div className="flex space-x-4">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <button onClick={() => window.open("https://www.github.com/leobaehre", "_blank")}>
            GitHub
            </button>
            <ThemeToggle />
        </div>
        </nav>
    )
};

export default Navbar;