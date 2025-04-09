import React, { useState } from "react";
import { Container } from "../Container";

// Replace these with your actual image imports
import custom_cv from "../../assets/custom_cv.png";
import resume_builder from "../../assets/resume_builder.png";
import job_search from "../../assets/job_search.png";

// UPDATED step data with more empathetic, supportive language
const stepsData = [
  {
    title: "Smart CV Assistant",
    subtitle: "Tailored to Get Noticed",
    description:
      "No more guessing what recruiters want. Our AI adapts your CV to match each job's specific requirements, highlighting your relevant skills and experience so you stand out from the first glance.",
    image: custom_cv,
  },
  {
    title: "Resume Builder",
    subtitle: "From Blank Page to Job-Ready",
    description:
      "Skip the frustration of formatting and uncertainty. Our intuitive Resume Builder guides you through each step, handling the technical details while you focus on what matters—showcasing your unique value.",
    image: resume_builder,
  },
  {
    title: "Personalized Job Search",
    subtitle: "Find Your Fit, Not Just Any Job",
    description:
      "End the endless scrolling and application fatigue. Our smart algorithm connects you with opportunities that truly match your skills and aspirations—saving you time and bringing back the excitement of possibility.",
    image: job_search,
  },
];

// Updated heading text with more emotional resonance
const bigHeading = "Take back control of your job search";
const highlightedHeading = "Tools that work for you, not against you";
const buttonText = "Build Your Free Resume";

export const Steps = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Destructure current step data
  const { title, subtitle, description, image } = stepsData[activeStep];
  const redirect = () => {
    window.open("https://app.jobbyo.ai", "_blank");
  };
  
  return (
    <section className="bg-white py-16">
      <Container>
        {/* Top headings, left-aligned with improved spacing */}
        <div className="flex flex-col items-start gap-5 mb-16 px-4">
          {/* Brand statement in brand color */}
          <p className="text-base font-semibold text-[#3F33C0]">
            {bigHeading}
          </p>

          {/* Main heading with stronger emotional appeal */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            <span className="mr-2">
              {highlightedHeading.split(" ")[0]}
            </span>
            <span className="text-[#3F33C0]">
              {highlightedHeading.split(" ")[1]}
            </span>
            <span className="ml-2">
              {highlightedHeading.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          {/* CTA Button with more action-oriented text */}
          <button
            onClick={redirect}
            className="
              mt-6 
              px-8 
              py-3 
              bg-[#3F33C0] 
              text-white 
              font-semibold 
              rounded-md
              hover:bg-[#352aa6]
              transition
              shadow-md
            "
          >
            {buttonText}
          </button>
        </div>

        {/* Main content with improved layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 px-4">
          {/* Left side: shows active step's image and description */}
          <div className="flex-1 flex flex-col items-start gap-8">
            {/* Image wrapper with enhanced visual effects */}
            <div className="w-full max-w-lg">
              <img
                src={image}
                alt={`${title} feature`}
                className="
                  w-full 
                  h-auto 
                  rounded-lg 
                  shadow-lg
                  transition-all 
                  duration-300
                  transform 
                  hover:scale-105 
                  hover:shadow-xl 
                  cursor-pointer
                "
              />
            </div>
            {/* Description box with improved styling */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm border-l-4 border-[#3F33C0] w-full">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          </div>

          {/* Right side: vertical list of steps */}
          <div className="w-full max-w-sm relative self-start">
            {/* Vertical highlight bar with smoother animation */}
            <div
              className="absolute left-0 top-0 w-1 bg-[#3F33C0] transition-all duration-500 ease-in-out"
              style={{
                height: `${(100 / stepsData.length).toFixed(2)}%`,
                transform: `translateY(${
                  activeStep * (300 / stepsData.length)
                }%)`,
              }}
            />

            {/* Step buttons with improved interactivity */}
            <div className="flex flex-col pl-6 border-l border-gray-200 space-y-10">
              {stepsData.map((item, index) => {
                const isActive = index === activeStep;
                return (
                  <button
                    key={item.title}
                    onClick={() => setActiveStep(index)}
                    className={`
                      text-left transition-all duration-300
                      hover:translate-x-1
                      ${isActive ? "text-[#3F33C0]" : "text-gray-800"}
                    `}
                  >
                    <p className="text-lg md:text-xl font-bold mb-2">
                      {item.title}
                    </p>
                    <p className="text-sm md:text-base text-gray-600">
                      {item.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};