import React, { useEffect, useState } from "react";
import axios from "axios";

const UserSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch submissions from backend
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get(
          // "http://localhost:5000/api/users/submissions"
          "https://threew-task-backend.onrender.com/api/users/submissions"
        ); // Adjust the URL as needed
        setSubmissions(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch submissions.");
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-lg">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
        Admin Dashboard
      </h2>
      {submissions.length === 0 ? (
        <p className="text-center text-gray-600">No submissions yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {submissions?.map((submission) => (
            <div
              key={submission._id}
              className="bg-white hover:shadow-lg shadow-sm rounded-lg p-4 border border-gray-300 transition-all ease-in-out duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{submission.name}</h3>
              <p className="text-gray-600 mb-4">
                Social Media: {submission.socialMediaHandle}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {submission?.images?.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={`Submission ${index + 1}`}
                    className="w-full h-32 object-cover rounded"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserSubmissions;
