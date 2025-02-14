import { useState } from "react";
import { motion } from "framer-motion";
import CourierForm from "../components/CourierForm"; // Import CourierForm component
import ZariSareeProcess from "../components/ZariSell";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false); // Add state for review modal
  const [rating, setRating] = useState(0); // To handle the rating input
  const [showProcess, setShowProcess] = useState(false);

  const handleReviewModalToggle = () => {
    setShowReviewModal(!showReviewModal);
  };

  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent default anchor tag behavior
    setShowProcess((prev) => !prev); // Toggle the visibility of the component
  };

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  const handleCloseModal = () => {
    setShowForm(false);
  };

  // Fake positive reviews for demonstration
  const reviews = [
    { name: "Rafiq Thanjavur", review: "Nice Trusted", rating: 5 },
    {
      name: "Anita K.",
      review:
        "Great experience! I sold my old saree and got cash quickly. Highly recommend!",
      rating: 5,
    },
    {
      name: "Mahalakshmi",
      review:
        "Amazing service! The process was smooth  :) and the price was fair. Would definitely use again.",
      rating: 4,
    },
    {
      name: "Sonal Singh",
      review:
        "Such a hassle-free way to get rid of my old.. silk products. Quick and easy!",
      rating: 3.5,
    },
    {
      name: "Padmanaban g",
      review: "I was skeptical at first, but was good trust service!",
      rating: 5,
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-cover bg-center"
      style={{
        backgroundImage: "url('/logo.jpg')",
        filter: "brightness(0.7) contrast(1.2)", // Light contrast effect on background
        fontFamily: "Quicksand, sans-serif", // Apply Quicksand font globally
      }}
    >
      {/* Navigation Links */}
      <div className="absolute top-8 left-8 flex space-x-8 z-10">
        <a
          href="#home"
          className="text-white font-semibold text-lg transition-all duration-300 hover:text-pink-500 hover:scale-105"
        >
          Home
        </a>
        <a
          href="#add-review"
          onClick={handleReviewModalToggle}
          className="text-white font-semibold text-lg transition-all duration-300 hover:text-pink-500 hover:scale-105"
        >
          Add a Review
        </a>
        <a
          href="#how-we-work"
          className="text-white font-semibold text-lg transition-all duration-300 hover:text-pink-500 hover:scale-105"
          onClick={handleLinkClick}
        >
          How We Work?
        </a>

        {/* Conditionally render the ZariSareeProcess component */}
        {showProcess && <ZariSareeProcess />}
      </div>

      <motion.div
        className="container mx-auto max-w-3xl bg-white bg-opacity-80 p-8 rounded-xl shadow-2xl perspective-1000"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Enhanced Title */}
        <h1
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 mb-8 animate-pulse"
          id="home"
        >
          Cash For Old Silk Products
        </h1>
        <h2
          className="text-lg text-brown-700 mb-8 font-serif tracking-wide leading-relaxed shadow-lg"
        >
          Sell Your Old Saree Online – Quick & Easy Cash for Your Sarees
        </h2>
        {/* Descriptive Paragraph */}
        <motion.p
          className="text-lg text-gray-700 mb-8 font-serif tracking-wide leading-relaxed shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Got sarees that are sitting unused in your wardrobe? Let them find a
          new home and earn<span className="font-bold"> extra cash </span>in the
          process. Join thousands of sellers today! We buy{" "}
          <span className="font-bold">Pattu silk sarees</span> and other various
          products from across India, making it convenient for you to sell from
          your city. Our top priority is customer satisfaction, and we are
          dedicated to offering exceptional service.
        </motion.p>
       

         
        {/* Marquee-style Categories Section */}
        <motion.div
          className="mt-8 overflow-hidden relative w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.6 }}
        >
          <div className="marquee-container flex gap-6 py-6">
            {/* Map through items */}
            {[
              {
                src: "/images (1).jpeg",
                title: "Zari Dhoti",
                alt: "Zari Dhoti",
              },
              {
                src: "/Banarasi Silk.jpeg",
                title: "Banarasi Silk",
                alt: "Banarasi Silk",
              },
              { src: "/first.jpeg", title: "Silk Saree", alt: "Silk Saree" },
              {
                src: "/t7sow_1200.jpg",
                title: "Zari Blouse",
                alt: "Zari Blouse",
              },
              {
                src: "/skirtst18595aw22grn_1.jpg",
                title: "Silk Skirt",
                alt: "Silk Skirt",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative bg-white p-6 rounded-full shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 mx-4 space-y-4 hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-200 flex flex-col justify-center items-center"
                style={{
                  width: "200px", // Set width for consistent size
                  height: "200px", // Set height for consistent size
                  flexShrink: 0, // Prevent the div from shrinking
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-full" // Ensure the image fills the circle
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* WhatsApp Contact Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <a
            href="https://wa.me/8124286104?text=Hi,%20I'm%20interested%20in%20selling%20my%20saree."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 text-white py-4 px-10 rounded-xl text-lg font-semibold transform transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-green-600 hover:to-teal-600 shadow-md"
          >
            <img
              src="/images.jpeg"
              alt="WhatsApp Icon"
              className="w-6 h-6 mr-2"
            />
            Chat with us on WhatsApp
          </a>
        </motion.div>

        {/* Courier Form Toggle Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <button
            onClick={handleFormToggle}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-8 rounded-xl text-lg font-semibold transform transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 shadow-md"
          >
            {showForm ? "Close Pickup Form" : "Request Courier Pickup"}
          </button>
        </motion.div>

        {/* Modal for Courier Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 backdrop-blur-sm">
            <motion.div
              className="bg-gradient-to-r from-pink-100 to-purple-200 p-8 rounded-3xl shadow-2xl w-full max-w-lg transform transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-white text-blue-700 p-3 rounded-full shadow-md hover:bg-blue-100 transition-all duration-300"
              >
                <span className="text-2xl font-bold">×</span>
              </button>

              {/* Courier Form */}
              <CourierForm />
            </motion.div>
          </div>
        )}
      </motion.div>

      {/* Customer Reviews Section */}
      <motion.div
        className="container mx-auto max-w-3xl p-8 mt-16 bg-white rounded-xl shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="add-review"
      >
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-6">
          Customer Reviews
        </h2>

        {/* Displaying reviews */}
        <div className="space-y-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-r from-pink-100 to-purple-200 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-0 left-4 text-4xl text-gray-400">
                <span>“</span>
              </div>

              {/* Review Text */}
              <p className="text-xl text-gray-800 mb-4">{review.review}</p>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-700">
                  {review.name}
                </span>

                {/* Star Ratings */}
                <span className="flex space-x-1 text-yellow-400">
                  {"★".repeat(review.rating)} {/* Filled Stars */}
                  {"★"
                    .repeat(5 - review.rating)
                    .split("")
                    .map(() => (
                      <span className="text-gray-300">★</span>
                    ))}
                </span>
              </div>
            </div>
          ))}
        </div>
        {showReviewModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 backdrop-blur-sm">
            <motion.div
              className="bg-gradient-to-r from-pink-100 to-purple-200 p-8 rounded-3xl shadow-2xl w-full max-w-lg transform transition-all duration-500 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ maxHeight: "80vh", overflowY: "auto" }} // Limit height and enable scroll if content overflows
            >
              {/* Close Button */}
              <button
                onClick={handleReviewModalToggle}
                className="absolute top-4 right-4 bg-white text-blue-700 p-3 rounded-full shadow-md hover:bg-blue-100 transition-all duration-300"
              >
                <span className="text-2xl font-bold">×</span>
              </button>

              {/* Review Form */}
              <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-6">
                Add your Review
              </h1>

              {/* Name Input Field */}
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-4 rounded-lg text-gray-700 mb-4"
              />

              {/* Rating Section */}
              <div className="flex space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer text-2xl ${
                      star <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review Textarea */}
              <textarea
                placeholder="Write your review here..."
                rows="4"
                className="w-full p-4 rounded-lg text-gray-700 mb-4"
              ></textarea>

              {/* Submit Button */}
              <button className="bg-gradient-to-r from-green-400 to-teal-600 text-white py-2 px-8 rounded-xl">
                Submit Review
              </button>
            </motion.div>
          </div>
        )}
      </motion.div>

      {/* Footer */}
      <footer className="mt-12 text-gray-600 text-sm">
        <p>© 2025 SareeShop. All rights reserved.</p>
      </footer>
    </div>
  );
}
