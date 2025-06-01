import React from 'react';
import { SidebarTrigger } from '../ui/sidebar';

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-gray-100 flex items-center justify-center shadow-md relative">
      <SidebarTrigger className="absolute left-0" />
      <h1 className="text-2xl font-bold text-black">AdminPanel</h1>
    </div>
  );
};


export default Navbar;
