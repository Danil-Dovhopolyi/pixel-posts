'use client';

import React, { useEffect, useState } from 'react';

interface AvatarProps {
  name: string;
}

const getInitials = (name: string) => {
  const nameParts = name.split(' ');
  const initials = nameParts
    .map(part => part[0])
    .join('')
    .substring(0, 2);
  return initials.toUpperCase();
};

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Avatar = ({ name }: AvatarProps) => {
  const initials = getInitials(name);
  const [backgroundColor, setBackgroundColor] =
    useState<string>(generateRandomColor);

  useEffect(() => {
    setBackgroundColor(generateRandomColor());
  }, []);

  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
      style={{ backgroundColor }}
    >
      {initials}
    </div>
  );
};

export default Avatar;
