"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-['Inter',sans-serif]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#0D6EFD]">NextGen Realty</h1>
          <nav className="flex gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-[#0D6EFD] hover:bg-[#0B5ED7] rounded-2xl" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-4">
          Schedule Smarter, Close Faster
        </h2>
        <p className="text-lg md:text-xl text-[#212529] mb-8 max-w-2xl mx-auto">
          Automate lead capture, follow-ups, and scheduling with our AI-powered CRM for real estate agents.
        </p>
        <Button size="lg" className="bg-[#198754] hover:bg-[#157347] rounded-2xl" asChild>
          <Link href="/get-started">Book a Demo</Link>
        </Button>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 py-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-[#F8F9FA] rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-[#212529] mb-2">Smart Scheduling</h3>
            <p className="text-[#212529]">Share booking links to schedule showings instantly.</p>
          </div>
          <div className="text-center p-6 bg-[#F8F9FA] rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-[#212529] mb-2">AI Follow-Ups</h3>
            <p className="text-[#212529]">Automate personalized emails and SMS to reduce no-shows.</p>
          </div>
          <div className="text-center p-6 bg-[#F8F9FA] rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-[#212529] mb-2">Lead Insights</h3>
            <p className="text-[#212529]">Track leads and analytics in real-time dashboards.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 NextGen Realty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
