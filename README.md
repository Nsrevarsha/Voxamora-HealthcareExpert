# 🏥 VOXAMORA - Electronic Medical Records (EMR) System

**VOXAMORA** is an advanced **Electronic Medical Records (EMR) System** designed for efficient medical data management, AI-powered diagnosis, and seamless doctor-patient interactions. It provides features like **speech recognition**, **secure authentication**, **appointment scheduling**, and more.

---

## 📖 Table of Contents
- [🚀 Features](#-features)
- [🛠️ Installation & Setup](#️-installation--setup)
  - [1️⃣ Clone the Repository](#1️⃣-clone-the-repository)
  - [2️⃣ Install Dependencies](#2️⃣-install-dependencies)
  - [3️⃣ Setup Environment Variables](#3️⃣-setup-environment-variables)
  - [4️⃣ Connect to MongoDB](#4️⃣-connect-to-mongodb)
  - [5️⃣ Start the Development Server](#5️⃣-start-the-development-server)
- [⚙️ Extra Dependencies](#️-extra-dependencies)
- [🔧 Common Issues & Fixes](#-common-issues--fixes)
- [📜 License](#-license)
- [🤝 Contributing](#-contributing)
- [📞 Contact](#-contact)

---

## 🚀 Features
✔️ **AI-Powered Speech Recognition** - Converts doctor consultations into text.  
✔️ **Secure Authentication** - Role-based access control for doctors & patients.  
✔️ **Appointment Management** - Easy patient scheduling.  
✔️ **Electronic Prescriptions** - Securely store & retrieve medical prescriptions.  
✔️ **Medical History Tracking** - Complete patient records & analytics.  
✔️ **Secure Messaging** - Encrypted communication between doctors & patients.  

---

## 🛠️ Installation & Setup

Follow these steps to **install and run VOXAMORA** on your machine.

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/YOUR_USERNAME/voxamora.git
cd voxamora

2️⃣ Install Dependencies
Ensure you have Node.js (>=18) installed. Then, install the required packages:


npm install
3️⃣ Setup Environment Variables
Create a .env.local file in the root directory and add the following:


MONGODB_URI=mongodb+srv://your_mongo_connection_string
JWT_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
EMAIL_SERVER=smtp://your_email_smtp
EMAIL_FROM=your_email@example.com
✅ Replace values with actual credentials.

4️⃣ Connect to MongoDB
Option 1: Use a local MongoDB server.

Option 2: Use MongoDB Atlas (recommended for cloud storage).

Create an account at MongoDB Atlas

Set up a cluster & copy the connection string.

Replace MONGODB_URI in .env.local with your connection string.

5️⃣ Start the Development Server
Run the following command:


npm run dev
Your app will be available at http://localhost:3000 🎉.

⚙️ Extra Dependencies
The following libraries are used in VOXAMORA:

Next.js - Frontend framework.

MongoDB & Mongoose - Database & ORM.

bcryptjs - Password hashing.

jsonwebtoken (JWT) - Secure authentication.

nodemailer - Email verification.

Whisper AI (optional) - Speech recognition.

TailwindCSS - Styling framework.

To install any missing package:


npm install package-name
🔧 Common Issues & Fixes
❌ Issue	🔍 Possible Cause	🛠️ Fix
Token Expired / Invalid?	Incorrect JWT_SECRET	Update .env.local and restart the server.
MongoDB Connection Failed?	Invalid MONGODB_URI	Ensure MongoDB is running or check Atlas IP access settings.
Client-Side Errors (useState issue)?	Missing "use client" directive	Add "use client" at the top of relevant components.
📜 License
This project is open-source and available under the MIT License.

🤝 Contributing
We welcome contributions!

Fork the repo

Create a feature branch (git checkout -b feature-name)

Commit changes (git commit -m "Added new feature")

Push to GitHub (git push origin feature-name)

Submit a pull request 🎉

📞 Contact
For any queries, reach out to:
📧 Email: srevarsha.nandh@example.com
🌐 GitHub: https://github.com/Nsrevarsha

🎉 Happy Coding & Welcome to VOXAMORA! 🚀