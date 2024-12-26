import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate=useNavigate();

  const [data, setdata]=useState({
    name:"",email:"",message:""
  });

  const handelChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  };

  const Submit=async(e)=>{
    e.preventDefault();
    
    try {
       const response=await axios.post("http://localhost:5000/contactUs",data);
       if (response.data) {
        alert("Contact informtion submitted");
        setdata({name:"",email:"",message:""})
        navigate("/");
       } else {
        alert("Contact information not submitted");
       }
    } catch (error) {
      alert("Server error Occur");
      console.log(error);
    }

  }

  return (
    <>
      <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 duration-300">
          <h2 class="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
          <form>

            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                onChange={handelChange} value={data.name}
              />
            </div>


            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                onChange={handelChange} value={data.email}
              />
            </div>


            <div class="mb-4">
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message:</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                onChange={handelChange} value={data.message}
              ></textarea>
            </div>


            <div class="mt-6">
              <button onClick={Submit}
                type="submit"
                class="w-full bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact