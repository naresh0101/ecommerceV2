import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchProductForm from '../SearchProduct';


function Appbar({basketProps}) {
   let logout =()=>{
       localStorage.clear()
   }
    return (
      <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
      <div className="flex items-center">
          <button className="text-gray-500 focus:outline-none lg:hidden">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"></path>
              </svg>
          </button>
      </div>
        <SearchProductForm/>
      <div className="flex items-center">
            <Link to="mycart" 
                  className="relative block h-10 w-10 rounded-full overflow-hidden focus:outline-none">
                    <svg className="h-8 w-8 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path fill="none" d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                    <path fill="none" d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                    <path fill="none" d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                </svg>
              </Link>
            <span style={{marginTop:"-30px",marginLeft:"-20px"}} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-700 text-white mr-4">
                {basketProps.basketNumber}
            </span>

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
                  <Link to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</Link>
                  <Link to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Products</Link>
                  <Link to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white" onClick={logout}>Logout</Link>
              </div>
          </div>
      </div>
  </header>

    );
}
const mapStateToProps = state =>({
   basketProps : state.basketState
})
export default connect(mapStateToProps)(Appbar);
