"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-['Inter',sans-serif] flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#212529] mb-6">Log in to NextGen Realty</h1>
        <form>
          <div className="mb-4">
            <Label htmlFor="email" className="text-[#212529]">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" className="rounded-2xl" />
          </div>
          <div className="mb-6">
            <Label htmlFor="password" className="text-[#212529]">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" className="rounded-2xl" />
          </div>
          <Button type="submit" className="w-full bg-[#0D6EFD] hover:bg-[#0B5ED7] rounded-2xl">Log In</Button>
        </form>
      </div>
    </div>
  );
}
