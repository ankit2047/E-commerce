import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Product.css";


const Product = () => {
    const [data, setdata] = useState([])
    const getdata = async () => {
        try {
            const response = await axios.get("https://e-commerce-qmhs.onrender.com/getAllProduct");
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

    useEffect(() => {
        getdata();
    }, [])
    return (
        <div className='product-container'>
            {
                data.map((product) => {
                    return (
                        <div class=" mx-auto flex-col md:flex-row flex flex-wrap  items-center p-4" >
                            <div class="w-full sm:w-70 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 m-1">

                                <div class="relative">
                                    <img
                                        src="https://via.placeholder.com/300"
                                        alt="Product Image"
                                        class="rounded-t-lg w-full h-64 object-cover"
                                    />
                                    <span
                                        class="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-lg">New</span>
                                </div>


                                <div class="p-4">
                                    <h3 class="text-lg font-semibold text-gray-800">{product.name}</h3>
                                    <p class="text-sm text-gray-500 my-2">{product.description}</p>
                                    <div class="flex items-center justify-between mt-4">
                                        <div class="text-lg font-bold text-blue-500">{product.price}</div>
                                        <button class="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Product