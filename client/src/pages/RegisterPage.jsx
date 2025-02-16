

import { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState('');

  async function registerUser(ev) {
    ev.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(
        'https://student-dashboard-1-oz0y.onrender.com/auth/register',
        { name, email, password },
        { withCredentials: true }
      );
      alert('Registration successful');
      setRedirect(true);
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Registration failed');
    }
  }

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
     <>
         <Header />
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96">
        <h1 className="text-3xl font-bold text-center mb-6 text-primarydark">Sign Up</h1>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={registerUser}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primarydark"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primarydark"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primarydark"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(ev) => setConfirmPassword(ev.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primarydark"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-primarydark text-white rounded-lg hover:bg-primarydark/90 focus:outline-none focus:ring-2 focus:ring-primarydark"
          >
            Create Account
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/login" className="text-primarydark hover:underline">
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </div>
     <Footer />
     </>
  );
}

