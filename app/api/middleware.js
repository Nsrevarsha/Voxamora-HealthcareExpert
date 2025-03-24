import jwt from "jsonwebtoken";

export function verifyAuth(req) {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return { error: "Unauthorized", status: 401 };
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { userId: decoded.userId };
  } catch (error) {
    return { error: "Invalid token", status: 401 };
  }
}
