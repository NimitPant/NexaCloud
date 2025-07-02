import React from "react";

const SignInPage = () => {
  return (
    <main className="flex-center min-h-screen w-full bg-purple-100 bg-dotted-pattern bg-cover bg-fixed bg-center">
      <section className="wrapper">
        <div className="text-center">
          <h1 className="h1-bold text-dark-700">Welcome Back</h1>
          <p className="p-16-regular mt-4">
            Welcome back to NexaCloud!
          </p>
          <p className="p-14-medium text-center text-purple-700">
            Let&apos;s get you signed in
          </p>
        </div>
        <div className="mt-8">
          {/* Custom Sign-In Form will go here */}
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
// "use client";

// import React from "react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const SignInPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       if (res.ok) {
//         router.push("/");
//         router.refresh(); // To reflect logged-in state in header
//       } else {
//         const data = await res.json();
//         setError(data.error || "Something went wrong.");
//       }
//     } catch (err) {
//       setError("An unexpected error occurred.");
//     }
//   };

//   return (
//     <main className="flex-center min-h-screen w-full bg-purple-100 bg-dotted-pattern bg-cover bg-fixed bg-center">
//       <section className="wrapper">
//         <div className="text-center">
//           <h1 className="h1-bold text-dark-700">Welcome Back</h1>
//           <p className="p-16-regular mt-4">
//             Welcome back to NexaCloud!
//           </p>

//           <p className="p-14-medium text-center text-purple-700">
//             Let&apos;s get you signed in
//           </p>
//         </div>

//         <div className="mt-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//             </div>
//             {error && <p className="text-red-500 text-sm">{error}</p>}
//             <Button type="submit" className="w-full">Sign In</Button>
//           </form>
//           <div className="text-center text-sm">
//             <p>
//               Don't have an account?{" "}
//               <Link href="/sign-up" className="font-medium text-blue-600 hover:underline">
//                 Sign Up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default SignInPage; 