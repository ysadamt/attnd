import type { NextApiRequest, NextApiResponse } from 'next';
import formidable, { Fields, Files } from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // Important to disable body parsing by Next.js
  },
};

// Helper to parse the form data
const parseForm = (req: NextApiRequest): Promise<{ fields: Fields, files: Files }> => {
  const form = new formidable.IncomingForm();
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { files } = await parseForm(req);

    // Handle multiple files or single file
    const file = Array.isArray(files.file) ? files.file[0] : files.file;

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const data = fs.readFileSync(file.filepath);

    // Ensure uploads directory exists
    const uploadDir = path.join(process.cwd(), '/public/uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Create a unique filename
    const fileName = `${Date.now()}-${file.originalFilename}`;
    const filePath = path.join(uploadDir, fileName);
    
    // Write the file to the upload directory
    fs.writeFileSync(filePath, data);

    res.status(200).json({ message: 'File uploaded successfully', filename: fileName });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Error uploading file' });
  }
}
