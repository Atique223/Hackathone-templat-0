interface Category {
    name: string;
    count: number;
  }
  
  import React from 'react';
  import Image from 'next/image';
  
  const Blog = () => {
    const Categories: Category[] = [
      { name: "Crafts", count: 2 },
      { name: "Design", count: 8 },
      { name: "Handmade", count: 7 },
      { name: "Interior", count: 1 },
      { name: "Wood", count: 6 },
    ];
    return (
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg">
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3 ">
            {/* Sidebar - start */}
            <div className="space-y-10 lg:col-span-1 lg:absolute lg:right-20">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-72 px-4 py-2 border rounded-md focus:outline-none"
                />
                <span className="absolute right-3 top-2 text-gray-500">🔍</span>
              </div>
              {/* Categories */}
              <div>
                <h2 className="text-lg font-semibold mb-5">Categories</h2>
                <ul className="space-y-8">
                  {Categories.map((category, index) => (
                    <li key={index} className="flex justify-between text-gray-600">
                      <span>{category.name}</span>
                      <span>{category.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Recent Posts */}
              <h2 className="text-lg font-semibold">Recent Post</h2>
              <ul className=" space-y-10">
                <Image src="/images/Group 178.png" alt="Rectangle" className="" width={200} height={200} />  
                
                <Image src="/images/Group 179.png" alt="Rectangle" className="" width={220} height={200} />
                <Image src="/images/Group 180.png" alt="Rectangle" className="" width={220} height={200} />
                <Image src="/images/Group 181.png" alt="Rectangle" className="" width={220} height={200} />
                <Image src="/images/Group 182.png" alt="Rectangle" className="" width={220} height={200} />
              </ul>
            </div>
            {/* Sidebar - end */}
  
  
            {/* Articles - start */}
            <div className="lg:col-span-2 space-y-8">
              <Article
                imageSrc="/images/Rectangle 68.png"
                title="Going all-in with millennial design"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
              />
              <Article
                imageSrc="/images/Rectangle 69.png"
                title="Exploring new ways of decorating"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
              />
              <Article
                imageSrc="/images/Rectangle 70.png"
                title="Handmade pieces that took time to make"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
              />
            </div>
            {/* Articles - end */}
          </div>
  
          {/* Pagination */}
          <div className="flex justify-center bg-white mt-8">
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-yellow-100 text-black rounded-md">1</button>
              <button className="px-4 py-2 bg-yellow-50 text-black rounded-md">2</button>
              <button className="px-4 py-2 bg-yellow-50 text-black rounded-md">3</button>
              <button className="px-4 py-2 bg-yellow-50 text-black rounded-md">Next</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  interface ArticleProps {
    /**
     * The source URL of the article's image.
     */
    imageSrc: string;
    /**
     * The title of the article.
     */
    title: string;
    /**
     * The description of the article.
     */
    description: string;
  }
  
  const Article = React.memo(({ imageSrc, title, description }: ArticleProps) => (
    <div className="rounded-lg flex flex-col justify-center text-black text-lg">
      <div>
        <Image src={imageSrc} alt={title} className="" width={800} height={500} />
      </div>
      <div className="px-4 mt-4">
        <Image src="/images/Group 172.png" alt="group" width={349} height={24} className="px-4 mt-4" />
      </div>
      <div className="px-4 text-3xl mt-4 h-[70px] font-semibold">
        <h3>{title}</h3>
      </div>
      <p className="text-[#9F9F9F] px-4">{description}</p>
      <div className="flex justify-between items-center underline sm:underline-offset-8 mt-8 px-4">
        <p>Read more</p>
      </div>
    </div>
  ));
  
  export default Blog;