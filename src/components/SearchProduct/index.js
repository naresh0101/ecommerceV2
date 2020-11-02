

import React, { Fragment,useState } from "react";
import { connect } from 'react-redux';
import {searchProduct} from "../../actions/addAction"


function SearchProductForm(props) {
    let [product, setProduct] = useState({});

    let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        product[name] = value;
        setProduct(product);
    }
    let search = (e) => {
        e.preventDefault();
        if(product.product === undefined){
            alert("Please fill product or brand")
        }else{
            const payload = {
                method: 'POST',
                headers: new Headers({
                    "X-Api-Key": JSON.parse(localStorage.getItem("token")),   
                    'Content-Type': 'application/json' 
                   }),
                body: JSON.stringify(product)
            }
    
            fetch('http://localhost:5000/searchproducts', payload)
                .then(response => response.json())
                .then((data) => {
                 props.searchProduct(data)
            });
        }

    }
    return (
        <Fragment>
            <form onSubmit={search} className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
                <input onChange={handleChange} name="product" className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0" placeholder="Search for product or Type all for all " type="text" />
            </form>
        </Fragment>
    );
}

export default connect(null,{searchProduct})(SearchProductForm);
