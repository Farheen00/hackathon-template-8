import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h2 className="text-[22px] font-medium pl-3 mb-6">Bag</h2>

          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-center md:justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-24 h-24 bg-orange-200 rounded">
                <Image
                  src="/product3.png"
                  alt="Library Stool Chair"
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-[16px] font-normal text-[#272343] mb-3">
                  Library Stool Chair
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex flex-wrap space-x-4 md:space-x-12">
                  <p className="text-[15px] font-normal text-[#757575]">
                    Size: L
                  </p>
                  <p className="text-[15px] font-normal text-[#757575]">
                    Quantity: 1
                  </p>
                </div>
                <div className="flex gap-3 mt-3">
                  <CiHeart />
                  <RiDeleteBin6Line />
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full md:w-auto gap-3">
              <p className="text-[16px] font-normal text-[#111111]">MRP: </p>
              <p className="text-[16px] font-normal text-[#111111]">$99</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row items-center md:justify-between bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-24 h-24 bg-gray-300 rounded">
                <Image
                  src="/product5.png"
                  alt="Library Stool Chair"
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-[16px] font-normal text-[#272343] mb-3">
                  Library Stool Chair
                </h3>
                <p className="text-[15px] font-normal text-[#757575] mb-1">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex flex-wrap space-x-4 md:space-x-12">
                  <p className="text-[15px] font-normal text-[#757575]">
                    Size: L
                  </p>
                  <p className="text-[15px] font-normal text-[#757575]">
                    Quantity: 1
                  </p>
                </div>
                <div className="flex gap-3 mt-3">
                  <CiHeart />
                  <RiDeleteBin6Line />
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full md:w-auto gap-3">
              <p className="text-[16px] font-normal text-[#111111]">MRP: </p>
              <p className="text-[16px] font-normal text-[#111111]">$99</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div>
          <h2 className="text-xl font-bold mb-6 ml-4">Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <p className="">Subtotal</p>
              <p className="font-semibold">$198.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="">Estimated Delivery & Handling</p>
              <p className="font-semibold">Free</p>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between mb-6">
              <p className="font-bold">Total</p>
              <p className="font-bold">$198.00</p>
            </div>
            <button className="bg-blue-500 text-white w-full py-2 rounded-[30px] hover:bg-blue-600 transition">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
