
import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const { setUser } = useContext(UserContext);

  // Login function
  async function loginUser(ev) {
    ev.preventDefault();
    
    try {
      // Send login credentials to the backend
      const response = await axios.post(
        'https://student-dashboard-1-oz0y.onrender.com/auth/login', // Adjust your backend endpoint if needed
        { email, password },
        { withCredentials: true }
      );

      // Store token in local storage
      localStorage.setItem('authToken', response.data.token);

      // Set user context
      setUser(response.data.user);

      // If rememberMe is checked, store email and password
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
        localStorage.setItem('rememberedPass', password);
      } else {
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberedPass');
      }

      // Redirect to homepage after login
      setRedirect(true);
    } catch (e) {
      // Handle errors, e.g., invalid credentials
      if (e.response && e.response.data && e.response.data.message) {
        setError(e.response.data.message);
      } else {
        setError('Error logging in. Please try again.');
      }
    }
  }

  // Redirect if logged in
  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <>

    <div className="flex w-full h-full lg:ml-24 px-10 py-10 justify-between place-items-center mt-20">
      <div className="bg-white w-full sm:w-full md:w-1/2 lg:w-1/3 px-7 py-7 rounded-xl justify-center align-middle">
        <form className="flex flex-col w-auto items-center" onSubmit={loginUser}>
          <h1 className="px-3 font-extrabold mb-5 text-primarydark text-2xl">Sign In</h1>

          {error && <div className="error-message">{error}</div>}

          <div className="input">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z" clipRule="evenodd" />
            </svg>
            <input
              type="email"
              placeholder="Email"
              className="input-et"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>

          <div className="input">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z" clipRule="evenodd" />
            </svg>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="input-et"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <div type="button" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                </svg>
              )}
            </div>
          </div>

          <div className="flex w-full h-full mt-4 justify-between px-1">
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe((prev) => !prev)}
              />
              Remember Me
            </div>
            <div>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
          </div>

          <div className="w-full py-4">
            <button type="submit" className="primary w-full">Sign In</button>
          </div>
        </form>

        <div className="w-full flex justify-center">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  
    </>
  );
}


