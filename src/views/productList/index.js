

import React, { Component } from "react";
import ProductCard from "../../components/product";

class product extends Component {
 constructor() {
   super();
  
 }

 
 render() { 
   
   return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto  ">
            <div className="container mx-auto px-6 py-8">
               <ProductCard/>
            </div>
        </main>

   );
}
}
export default product;

