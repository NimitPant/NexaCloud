# 🤖 Imaginify – AI Image SaaS Platform

Build an AI image SaaS platform that excels in image processing capabilities, integrates secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features including:

- Image Restoration
- Recoloring
- Object Removal
- Generative Fill
- Background Removal

This project can serve as a portfolio-boosting guide for your next AI image tool.

> 💬 **Need Help?**  
Join our active [Discord community](https://discord.gg/) with over **27k+ members** – a supportive space to ask questions and debug issues.

---

## ⚙️ Tech Stack

- **Next.js**
- **TypeScript**
- **MongoDB**
- **Clerk** (Authentication)
- **Cloudinary** (Image hosting)
- **Stripe** (Payments)
- **Shadcn UI**
- **TailwindCSS**

---

## 🔋 Features

- 🔐 **Authentication & Authorization**: Secure user access with Clerk – includes sign-up, login, route protection  
- 🖼️ **Community Image Showcase**: Explore user image transformations with pagination  
- 🔎 **Advanced Image Search**: Search images by content or objects within them  
- 🛠️ **Image Restoration**: Revive old or damaged images  
- 🎨 **Image Recoloring**: Replace object colors within images  
- 🧠 **Generative Fill**: AI-powered fill for missing image areas  
- 🧹 **Object Removal**: Precisely remove unwanted items  
- 🪄 **Background Removal**: Isolate objects from their backgrounds  
- 💾 **Download Transformed Images**: Save and share results easily  
- 🧾 **View Transformation Details**: See insights on each image modification  
- ⚙️ **Manage Transformations**: Update or delete image modifications  
- 💳 **Credits System**: Earn or buy credits to access features  
- 👤 **User Profile Page**: View personal transformations and credits  
- 💰 **Credits Purchase**: Securely buy credits via Stripe  
- 📱 **Responsive UI/UX**: Seamless experience across all device sizes  
- ♻️ **Reusable Code Architecture**: Clean, maintainable, scalable code structure  

---

## 🤸 Quick Start

### Prerequisites

Ensure you have the following installed:

- Git
- Node.js
- npm

### 📦 Clone the Repository

```bash
git clone https://github.com/adrianhajdin/imaginify.git
cd imaginify
```

### 📥 Install Dependencies

```bash
npm install
```

### ⚙️ Set Up Environment Variables

Create a file named `.env.local` in the root of the project and add the following:

```bash
# NEXT
NEXT_PUBLIC_SERVER_URL=

# MONGODB
MONGODB_URL=

# CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

> 📝 Replace the placeholders with actual credentials from:
> - [Clerk](https://clerk.dev)
> - [MongoDB](https://mongodb.com)
> - [Cloudinary](https://cloudinary.com)
> - [Stripe](https://stripe.com)

### 🚀 Run the Project

```bash
npm run dev
```

Visit `http://localhost:3000` to explore the platform locally.

---

## 📚 License

MIT

---

## 👨‍💻 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

Happy Coding! 🎉
