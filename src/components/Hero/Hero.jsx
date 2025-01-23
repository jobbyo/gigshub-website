import React from "react";

export const Hero = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          More Interviews, No Applications
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          We automate applications, tailor CVs, and get you ideal matches—
          so you can focus on what truly matters: acing interviews.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="px-8 py-3 bg-[#3F33C0] text-white font-semibold rounded-md">
            Get Started—It's Free
          </button>

        </div>

        {/* (Optional) Additional Info or Tagline */}
        {/* <p className="mt-2 text-sm text-gray-400">Try a tagline or short note here</p> */}
      </div>
      
      {/* Mocked Product Screenshot / Video Placeholder */}
      <div className="mt-12 max-w-5xl mx-auto px-4">
      <div className="overflow-hidden rounded-lg">
        <iframe
          width="100%"
          height="415"
          src="https://www.youtube.com/embed/your-video-id"
          title="YouTube video player"

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mt-4"
        ></iframe>
      </div></div>
    </section>
  );
};
