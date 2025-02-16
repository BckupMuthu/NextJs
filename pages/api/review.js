import mongoose from 'mongoose';

const connectDb = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

// Review Schema
const ReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Review = mongoose.models.Review || mongoose.model('Review', ReviewSchema);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, review, rating } = req.body;

    if (!name || !review || !rating) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
      await connectDb();

      // Create new review
      const newReview = new Review({
        name,
        review,
        rating,
      });

      // Save the review to the database
      await newReview.save();

      return res.status(200).json({ success: true, message: 'Noted your Review! Lets stay connected!' });
    } catch (error) {
      console.error('Error saving review:', error);
      return res.status(500).json({ success: false, message: 'Something went wrong.' });
    }
  } else if (req.method === 'GET') {
    try {
      await connectDb();

      // Fetch all reviews from the database
      const reviews = await Review.find().sort({ createdAt: -1 }).limit(5); // Sort by most recent first

      return res.status(200).json({ success: true, reviews });
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return res.status(500).json({ success: false, message: 'Something went wrong.' });
    }
  }else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
