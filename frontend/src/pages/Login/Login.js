import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    email: "", password: ""
  });

  const handelChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  };

  const Submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", data);
      if (response.data) {
        alert("User Login")
        setdata({ email: "", password: "" })
        navigate("/");
      } else {
        alert("Not Login")
      }
    } catch (error) {
      alert("Server error occur");
      console.log(error);
    }
  }

  return (

    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 duration-300">
        <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
        <form>

          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={handelChange} value={data.email}
            />
          </div>


          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={handelChange} value={data.password}
            />
          </div>

          <div class="mt-6">
            <button onClick={Submit}
              type="submit"
              class="w-full bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              Login
            </button>
          </div>
        </form>

        <div class="mt-4 text-center">
          <p class="text-sm text-gray-500">
            Don't have an account?
            <Link to={"/registration"} class="text-blue-500 hover:underline">Sign Up</Link>
          </p>
          <p class="text-sm text-gray-500 mt-2">
            Forgot your password?
            <a href="#" class="text-blue-500 hover:underline">Reset Password</a>
          </p>
        </div>
      </div>
    </div>

  )
}

export default Login