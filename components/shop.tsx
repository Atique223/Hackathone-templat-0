import { Poppins } from "next/font/google";
import Image from "next/image";
import PaginationAndFeatures from "./shopComponent";
import Link from "next/link";


const poppins4 = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const poppins5 = Poppins({
  subsets: ["latin"],
  weight: "500",
});

function ShopPage() {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-60 bg-cover bg-center" style={{ backgroundImage: 'url("/images/bg-shop.png")' }}>
        <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center">
          <Image src="/images/logo.png" alt="logo" width={100} height={100} className="h-[77px] w-[77px]"/>
          <h1 className={`${poppins5.className} text-3xl text-black`}>Shop</h1>
          <p className={`${poppins4.className} text-sm text-black`}>
            Home &gt; Shop
          </p>
        </div>
      </div>

      {/* Toolbar Section */}
      <div className="max-w-[1240px] mx-auto px-4 py-4 flex flex-wrap justify-between items-center bg-[#fdf6f7] border-t border-b">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm">
            <span className="material-icons">filter_alt</span> Filter
          </button>
          <button className="flex items-center gap-2 text-sm">
            <span className="material-icons">view_module</span>
          </button>
        </div>

        {/* Center Section */}
        <div className={`${poppins4.className} text-sm text-black`}>
          Showing 1–16 of 32 results
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Items per page */}
          <label className={`${poppins4.className} text-sm text-black`}>
            Show
          </label>
          <select
            className="text-sm border px-2 py-1 rounded-md"
            defaultValue="16"
          >
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="48">48</option>
          </select>

          {/* Sorting */}
          <label className={`${poppins4.className} text-sm text-black`}>
            Short by
          </label>
          <select
            className="text-sm border px-2 py-1 rounded-md"
            defaultValue="Default"
          >
            <option value="Default">Default</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Newest">Newest</option>
          </select>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product Card */}
        {[
          {
            id: 1,
            name: "Trenton modular sofa_3",
            price: "Rs. 25,000.00",
            image: "/images/sofa_3.png", // Replace with actual image paths
          },
          {
            id: 2,
            name: "Granite dining table with dining chair",
            price: "Rs. 25,000.00",
            image: "/images/dining.png", // Replace with actual image paths
          },
          {
            id: 3,
            name: "Outdoor bar table and stool",
            price: "Rs. 25,000.00",
            image: "/images/bar.png", // Replace with actual image paths
          },
          {
            id: 4,
            name: "Plain console with teak mirror",
            price: "Rs. 25,000.00",
            image: "/images/teak.png", // Replace with actual image paths
          },
          {
            id: 5,
            name: "Grain Coffee table",
            price: "Rs. 15,000.00",
            image: "/images/Grain coffee table 1.png"
          },
          {
            id: 6,
            name: "Kent coffee table",
            price: "Rs. 225,000.00",
            image: "/images/Kent coffee table 1.png"
          },
          {
            id: 7,
            name: "Round coffee table_color 2",
            price: "Rs. 251,000.00",
            image: "/images/Round coffee table_color 2 1.png"
          },
          {
            id: 8,
            name: "Reclaimed teak coffee table",
            price: "Rs. 25,200.00",
            image: "/images/Reclaimed teak coffee table 1.png"
          },
          {
            id: 9,
            name: "Plain console_",
            price: "Rs. 258,200.00",
            image: "/images/Plain console_ 1.png"
          },
          {
            id: 10,
            name: "Reclaimed teak Sideboard",
            price: "Rs. 20,000.00",
            image: "/images/Reclaimed teak Sideboard 1.png"
          },
          {
            id: 11,
            name: "SJP_0825",
            price: "Rs. 200,000.00",
            image: "/images/SJP_0825  1.png"
          },
          {
            id: 12,
            name: "Bella chair and table",
            price: "Rs. 100,000.00",
            image: "/images/Bella chair and table 1.png"
          },
          {
            id: 13,
            name: "Granite square side table",
            price: "Rs. 258,800.00",
            image: "/images/Granite square side table 2.png"
          },
          {
            id: 14,
            name: "Asgaard sofa",
            price: "Rs. 250,000.00",
            image: "/images/Asgaard sofa 2.png"
          },
          {
            id: 15,
            name: "Maya sofa three seater",
            price: "Rs. 115,000.00",
            image: "/images/Maya sofa three seater 1.png"
          },
          {
            id: 16,
            name: "Outdoor sofa set",
            price: "Rs. 120,000.00",
            image: "/images/Outdoor sofa set 1.png"
          },
        ].map((product) => (
          <div
            key={product.id}
            className="w-[287px] h-[372px] mx-auto flex flex-col items-center text-center rounded-lg"
          >
            {/* Image Container */}
            <div className="w-[287px] h-[200px] overflow-hidden rounded-md">
              <Image
                src={product.image}
                alt={product.name}
                width={287}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Product Details */}
            <div className="grid grid-rows-2 gap-2 mt-4 w-full px-2">
              <h3 className="text-start text-[16px] font-medium"><Link href="/shop/product">{product.name}</Link></h3>
              <p className="text-start text-[16px] font-semibold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <PaginationAndFeatures/>

    </div>
  );
}

export default ShopPage;