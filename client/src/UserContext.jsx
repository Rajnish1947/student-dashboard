/* eslint-disable react/prop-types */
// import {createContext, useEffect, useState} from "react";
// import axios from 'axios';


// export const UserContext = createContext({});

// export function UserContextProvider({children}){
//   const [user, setUser ] = useState(null);
//   useEffect(() => {
//     if (!user) {
//       axios.get('/profile').then(({data}) =>{
//         setUser(data);
//       })
//     }
//   },[]);
//   return (
//     <UserContext.Provider value={{user, setUser}}>
//       {children}
//     </UserContext.Provider>
//   )
// }
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create a context
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // When the component mounts, we try to fetch user profile if logged in
    const token = localStorage.getItem('authToken'); // Get token from local storage
    if (token) {
      axios
        .get('http://localhost:4000/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(({ data }) => {
          setUser(data); // Set user data if the token is valid
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
          setUser(null); // If token is invalid or expired, clear the user state
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
