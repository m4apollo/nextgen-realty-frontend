"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-['Inter',sans-serif] p-4">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10 mb-6">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#0D6EFD]">NextGen Realty Dashboard</h1>
          <Button className="bg-[#198754] hover:bg-[#157347] rounded-2xl" asChild>
            <Link href="/leads/add">Add New Lead</Link>
          </Button>
        </div>
      </header>

      {/* Metrics Panel */}
      <section className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#212529]">New Leads This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-[#0D6EFD]">12</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#212529]">Follow-Ups Sent</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-[#0D6EFD]">28</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#212529]">Open Conversations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-[#0D6EFD]">5</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Smart Assistant Prompt */}
      <section className="container mx-auto px-4 mb-8">
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#212529]">Smart Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="prompt" className="text-[#212529]">Ask AI to manage your leads</Label>
            <Input
              id="prompt"
              placeholder="e.g., Follow up with Karen about her home tour"
              className="rounded-2xl mt-2"
            />
            <Button className="mt-4 bg-[#0D6EFD] hover:bg-[#0B5ED7] rounded-2xl">
              Submit
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Recent Activity Feed */}
      <section className="container mx-auto px-4">
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#212529]">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-[#212529]">
              <li className="mb-2">Sent follow-up email to John Doe - 2h ago</li>
              <li className="mb-2">New lead added from Zillow - 5h ago</li>
              <li>Scheduled showing with Sarah Smith - Yesterday</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
