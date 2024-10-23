import React, { useState } from "react";
import axios from "axios";

const UserDetailsSubmit = () => {
  const [name, setName] = useState("");
  const [socialMediaHandle, setSocialMediaHandle] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("socialMediaHandle", socialMediaHandle);

      // Append multiple images
      // images.forEach((image, index) => {
      //   formData.append(`images[${index}]`, image);
      // });

      images.forEach((image) => {
        formData.append("images", image); // Ensure the key is 'images' for each file
      });

      // Submit form data (you can replace the URL with your endpoint)
      const { data } = await axios.post(
        "https://threew-task-backend.onrender.com/api/users/submit",
        // "http://localhost:5000/api/users/submit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    // Append new images to the existing array
    setImages((prevImages) => [...prevImages, ...e.target.files]);
  };

  const removeImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="max-w-lg w-full mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6">User Submission Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="socialMediaHandle"
            className="block text-sm font-medium text-gray-700"
          >
            Social Media Handle:
          </label>
          <input
            type="text"
            id="socialMediaHandle"
            value={socialMediaHandle}
            onChange={(e) => setSocialMediaHandle(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Images:
          </label>
          <input
            type="file"
            id="images"
            multiple
            onChange={handleImageChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            accept="image/*"
          />
        </div>

        {/* Display the selected images */}
        <div className="mb-6">
          {images.length > 0 && (
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">
                Selected Images:
              </p>
              <ul className="list-disc list-inside">
                {images.map((image, index) => (
                  <li key={index} className="text-gray-600">
                    {image.name}{" "}
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-55"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UserDetailsSubmit;
