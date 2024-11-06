'use client'

import Navbar from '@/components/Navbar';
import Title from '@/components/Title';

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
      <Title text="My Projects" />
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center p-2">
                <p>PixelByte</p>
                <p>Information about Project 1 goes here.</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
                <p>Project 2</p>
                <p>Information about Project 2 goes here.</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
                <p>Project 3</p>
                <p>Information about Project 3 goes here.</p>
            </div>
        </div>
      </div>
    </div>
  );
}