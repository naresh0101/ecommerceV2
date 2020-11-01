

import React from "react";
import ProductCard from "../../components/product";
function product() {
      return(
        <main className="flex-1 overflow-x-hidden overflow-y-auto  ">
          <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <ProductCard/>
            </div>
            </div>
          </section>
        </main>
      )
}
export default product;

