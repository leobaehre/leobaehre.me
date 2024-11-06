'use client'

import Navbar from '@/components/Navbar';
import Title from '@/components/Title';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
        <Title text="About me" />
        <p>Information about Leo Bähre goes here.</p>
      </div>
    </div>
  );
}