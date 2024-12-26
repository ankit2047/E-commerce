import React from 'react'
import code from "../../assetes/code.jpg"
import laptop from "../../assetes/Laptop.jpg"
import laptop1 from "../../assetes/laptop1.jpg"
import mobile from "../../assetes/mobile.jpg"
import dress from "../../assetes/blazer1.jpg"
import dress1 from "../../assetes/blazer2.jpg"
import dress2 from "../../assetes/shirt.jpg"
import dress3 from "../../assetes/tshirt.jpg"
import product from "../../assetes/market.jpg"


const Home = () => {
  return (
    <div class="min-h-screen flex flex-col bg-gray-100">
      <section class="bg-blue-500 text-white py-20">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div class="text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Discover Amazing Products</h1>
            <p class="mb-6 text-lg">Shop the latest trends and find something perfect for you.</p>
            <a href="#shop" class="bg-white text-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">Shop Now</a>
          </div>
          <img src={code} alt="Hero Image" class="mt-8 md:mt-0 w-full md:w-1/2 rounded" />
        </div>
      </section>


      <section class="py-12 bg-gray-100">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8">Featured Categories</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src={laptop} alt="Category" class="w-full h-64 object-cover rounded-t-lg" />
              <h3 class="text-lg font-medium">Laptop</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src={product} alt="Category" class="w-full h-64 object-cover rounded-t-lg" />
              <h3 class="text-lg font-medium">Product</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src={dress} alt="Category" class="w-full h-64 object-cover rounded-t-lg" />
              <h3 class="text-lg font-medium">Cloaths</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src={mobile} alt="Category" class="w-full h-64 object-cover rounded-t-lg" />
              <h3 class="text-lg font-medium">Accessories</h3>
            </div>
          </div>
        </div>
      </section>


      <section class="py-12">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8">Top Products</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div class="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img src={laptop1} alt="Product" class="w-full h-64 object-cover rounded-t-lg" />
              <div class="p-4">
                <h3 class="text-lg font-bold">Product Name</h3>
                <p class="text-gray-500">$49.99</p>
                <button class="mt-4 bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img src={dress1} alt="Product" class="w-full h-64 object-cover rounded-t-lg" />
              <div class="p-4">
                <h3 class="text-lg font-bold">Product Name</h3>
                <p class="text-gray-500">$49.99</p>
                <button class="mt-4 bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img src={dress2} alt="Product" class="w-full h-64 object-cover rounded-t-lg" />
              <div class="p-4">
                <h3 class="text-lg font-bold">Product Name</h3>
                <p class="text-gray-500">$49.99</p>
                <button class="mt-4 bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img src={dress3} alt="Product" class="w-full h-64 object-cover rounded-t-lg" />
              <div class="p-4">
                <h3 class="text-lg font-bold">Product Name</h3>
                <p class="text-gray-500">$49.99</p>
                <button class="mt-4 bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto text-center">
          <p>&copy; 2024 @Ankit. All rights reserved.</p>
        </div>
      </footer>
    </div>

  )
}

export default Home