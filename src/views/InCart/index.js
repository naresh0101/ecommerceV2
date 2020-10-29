

import React, { Component } from "react";
import ProductInCartOrWishList from "../../components/cartOrWishList";

class InCart extends Component {
    constructor() {
        super();

    }


    render() {

        return (
            <main className="flex-1 overflow-x-hidden overflow-y-auto  ">
                <div className="container mx-auto px-6 py-8">
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead>
                                            <tr>
                                                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                    Product
                            </th>
                                                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                    Availability
                            </th>
                                                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                    location pin
                            </th>
                                                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                    MRP
                            </th>
                                                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                    Price
                            </th>
                                                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                    Delete
                            </th>

                                            </tr>
                                        </thead>
                                       <ProductInCartOrWishList />

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>



        );
    }
}
export default InCart;

