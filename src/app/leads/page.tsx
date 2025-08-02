"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

export default function Leads() {
  const leads = [
    { id: 1, name: "John Doe", status: "New", source: "Zillow", tags: "High Intent", lastContact: "2025-07-30" },
    { id: 2, name: "Sarah Smith", status: "Contacted", source: "Website", tags: "First-time Buyer", lastContact: "2025-07-29" },
    { id: 3, name: "Mike Johnson", status: "Nurturing", source: "Open House", tags: "Luxury", lastContact: "2025-07-28" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-['Inter',sans-serif] p-4">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10 mb-6">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#0D6EFD]">Leads</h1>
          <Button className="bg-[#198754] hover:bg-[#157347] rounded-2xl" asChild>
            <Link href="/leads/add">Add New Lead</Link>
          </Button>
        </div>
      </header>

      {/* Filters */}
      <section className="container mx-auto px-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="status" className="text-[#212529]">Status</Label>
            <Select>
              <SelectTrigger id="status" className="rounded-2xl">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="nurturing">Nurturing</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="source" className="text-[#212529]">Source</Label>
            <Select>
              <SelectTrigger id="source" className="rounded-2xl">
                <SelectValue placeholder="All Sources" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                <SelectItem value="zillow">Zillow</SelectItem>
                <SelectItem value="website">Website</SelectItem>
                <SelectItem value="openhouse">Open House</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="tags" className="text-[#212529]">Tags</Label>
            <Input id="tags" placeholder="e.g., High Intent" className="rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Leads Table */}
      <section className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-[#212529]">All Leads</h2>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-2xl">Send Follow-Up</Button>
              <Button variant="outline" className="rounded-2xl">Reassign</Button>
              <Button variant="outline" className="rounded-2xl">Archive</Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[#212529]">Name</TableHead>
                <TableHead className="text-[#212529]">Status</TableHead>
                <TableHead className="text-[#212529]">Source</TableHead>
                <TableHead className="text-[#212529]">Tags</TableHead>
                <TableHead className="text-[#212529]">Last Contact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="text-[#212529]">
                    <Link href={`/leads/${lead.id}`} className="text-[#0D6EFD] hover:underline">{lead.name}</Link>
                  </TableCell>
                  <TableCell className="text-[#212529]">{lead.status}</TableCell>
                  <TableCell className="text-[#212529]">{lead.source}</TableCell>
                  <TableCell className="text-[#212529]">{lead.tags}</TableCell>
                  <TableCell className="text-[#212529]">{lead.lastContact}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}
