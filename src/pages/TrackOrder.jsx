import React, { useState } from "react";
import PageHero from "../components/shared/PageHero";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Package, AlertCircle } from "lucide-react";

export default function TrackOrder() {
  const [trackingId, setTrackingId] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div>
      <PageHero
        title="Track Your Order"
        subtitle="Enter your tracking number to get real-time updates on your shipment."
        image="/Transcontinental-Int.com/assets/unsplash/photo-1494412574643-ff11b0a5eb19.jpg"
      />

      <section className="py-24 bg-white">
        <div className="max-w-xl mx-auto px-4 md:px-8">
          <form onSubmit={handleSearch} className="flex gap-3">
            <Input
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter tracking number..."
              className="flex-1"
            />
            <Button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-white gap-2">
              <Search className="w-4 h-4" /> Track
            </Button>
          </form>

          {searched && (
            <div className="mt-12 text-center p-12 bg-gray-50 rounded-2xl border border-gray-200">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900">Tracking In Progress</h3>
              <p className="text-gray-500 mt-2 text-sm">
                Please contact our support team at <a href="mailto:tcl@transcontinental-int.com" className="text-cyan-500 hover:underline">tcl@transcontinental-int.com</a> or call <a href="tel:+19179305172" className="text-cyan-500 hover:underline">+1 917-930-5172</a> for real-time tracking updates.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}