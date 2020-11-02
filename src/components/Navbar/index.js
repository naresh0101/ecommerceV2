import React, { Fragment } from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <Fragment>
            <header className="text-gray-700 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Shopping Cart</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
                    </nav>
                </div>
            </header>
        </Fragment>
    );
}

export default Navbar;



