import React, { Fragment } from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <Fragment>
            <header className="text-gray-700 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-orange-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Shopping Cart</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        {/* <Link to="/" className="mr-5 hover:text-gray-900">Shop</Link> */}
                        {/* <Link to="/seller-signup" className="mr-5 hover:text-gray-900">Seller Login </Link> */}
                        <Link to="/login" className="mr-5 hover:text-gray-900">Customer Login</Link>
                    </nav>
                </div>
            </header>
        </Fragment>
    );
}

export default Navbar;


