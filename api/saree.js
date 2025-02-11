import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, price, description, image } = req.body;

    // Save saree details to a JSON file (or use a database like MongoDB, PostgreSQL, etc.)
    const filePath = path.join(process.cwd(), 'data', 'sarees.json');
    const sareesData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const newSaree = {
      id: sareesData.length + 1,
      name,
      price,
      description,
      image,
    };

    sareesData.push(newSaree);

    fs.writeFileSync(filePath, JSON.stringify(sareesData, null, 2));

    return res.status(201).json(newSaree);
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
