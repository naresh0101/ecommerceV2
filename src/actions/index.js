

import React, { Fragment } from "react";

function SellProductForm() {
    return (
        <Fragment>
         <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
            <input className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-orange-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0" placeholder="Search for product " type="text" />
        </div>
        </Fragment>
    );
}

export default SellProductForm;
