

import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import {addBasket} from "../../actions/addAction"
 

function ProductCard(props) {
    const [productlist, setProducts] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:5000/getproducts')
            .then(response => response.json())
            .then(data => setProducts(data));
    },[])
    return (
        <section className="text-gray-700 body-font">
            <div className="px-5 py-24 mx-auto ">
                <div className="flex flex-wrap-m-4">
                     {productlist?.map((Product, index) => {
                            return(
                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow" key={index}>
                                <div className="block relative h-70 rounded overflow-hidden">
                                    <div className="w-full h-14 m-2 flex justify-end mb-4">
                                        <button onClick={ ()=> props.addBasket(Product._id) } className="flex items-center mt-1 py-2 px-2 text-white shadow rounded-full mr-4 focus:outline-none">
                                            <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path fill="none" d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                                                <path fill="none" d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                                                <path fill="none" d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                                            </svg>
                                        </button>
                                        <button className="flex items-center mt-1 py-2 px-2 text-white shadow rounded-full mr-4 focus:outline-none hover:bg-red-700">
                                            <svg className="h-6 w-6 text-gray-700 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                    d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Product._id.image} />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{Product._id.brand}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{Product._id.product}</h2>
                                <div className="flex justify-between">
                                <del className="text-red-500">Rs. {Product._id.mrp}</del>
                                    <p className="mt-1 text-green-500">Rs. {Product._id.price}</p>
                            </div>
                        </div>
                    </div>
                )
                 })}
                </div>
            </div>
        </section>

    );
}

export default connect(null,{addBasket})(ProductCard);
