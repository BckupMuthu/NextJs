import { useEffect, useState } from 'react';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [latestTimestamp, setLatestTimestamp] = useState(0); // Store the timestamp of the latest review

  // Fetch reviews when the component mounts
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('/api/review');
        const data = await res.json();

        if (data.success) {
          setReviews(data.reviews); // Assuming the API returns reviews in the 'reviews' field
          // Set the latest review timestamp
          if (data.reviews.length > 0) {
            setLatestTimestamp(data.reviews[0].createdAt);
          }
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews(); // Initial fetch

    // Poll every 5 seconds to check for new reviews
    const interval = setInterval(fetchReviews, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [latestTimestamp]); // Dependency on the latest timestamp

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  return (
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
                .map((_, index) => (
                  <span key={index} className="text-gray-300">★</span>
                ))}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
