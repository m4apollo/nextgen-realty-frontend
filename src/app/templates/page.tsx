"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Templates() {
  const templates = [
    { id: 1, name: "Initial Follow-Up", type: "Email", lastUsed: "2025-07-30" },
    { id: 2, name: "Showing Confirmation", type: "SMS", lastUsed: "2025-07-28" },
    { id: 3, name: "Open House Invite", type: "Email", lastUsed: "2025-07-25" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-['Inter',sans-serif] p-4">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10 mb-6">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#0D6EFD]">Templates</h1>
          <Button className="bg-[#198754] hover:bg-[#157347] rounded-2xl">
            Add New Template
          </Button>
        </div>
      </header>

      {/* Template Creation Form */}
      <section className="container mx-auto px-4 mb-6">
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#212529]">Create New Template</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-[#212529]">Template Name</Label>
                <Input id="name" placeholder="e.g., Follow-Up Email" className="rounded-2xl" />
              </div>
              <div>
                <Label htmlFor="type" className="text-[#212529]">Type</Label>
                <select id="type" className="w-full border rounded-2xl p-2 text-[#212529]">
                  <option value="email">Email</option>
                  <option value="sms">SMS</option>
                </select>
              </div>
              <div>
                <Label htmlFor="content" className="text-[#212529]">Content</Label>
                <textarea
                  id="content"
                  placeholder="Enter template content"
                  className="w-full border rounded-2xl p-2 text-[#212529]"
                  rows={4}
                />
              </div>
              <Button className="bg-[#0D6EFD] hover:bg-[#0B5ED7] rounded-2xl">Save Template</Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Templates Table */}
      <section className="container mx-auto px-4">
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#212529]">All Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[#212529]">Template Name</TableHead>
                  <TableHead className="text-[#212529]">Type</TableHead>
                  <TableHead className="text-[#212529]">Last Used</TableHead>
                  <TableHead className="text-[#212529]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {templates.map((template) => (
                  <TableRow key={template.id}>
                    <TableCell className="text-[#212529]">{template.name}</TableCell>
                    <TableCell className="text-[#212529]">{template.type}</TableCell>
                    <TableCell className="text-[#212529]">{template.lastUsed}</TableCell>
                    <TableCell className="text-[#212529]">
                      <Button variant="outline" className="mr-2 rounded-2xl">Edit</Button>
                      <Button variant="outline" className="rounded-2xl">Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}