"use client";  // 👈 Add this at the very top

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await fetch("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        if (res.ok) {
          setUser(data); // Store user data
        } else {
          console.error("Error fetching user:", data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Welcome, {user?.name || "User"}!</h1>
    </div>
  );
}
