"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { use } from "react";

export default function ConversationDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-['Inter',sans-serif] p-4">
      <Card className="container mx-auto rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-[#212529]">Conversation (ID: {id})</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#212529]">Conversation Detail Page (Coming Soon)</p>
          <p>Full message thread and AI-suggested replies will be added here.</p>
        </CardContent>
      </Card>
    </div>
  );
}