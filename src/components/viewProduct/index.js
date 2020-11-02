

import React, { useEffect }  from "react";
import { connect } from "react-redux";

function Product({viewProduct}) {
    return (
        <section className="text-gray-700 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64  rounded" src={viewProduct.viewProduct.image}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{viewProduct.viewProduct.brand}</h2>
                         <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{viewProduct.viewProduct.product}</h1>
                       
                        <p className="leading-relaxed">{viewProduct.viewProduct.discription}</p>

                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">Rs. {viewProduct.viewProduct.price}</span>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy</button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = state =>({
    viewProduct : state.viewProduct
})

export default connect(mapStateToProps,null)(Product);

