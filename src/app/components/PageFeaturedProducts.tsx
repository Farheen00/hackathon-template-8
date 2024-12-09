import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";

export default function PageFeaturedProducts() {
  return (
    <div className="w-full mx-auto px-5 sm:px-2">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto pt-12">
          <h1 className="text-left sm:ml-28 text-3xl md:text-2xl font-semibold font-[Inter] mb-10">
            Featured Products
          </h1>
          <div className="flex flex-wrap justify-center -m-4">
            {/* Product 1 */}
            <div className="lg:w-1/5 md:w-1/4 sm:w-1/2 w-full p-4 hover:scale-105 duration-200">
              <span className="block relative h-48 rounded overflow-hidden">
               
                <FaRegHeart className="absolute top-2 right-2 text-black bg-[#FFFFFF] p-1 sm:p-2 text-xl sm:text-2xl rounded-md" />
                <Image
                  src="/product11.png"
                  width={600}
                  height={600}
                  className=" object-center w-full h-full block"
                  alt="product1"
                />
              </span>
              <div className="mt-4 flex justify-between items-center font-[Inter]">
                <div>
                  <h3 className="text-[#007580] font-medium text-sm sm:text-base tracking-widest title-font mb-1">
                    Library Stool Chair
                  </h3>
                  <p className="mt-1 text-sm">$20</p>
                </div>
                <IoCartOutline className="text-[#272343] text-3xl sm:text-4xl bg-[#F0F2F3] rounded-md p-2 border-none hover:bg-[#029FAE] hover:text-white" />
              </div>
            </div>

            {/* Product 2 */}
            <div className="lg:w-1/5 md:w-1/4 sm:w-1/2 w-full p-4 hover:scale-105 duration-200">
              <span className="block relative h-48 rounded overflow-hidden">
              
                <Image
                  src="/product4.png"
                  width={600}
                  height={600}
                  className=" object-center w-full h-full block"
                  alt="product2"
                />
              </span>
              <div className="mt-4 flex justify-between items-center font-[Inter]">
                <div>
                  <h3 className="text-[#007580] font-medium text-sm sm:text-base tracking-widest title-font mb-1">
                    Library Stool Chair
                  </h3>
                  <p className="mt-1 text-sm">$20</p>
                </div>
                <IoCartOutline className="text-[#272343] text-3xl sm:text-4xl bg-[#F0F2F3] rounded-md p-2 border-none hover:bg-[#029FAE] hover:text-white" />
              </div>
            </div>

            {/* Product 3 */}
            <div className="lg:w-1/5 md:w-1/4 sm:w-1/2 w-full p-4 hover:scale-105 duration-200">
              <span className="block relative h-48 rounded overflow-hidden">
                <Image
                  src="/product7.png"
                  width={600}
                  height={600}
                  className=" object-center w-full h-full block"
                  alt="product3"
                />
              </span>
              <div className="mt-4 flex justify-between items-center font-[Inter]">
                <div>
                  <h3 className="text-[#007580] font-medium text-sm sm:text-base tracking-widest title-font mb-1">
                    Library Stool Chair
                  </h3>
                  <p className="mt-1 text-sm">$20</p>
                </div>
                <IoCartOutline className="text-[#272343] text-3xl sm:text-4xl bg-[#F0F2F3] rounded-md p-2 border-none hover:bg-[#029FAE] hover:text-white" />
              </div>
            </div>

            {/* Product 4 */}
            <div className="lg:w-1/5 md:w-1/4 sm:w-1/2 w-full p-4 hover:scale-105 duration-200">
              <span className="block relative h-48 rounded overflow-hidden">
                <Image
                  src="/product5.png"
                  width={600}
                  height={600}
                  className=" object-center w-full h-full block"
                  alt="product4"
                />
              </span>
              <div className="mt-4 flex justify-between items-center font-[Inter]">
                <div>
                  <h3 className="text-[#007580] font-medium text-sm sm:text-base tracking-widest title-font mb-1">
                    Library Stool Chair
                  </h3>
                  <p className="mt-1 text-sm">$20</p>
                </div>
                <IoCartOutline className="text-[#272343] text-3xl sm:text-4xl bg-[#F0F2F3] rounded-md p-2 border-none hover:bg-[#029FAE] hover:text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}