

import React, { Fragment } from 'react'
import { connect } from "react-redux";

function Basket({ basketProps }) {
    return (
        <Fragment>
            <section className="text-gray-700 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">

                    <div className="lg:w-1/2  lg:py-6 mb-6 lg:mb-0 float-right">
                        <div className="flex border-t border-gray-300 py-2">
                            <span className="text-gray-500">Actual Price ( MRP Price)</span>
                            <span className="ml-auto text-red-600">Rs. <del>{basketProps.TotalMrpprice}</del></span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-300 py-2">
                            <span className="text-gray-500">Total Amount</span>
                             <span className="ml-auto text-green-900">Rs. {basketProps.TotalBasketPice}</span>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">Rs. {basketProps.TotalBasketPice}</span>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">CheckOut</button>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    );
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});
export default connect(mapStateToProps)(Basket);


