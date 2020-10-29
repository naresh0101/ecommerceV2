

import React from 'react'

function ProductInCartOrWishList() {

  return (
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-6 py-4 whitespace-no-wrap">
          <div class="flex items-center">
            <div class="flex-shrink-0 h-10 w-10">
              <img class="h-10 w-10 rounded-full" src="https://rukminim1.flixcart.com/image/660/792/jz30nm80/shoe/z/w/d/908988-019-8-nike-platinum-tint-black-electric-green-original-imafj6f5h9fckpgz.jpeg?q=50" alt="" />
            </div>
            <div class="ml-4">
              <div class="text-sm leading-5 font-medium text-gray-900">
                Nike shoes
              </div>
              <div class="text-sm leading-5 text-gray-500">
                By Nike
              </div>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap">
          <div class="text-sm leading-5 text-gray-900">In stock </div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap">
          <div class="text-sm leading-5 text-gray-900">201301 </div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
          <div class="text-sm leading-5 text-gray-900"><del className="text-gray-500">4500</del> </div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap">
          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            3000
          </span>
        </td>
       
        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
          <button>
            
          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
          <svg className="h-6 w-6 text-red-800">
							<path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
						</svg>
            Delete
          </span>
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default ProductInCartOrWishList;


