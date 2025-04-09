// CardGallery.tsx
import React from "react";
import { Card } from "./subComponents/Card";

const cardsContent = [
  {
    heading: "Smart Job Matching",
    paragraph:
      "We surface jobs tailored to your experience, preferences, and goals — no more endless scrolling.",
    tags: ["be an early applicant", "automation"],
  },
  {
    heading: "Custom CV's",
    paragraph:
      "Tailor your CV to different roles in seconds — optimized by AI, but built around your unique skills and experience.",
    tags: ["industry match"],
  },
  {
    heading: "Auto Apply",
    paragraph:
      "We fill out applications for you in seconds. Say goodbye to repetitive forms.",
      tags: ["new"],
  },
];

export const CardGallery = () => {
  return (
    <section className="bg-white py-12">
      {/* Title & Subtitle */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Job hunting, fully automated — {" "}
          <span className="text-[#3F33C0]">finally</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
        We built Jobbyo to make job hunting feel less like a grind — and more like progress. These are the tools that put you back in control.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
        {cardsContent.map((card, index) => (
          <Card
            key={index}
            heading={card.heading}
            tags={card.tags}
            progress={card.progress}
          >
            {card.paragraph}
          </Card>
        ))}
      </div>
    </section>
  );
};
