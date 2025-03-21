import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "Step 1: Use the Pitch App (Not Browser)",
    description: "Make sure you have the Pitch app installed instead of using it in a web browser. Download it here:",
    link: "https://pitch.com/download",
  },
  {
    step: "Step 2: Open Your Presentation in Pitch",
    description: "Launch the Pitch app and open the deck you want to present.",
  },
  {
    step: "Step 3: Click 'Play' in Pitch",
    description: "Start the presentation by clicking 'Play' to enter fullscreen mode.",
  },
  {
    step: "Step 4: Open Speaker View",
    description: "In Pitch, click 'Speaker View' to see your speaker notes and upcoming slides while presenting.",
  },
  {
    step: "Step 5: Hide Controls for a Clean Look",
    description: "Once in Speaker View, hide any unnecessary controls to keep a clean interface.",
  },
  {
    step: "Step 6: Share Screen in Google Meet",
    description: "Go to Google Meet, click 'Present', choose 'Share Window', and select the Pitch window. This ensures attendees see a fullscreen, clean view of your slides.",
  },
];

export default function PresentationGuide() {
  return (
    <div className="min-h-screen bg-[#002EFF] flex flex-col items-center py-12 px-6 text-white">
      <h1 className="text-3xl font-bold mb-6">How to Present in Pitch</h1>
      <p className="mb-8 max-w-2xl text-center">
        Follow these steps for a professional, smooth Pitch presentation in a digital meeting.
      </p>
      
      <div className="w-full max-w-2xl space-y-6">
        {steps.map((step, index) => (
          <Card key={index} className="bg-white text-gray-900 p-4 rounded-lg shadow-lg">
            <CardContent>
              <h2 className="font-bold text-lg mb-2">{step.step}</h2>
              <p className="text-sm mb-4">{step.description}</p>
              {step.link && (
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mb-4 inline-block"
                >
                  {step.link}
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
