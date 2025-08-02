"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function GetStarted() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-['Inter',sans-serif] flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#212529] mb-6">Book a Demo</h1>
        <form>
          <div className="mb-4">
            <Label htmlFor="name" className="text-[#212529]">Full Name</Label>
            <Input id="name" type="text" placeholder="Enter your name" className="rounded-2xl" />
          </div>
          <div className="mb-4">
            <Label htmlFor="email" className="text-[#212529]">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" className="rounded-2xl" />
          </div>
          <div className="mb-6">
            <Label className="text-[#212529]">Preferred Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-2xl border"
            />
          </div>
          <Button type="submit" className="w-full bg-[#198754] hover:bg-[#157347] rounded-2xl">Schedule Demo</Button>
        </form>
      </div>
    </div>
  );
}
