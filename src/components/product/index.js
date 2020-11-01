

import React, { Fragment, useEffect, useState } from "react";
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
        <Fragment>
          {productlist?.map((Product, index) => {
            return(
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow" key={index}>
                   <div>
                    <p className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Product.image}/>
                    </p>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{Product.Product}</h3>
                        <h2 className="text-gray-900 ">{Product.discription}</h2>
                        <p className="mt-1 text-red-700">MRP Rs. <del>{Product.mrp}</del></p>
                        <p className="mt-1 text-green-700">Price Rs. {Product.price}</p>
                    </div>
                   </div>
                    <button className="h-12 mt-4 w-full text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded" onClick={ ()=> props.addBasket(Product) } >Add to cart</button>
                </div>
                )
            })}
        </Fragment>

    );
}

export default connect(null,{addBasket})(ProductCard);
