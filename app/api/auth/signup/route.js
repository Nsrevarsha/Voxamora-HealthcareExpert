import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { sendVerificationEmail } from '@/lib/mailer';

export async function POST(req) {
  await dbConnect(); // Connect to MongoDB

  try {
    const { name, email, password } = await req.json();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ message: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user but set `verified` to false
    const user = await User.create({ name, email, password: hashedPassword, verified: false });

    // Generate verification token (expires in 1 hour)
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send verification email
    const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/verify?token=${token}`;
    await sendVerificationEmail(email, verificationLink);

    return Response.json({ message: "User registered! Check your email for verification." }, { status: 201 });

  } catch (error) {
    console.error("Signup Error:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
