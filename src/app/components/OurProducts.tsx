import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";


export default function OurProducts() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto pt-12">
               {/* Heading */}
          <h1 className="text-center text-2xl sm:text-3xl font-semibold font-[Inter] mb-6">
            Our Products
          </h1>
         

          {/* Product Grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Example of a Single Product */}
            {[
              { label: "New", price: "$20", img: "/product2.png", tagColor: "#01AD5A" },
              { label: "Sales", price: "$20", img: "/product1.png", tagColor: "#F5813F" },
              { price: "$20", img: "/product3.png" },
              { price: "$20", img: "/product4.png" },
              { label: "New", price: "$89", img: "/product5.png", tagColor: "#01AD5A" },
              { label: "Sales", price: "$77", img: "/product10.png", tagColor: "#F5813F" },
              { price: "$37", img: "/product11.png" },
              { price: "$200", img: "/product2.png" },
            ].map((product, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 hover:scale-105 transition-transform duration-150"
              >
                <div className="relative rounded-lg overflow-hidden shadow-md">
                  {product.label && (
                    <h1
                      className={`absolute top-2 left-2 text-white px-2 py-1 text-xs rounded-md`}
                      style={{ backgroundColor: product.tagColor }}
                    >
                      {product.label}
                    </h1>
                  )}
                  <FaRegHeart className="absolute top-2 right-2 text-black bg-white p-2 text-2xl rounded-md" />
                  <Image
                    src={product.img}
                    width={600}
                    height={600}
                    alt={`Product ${index + 1}`}
                    className=" w-full h-48"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-medium text-[#007580]">Library Stool Chair</h3>
                    <p className="mt-1 text-[#272343]">{product.price}</p>
                  </div>
                  <IoCartOutline className="text-[#272343] text-3xl bg-[#F0F2F3] rounded-md p-2 hover:bg-[#029FAE] hover:text-white cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
