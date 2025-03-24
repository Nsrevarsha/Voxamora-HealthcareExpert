import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function GET(req) {
  await dbConnect(); // Ensure DB connection

  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return Response.json({ message: "Token missing" }, { status: 400 });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    // Find user and update verification status
    const user = await User.findById(userId);
    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    if (user.verified) {
      return Response.json({ message: "User already verified" }, { status: 200 });
    }

    // Update user to set `verified: true`
    await User.updateOne({ _id: userId }, { $set: { isVerified: true } });

    return Response.json({ message: "Email verified successfully!" }, { status: 200 });

  } catch (error) {
    console.error("Verification Error:", error);
    return Response.json({ message: "Invalid or expired token" }, { status: 400 });
  }
}
