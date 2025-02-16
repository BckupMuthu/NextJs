import { useState } from 'react';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make sure all fields are filled
    if (!name || !review || rating === 0) {
      setMessage('All fields are required!');
      return;
    }

    // Post the review to the server
    const res = await fetch('/api/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, review, rating }),
    });

    const data = await res.json();

    if (data.success) {
      setMessage('We will work hard to make it more better!');
      // Clear the form fields after submission
      setName('');
      setReview('');
      setRating(0);
    } else {
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-6">
        Add your Review
      </h1>

      {/* Name Input Field */}
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full p-4 rounded-lg text-gray-700 mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Rating Section */}
      <div className="flex space-x-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>

      {/* Submit Button */}
      <button
        className="bg-gradient-to-r from-green-400 to-teal-600 text-white py-2 px-8 rounded-xl"
        onClick={handleSubmit}
      >
        Submit Review
      </button>

      {/* Message */}
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
};

export default ReviewForm;
