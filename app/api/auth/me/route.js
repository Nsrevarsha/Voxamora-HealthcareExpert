import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function GET(req) {
  await dbConnect(); // Ensure DB connection

  try {
    // Get token from headers
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Fetch user from database
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    return Response.json(user, { status: 200 });

  } catch (error) {
    console.error("ME route error:", error);
    return Response.json({ message: "Invalid or expired token" }, { status: 401 });
  }
}
