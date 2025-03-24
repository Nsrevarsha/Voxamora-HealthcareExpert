"use client";
import { useEffect, useState } from "react";

export default function Verify() {
  const [message, setMessage] = useState("Verifying...");

  useEffect(() => {
    const verifyEmail = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      if (!token) {
        setMessage("Invalid verification link.");
        return;
      }

      const res = await fetch(`/api/auth/verify?token=${token}`);
      const data = await res.json();

      setMessage(data.message || data.error);
    };

    verifyEmail();
  }, []);

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{message}</p>
    </div>
  );
}
