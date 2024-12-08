import Image from "next/image";

export default function Companylogo() {
  return (
    <div className="bg-white flex flex-wrap items-center justify-center sm:w-full md:w-[73%]  mx-auto ">
    <div className="flex flex-wrap items-center justify-center mt-20 ml-80 sm:ml-0 gap-10 ">
      <Image width={700} height={700} alt='logo1' src='/Logo1.png' className='h-20 w-20'/>
        <Image width={700} height={700} alt='logo1' src='/Logo2.png' className='h-20 w-20'/>
        <Image width={700} height={700} alt='logo1' src='/Logo3.png' className='h-20 w-20'/>
        <Image width={700} height={700} alt='logo1' src='/Logo4.png' className='h-20 w-20'/>
        <Image width={700} height={700} alt='logo1' src='/Logo5.png' className='h-20 w-20'/>
        <Image width={700} height={700} alt='logo1' src='/Logo6.png' className='h-20 w-20'/>
        <Image width={700} height={700} alt='logo1' src='/Logo7.png' className='h-20 w-20'/>
      </div>
    </div>
  );
};

