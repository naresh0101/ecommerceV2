

import React, { Fragment, useEffect, useState } from "react";
import { connect } from 'react-redux';
import { addBasket } from "../../actions/addAction"


function SellProductForm() {


    return (
        <Fragment>
           <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
           <div className="max-w-md w-full">
           <img className="mx-auto h-12 w-auto" src="https://logodix.com/logo/1787735.png" alt="Workflow" />

          <form className="mt-8" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm">
              <div>
                <input aria-label="Email address" name="email" type="email" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue  focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
              </div>
              <div className="mt-2">
                <input aria-label="Password" name="password" type="password" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue  focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
              <a href="/signup" className="font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:underline transition ease-in-out duration-150" >
                Sign up
                </a>
              </div>

              <div className="text-sm leading-5">
                <a href="/forgot" className="font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:underline transition ease-in-out duration-150" >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="mt-6">
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition duration-150 ease-in-out">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-orange-500 group-hover:text-orange-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Login
              </button>
            </div>
          </form>
        </div>
    </div>
        </Fragment>
    );
}

export default SellProductForm;
