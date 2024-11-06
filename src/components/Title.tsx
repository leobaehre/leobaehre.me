'use client'

import React from 'react';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <p className="text-2xl p-2">{text}</p>
  );
};

export default Title;