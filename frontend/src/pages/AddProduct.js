import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate=useNavigate();

    const [data,setdata]=useState({
        name:"",price:"",description:""
    });

    const handelChange=(e)=>{
        setdata({...data,[e.target.name]: e.target.value})
    };

    const Submit=async(e)=>{
        e.preventDefault();
        
        try {
            const response=await axios.post(`https://e-commerce-qmhs.onrender.com/product`,data);
            if (response.data) {
                alert("Product Add Successfully.");
                setdata({name:"",price:"",description:""});
                navigate("/product-list")
            } else {
                alert("Product not added");
            }
        } catch (error) {
            alert("Server error occur");
            console.log(error);
        }
    }

    return (
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
            <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 duration-300">
                <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Add Product </h2>
                <form>

                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2"> Product Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Product Name"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            onChange={handelChange} value={data.name}
                        />
                    </div>

                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Product Price:</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter Your Price"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            onChange={handelChange} value={data.price}
                        />
                    </div>

                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Description:</label>
                        <textarea
                            type="text"
                            rows="3"
                            name="description"
                            placeholder="Enter Your Description"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            onChange={handelChange} value={data.description}
                        />
                    </div>

                    <div class="mt-6">
                        <button onClick={Submit}
                            type="submit"
                            class="w-full bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct