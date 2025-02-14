// pages/api/pickup.js
import mongoose from 'mongoose';

const connectDb = async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const AddressSchema = new mongoose.Schema({
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Address = mongoose.models.Address || mongoose.model('Address', AddressSchema);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { address } = req.body;

    if (!address) {
      return res.status(400).json({ success: false, message: 'Address is required.' });
    }

    try {
      await connectDb();

      const newAddress = new Address({ address });
      await newAddress.save();

      return res.status(200).json({ success: true, message: 'Address saved successfully!' });
    } catch (error) {
      console.error('Error saving address:', error);
      return res.status(500).json({ success: false, message: 'Something went wrong' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
