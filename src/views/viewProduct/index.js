

import React, { Component } from "react";
import Product from "../../components/viewProduct";

class ViewProduct extends Component {
    constructor() {
        super();
    }
    
    render() {

        return (
            <main className="flex-1 overflow-x-hidden overflow-y-auto  ">
                <div className="container mx-auto px-6 py-8">
                    <Product />
                </div>
            </main>
        );
    }
}
export default ViewProduct;

