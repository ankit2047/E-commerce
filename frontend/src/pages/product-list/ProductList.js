import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [data, setdata] = useState([])
  const getdata = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getAllProduct");
      if (response) {
        setdata(response.data);
      } else {
        alert("Data not found");
      }
    } catch (error) {
      alert("Server error occur");
      console.log(error);
    }
  }

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/deleteById/${id}`);

      if (response) {
        alert("Product data delete successfully");
        getdata();
      } else {
        alert("Product not deleted")
      }

    } catch (error) {
      alert("Server error occur");
      console.log(error);
    }
  }

  useEffect(() => {
    getdata();
  }, [])

  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-bold text-gray-800">Product List</h2>
          <Link to={"/add-product"}
            class="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition duration-300">
            Add Product
          </Link>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full table-auto border-collapse">
            <thead>
              <tr class="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">Product Name</th>
                <th class="py-3 px-6 text-left">Price</th>
                <th class="py-3 px-6 text-left">Description</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>

            <tbody class="text-gray-600 text-sm font-light">
              {
                data.map((product) => {
                  return (
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                      <td class="py-3 px-6 text-left">{product.name}</td>
                      <td class="py-3 px-6 text-left">{product.price}</td>
                      <td class="py-3 px-6 text-left">{product.description}</td>
                      <td class="py-3 px-6 text-center">
                        <Link to={`/edit-product/${product._id}`}
                          class="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-300 mr-2">
                          Edit
                        </Link>
                        <button onClick={() => deleteData(product._id)}
                          class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300">
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>


  )
}

export default ProductList