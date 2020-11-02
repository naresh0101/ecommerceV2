

import React, { Fragment, useEffect, useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {addBasket,addViewProduct} from "../../actions/addAction"
// import {getSearchProduct} from "../../actions/getAction"

 

function ProductCard(props) {
    const [productlist, setProducts] = useState(null)
    const payload = {
        headers: new Headers({
          "X-Api-Key": JSON.parse(localStorage.getItem("token")),   
          'Content-Type': 'application/json' 
         })
        }
    
    useEffect(()=>{
        fetch('http://localhost:5000/getproducts',payload)
            .then(response => response.json())
            .then(data => setProducts(data));
    },[])
    if(props.products.searchedProducts.length >0){
       return (
            <Fragment>
            {props.products.searchedProducts?.map((Product, index) => {
            return(
                <Link  to="/viewproduct"  target="_blank" className="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow" key={index}>
                <div>
                     <button onClick={ ()=> props.addViewProduct(Product) }  className="block relative items-center h-48 rounded overflow-hidden">
                         <img alt="ecommerce"  className="mx-auto" src={Product.image}/>
                     </button>
                 <div className="mt-4">
                     <div className="flex justify-between">
                     <h3 className="text-gray-900  tracking-widest title-font mb-1">{Product.product}</h3>
                     <h3 className="text-gray-600 tracking-widest title-font mb-1">{Product.brand}</h3>

                     </div>
                     <h2 className="text-gray-500 truncate">{Product.discription}</h2>
                     <div className="flex justify-between">
                         <p className="mt-1 text-red-700">MRP Rs. <del>{Product.mrp}</del></p>
                         <p className="mt-1 text-green-700 float-right">Price Rs. {Product.price}</p>
                     </div>
                 </div>
                </div>
                 <button className="h-12 mt-4 w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={ ()=> props.addBasket(Product) } >Add to cart</button>
             </Link>
                )
            })}
        </Fragment>
       )
    }else{
        return (
            <Fragment>
            
              {productlist?.map((Product, index) => {
                return(
                    <Link  to="/viewproduct" className="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow" key={index}>
                       <div>
                            <button onClick={ ()=> props.addViewProduct(Product) }   className="block relative items-center h-48 rounded overflow-hidden">
                                <img alt="ecommerce"  className="mx-auto" src={Product.image}/>
                            </button>
                        <div className="mt-4">
                            <div className="flex justify-between">
                            <h3 className="text-gray-900  tracking-widest title-font mb-1">{Product.product}</h3>
                            <h3 className="text-gray-600 tracking-widest title-font mb-1">{Product.brand}</h3>

                            </div>
                            <h2 className="text-gray-500 truncate">{Product.discription}</h2>
                            <div className="flex justify-between">
                                <p className="mt-1 text-red-700">MRP Rs. <del>{Product.mrp}</del></p>
                                <p className="mt-1 text-green-700 float-right">Price Rs. {Product.price}</p>
                            </div>
                        </div>
                       </div>
                        <button className="h-12 mt-4 w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={ ()=> props.addBasket(Product) } >Add to cart</button>
                    </Link>
                    )
                })}
            </Fragment>
    
        );
    }
    
}
const mapStateToProps = state =>({
    products : state.productSearch
 })
export default connect(mapStateToProps,{addBasket,addViewProduct})(ProductCard);
