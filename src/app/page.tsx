'use client'

import Navbar from '../components/Navbar';
import Title from '../components/Title';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
        <Title text="Leo Bähre" />
        <p>A Computer Science Student from The Netherlands</p>
      </div>
    </div>
  );
}