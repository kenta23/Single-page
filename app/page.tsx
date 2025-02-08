import Carousel from "@/components/carousel";
import Categories from "@/components/categories";
import Navbar from "@/components/navbar";
import Recommended from "@/components/recommended";
import TopSellingProducts from "@/components/top-selling";

export default function Home() {
  return (
    <div className="w-full h-auto min-h-screen"> 
     <Navbar />
      

       <div className="w-full py-2 mt-10">
         <div className='size-[500px] absolute top-16 right-0 blur-[290px] bg-[#8deead] rounded-full'/>
           <Carousel />
           <Categories />
           <TopSellingProducts />
           <Recommended />
       </div>

     

    </div>
  );
}
