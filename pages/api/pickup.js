import mongoose from 'mongoose';
import fetch from 'node-fetch'; // or you can use axios

// Telegram Bot Credentials
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

// Connect to the database
const connectDb = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

// Define the Address schema
const AddressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contactNumber: { type: String, required: true },
  pinCode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create or get the Address model
const Address = mongoose.models.Address || mongoose.model('Address', AddressSchema);

// Send a message to the Telegram chat
const sendTelegramMessage = async (message) => {
  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!data.ok) {
    console.error('Failed to send Telegram message:', data.description);
  } else {
    console.log('Telegram message sent successfully');
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, address, contactNumber, pinCode } = req.body;

    // Check if any required field is missing
    if (!name || !address || !contactNumber || !pinCode) {
      return res.status(400).json({ success: false, message: 'All fields (name, address, contactNumber, pinCode) are required.' });
    }

    try {
      await connectDb();

      // Create a new Address with all required fields
      const newAddress = new Address({
        name,
        address,
        contactNumber,
        pinCode,
      });

      // Save the new address to the database
      await newAddress.save();

      // Send Telegram message with the address details
      const message = `
        New Address Added:
        Name: ${name}
        Address: ${address}
        Contact Number: ${contactNumber}
        Pin Code: ${pinCode}
      `;

      await sendTelegramMessage(message);

      return res.status(200).json({ success: true, message: 'Address saved successfully and Telegram notification sent!' });
    } catch (error) {
      console.error('Error saving address:', error);
      return res.status(500).json({ success: false, message: 'Something went wrong' });
    }
  } else if (req.method === 'GET') {
    try {
      await connectDb();

      // Fetch all addresses sorted by createdAt, newest first
      const addresses = await Address.find().sort({ createdAt: -1 });

      return res.status(200).json({ success: true, addresses });
    } catch (error) {
      console.error('Error fetching addresses:', error);
      return res.status(500).json({ success: false, message: 'Something went wrong' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
