# 🤖 NexaCloud – AI-Powered Image Transformation Platform

![Readme Cover](/assets/images/readme_cover.png)


Create a powerful SaaS application centered around AI-driven image editing. This platform offers top-tier image processing features, intelligent image search, and multiple AI enhancements such as:

- Image Repair
- Recoloring
- Object Elimination
- Smart Fill-In
- Background Extraction

## ⚙️ Technology Stack

- **Next.js**
- **TypeScript**
- **MongoDB**
- **Cloudinary** (Media Hosting)
- **Shadcn UI**
- **TailwindCSS**
- **Custom JWT Authentication** (using JWT, bcrypt, and custom API routes)

---

## 🔋 Core Features

- 🔐 **JWT-Based Authentication**: Implement secure user sessions using custom JSON Web Tokens (JWT) for flexible and scalable authentication across the platform
- 🌐 **Explore Public Gallery**: Browse AI-edited images shared by the community with smooth pagination  
- 🔎 **Smart Image Lookup**: Search for visuals by analyzing image content and detected objects  
- 🛠️ **Image Restoration**: Breathe new life into old or degraded images  
- 🎨 **Color Transformation**: Alter object colors within photos to suit your preferences  
- 🧠 **AI-Powered Fill**: Automatically complete missing portions of an image  
- 🧹 **Object Cleanup**: Remove unwanted elements from images accurately  
- 🪄 **Background Isolation**: Effortlessly separate objects from their backgrounds  
- 💾 **Save Your Results**: Download and share AI-enhanced images with ease  
- 📋 **Edit Details View**: Access transformation history and insights  
- ⚙️ **Transformation Control**: Update or delete image edits on demand  
- 👤 **User Dashboard**: See your edited images and manage credit usage  
- 📱 **Mobile-Optimized Design**: Fully responsive and user-friendly across devices  
- ♻️ **Modular Codebase**: Built with scalability and reusability in mind  

---

## 🤸 Getting Started

### Requirements

Ensure the following are installed:

- Git
- Node.js
- npm

### 📦 Clone the Repository

```bash
git clone https://github.com/NimitPant/NexaCloud.git
cd NexaCloud
```

### 📥 Install Dependencies

```bash
npm install
```

### ⚙️ Configure Environment Variables

Create a `.env.local` file in the root directory and insert:

```bash
# NEXT
NEXT_PUBLIC_SERVER_URL=

# MONGODB
MONGODB_URL=



# CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### 🚀 Launch the App

```bash
npm run dev
```

Navigate to `http://localhost:3000` in your browser to start using the platform locally.
