



import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/auth/profile", { withCredentials: true });
        setUser(response.data);
      } catch (err) {
        setError("Failed to fetch profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Student Dashboard
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            I AM A STUDENT OF IIT DELHI, BE COMPUTER SCIENCE AND ENGINEERING, DELHI CODE
          </p>
        </div>
        {user ? (
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  alt={user.name}
                  src="data:image/jpeg;base64,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" // Default image if no profile picture
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-indigo-600">{user.name}</h3>
                  <p className="text-base font-semibold tracking-tight text-gray-900">Role: {user.role || "Student"}</p>
                  <p className="text-base font-semibold tracking-tight text-gray-900">REG ID: {user._id}</p>
                  <p className="text-base font-semibold tracking-tight text-gray-900">Grade: A</p>
                  <p className="text-base font-semibold tracking-tight text-gray-900">Father Name: SRIKANT ROY</p>
                  <p className="text-base font-semibold tracking-tight text-gray-900">Date of Birth: 17-08-2002</p>
                  <p className="text-base font-semibold tracking-tight text-gray-900">Blood Group: O+</p>
                  <p className="text-base font-semibold tracking-tight text-gray-900">Address:RAMPUR BINDALAL</p>
                  <p className="text-base font-semibold tracking-tight text-gray-900">EMAIL: {user.email}</p>
                </div>
              </div>
            </li>
          </ul>
        ) : (
          <p>User not found</p>
        )}
      </div>
    </div>
  );
}
