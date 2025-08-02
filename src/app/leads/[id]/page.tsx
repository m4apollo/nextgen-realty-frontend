"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { use } from "react";

export default function LeadProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-['Inter',sans-serif] p-4">
      <Card className="container mx-auto rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-[#212529]">Lead Profile (ID: {id})</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#212529]">Lead Profile Page (Coming Soon)</p>
          <p>Timeline, Notes, Conversation Thread, and Suggested Follow-Up will be added here.</p>
        </CardContent>
      </Card>
    </div>
  );
}