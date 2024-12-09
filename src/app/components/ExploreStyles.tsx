import Image from "next/image";

export default function ExploreStyles() {
  return (
    <div className="flex flex-wrap px-4 sm:px-8 md:px-44 -mx-2 mt-12">
      
      {/* First Div with Main Image */}
      <div className="w-full md:w-1/2 p-2 flex flex-row justify-center items-center">
        <div className="w-full h-full relative">
          <Image
            src="/product3.png"
            alt="Main Image"
            width={400}
            height={560}
            className="object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Second Div with Grid of Images */}
      <div className="w-full md:w-1/2 p-2 grid grid-cols-2 gap-2">
        {/* 4 Images */}
        <div className="relative">
          <Image
            src="/product4.png"
            alt="Image 1"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/product2.png"
            alt="Image 2"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/product10.png"
            alt="Image 3"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/product2.png"
            alt="Image 4"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
