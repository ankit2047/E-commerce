import React, { useState } from 'react'
import "./Registration.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState({
        name: "", email: "", phone: "", password: ""
    });

    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    };

    const Submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://e-commerce-qmhs.onrender.com/userRegistration", data);
            if (response.data) {
                alert("Data Submitted")
                setdata({ name: "", email: "", phone: "", password: "" })
                navigate("/login");

            } else {
                alert("Data not Submitted");
            }
        } catch (error) {
            alert("Server error");
            console.log(error)
        }
    }



    return (
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
            <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 duration-300">
                <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Registration Form</h2>
                <form>
                    
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            onChange={handleChange} value={data.name}
                        />
                    </div> 
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            onChange={handleChange} value={data.email}
                        />
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Phone:</label>
                        <input
                            type="number"
                            name="phone"
                            placeholder="Enter Your Number"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            onChange={handleChange} value={data.phone}
                        />
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Your Password"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            onChange={handleChange} value={data.password}
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

export default Registration