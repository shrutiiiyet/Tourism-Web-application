import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-blue-900 text-white shadow-md">
      
      <div className="flex justify-between items-center px-6 py-3 border-b border-gray-700">
        <div className="text-2xl  font-sans font-semibold">Logo</div>
        <div className="space-x-6">
          <button className="hover:text-blue-400">SignIn</button>
          <button className="hover:text-blue-400">SignUp</button>
        </div>
      </div>

      {/* 2 Row */}
      <div className="flex justify-center font-serif space-x-45 py-2 text-lg font-medium border-b border-gray-700">

        <button className="hover:border-b-2 hover:border-blue-500">Explore</button>
        <button className="hover:border-b-2 hover:border-blue-500">Destinations</button>
        <button className="hover:border-b-2 hover:border-blue-500">Offers</button>
        <button className="hover:border-b-2 hover:border-blue-500">Find Travelmate</button>
      </div>
    </div>
  );
};

export default Navbar;
