"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Conversations() {
  const leads = [
    { id: 1, name: "John Doe", lastMessage: "Interested in downtown condo", time: "2h ago" },
    { id: 2, name: "Sarah Smith", lastMessage: "Scheduled showing", time: "Yesterday" },
    { id: 3, name: "Mike Johnson", lastMessage: "Asked about mortgage rates", time: "2d ago" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-['Inter',sans-serif] p-4">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10 mb-6">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#0D6EFD]">Conversations</h1>
          <Button className="bg-[#198754] hover:bg-[#157347] rounded-2xl" asChild>
            <Link href="/leads/add">Add New Lead</Link>
          </Button>
        </div>
      </header>

      {/* Conversations Layout */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Lead List */}
          <Card className="md:col-span-1 rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#212529]">Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {leads.map((lead) => (
                  <li key={lead.id} className="p-2 hover:bg-[#F1F5F9] rounded-lg">
                    <Link href={`/conversations/${lead.id}`} className="text-[#0D6EFD] hover:underline">
                      <div className="font-semibold">{lead.name}</div>
                      <div className="text-sm text-[#212529] truncate">{lead.lastMessage}</div>
                      <div className="text-xs text-gray-500">{lead.time}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Message Thread */}
          <Card className="md:col-span-2 rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#212529]">Message Thread</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-4">
                <div className="bg-[#F1F5F9] p-3 rounded-lg">
                  <p className="text-[#212529]"><strong>John Doe:</strong> Interested in downtown condo.</p>
                  <p className="text-xs text-gray-500">2h ago</p>
                </div>
                <div className="bg-[#E0F2FE] p-3 rounded-lg text-right">
                  <p className="text-[#212529]"><strong>You:</strong> Great! Let's schedule a tour.</p>
                  <p className="text-xs text-gray-500">1h ago</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ai-reply" className="text-[#212529]">AI-Suggested Reply</Label>
                <Input id="ai-reply" placeholder="e.g., When are you free for a tour?" className="rounded-2xl" />
                <div className="flex gap-2">
                  <Button className="bg-[#0D6EFD] hover:bg-[#0B5ED7] rounded-2xl">Send</Button>
                  <Button variant="outline" className="rounded-2xl">Edit</Button>
                  <Button variant="outline" className="rounded-2xl">Approve</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}