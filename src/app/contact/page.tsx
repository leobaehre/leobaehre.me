'use client'

import Navbar from '@/components/Navbar';
import Title from '@/components/Title';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
      <Title text="Contact Me" />
        <p>Feel free to contact me at lobaehre@gmail.com</p>
        </div>
    </div>
    );
};