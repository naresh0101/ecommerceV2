

import React, { Component } from "react";
import Basket from "../../components/Basket";
import Checkout from "../../components/checkout";

class InCart extends Component {
    constructor() {
        super();

    }

    render() {

        return (
            <main className="flex-1 overflow-x-hidden overflow-y-auto  ">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                    Product
                            </th>
                                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                    Delete
                            </th>
                                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                  Rs.  MRP
                            </th>
                                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                  Rs.  Price
                            </th>

                                            </tr>
                                        </thead>
                                        <Basket />

                                    </table>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <Checkout />

                </div>
                
            </main>



        );
    }
}
export default InCart;

