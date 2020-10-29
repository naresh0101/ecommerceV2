import React from 'react'

function Appbar() {

    return (
      <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-orange-600">
      <div className="flex items-center">
          <button className="text-gray-500 focus:outline-none lg:hidden">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"></path>
              </svg>
          </button>
      </div>
  
      <div className="flex items-center">

          <div x-data="{ dropdownOpen: false }" className="relative">
              <button 
                  className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none ">
                  <img className="h-full w-full object-cover cursor-pointer"
                      src="https://avatars2.githubusercontent.com/u/39561340?s=400&v=4"
                      alt="Your avatar" />
              </button>
  
              <div x-show="dropdownOpen"  className="fixed inset-0 h-full w-full z-10"
                  style={{display: "none"}}></div>
  
              <div x-show="dropdownOpen"
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10"
                  style={{display: "block"}}>
                  <a href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-600 hover:text-white">Profile</a>
                  <a href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-600 hover:text-white">Products</a>
                  <a href="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-600 hover:text-white">Logout</a>
              </div>
          </div>
      </div>
  </header>

    );
}


export default Appbar;
