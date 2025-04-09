import React from "react";
import checkMark from "../../assets/check-icon2.svg";

export const PricingCard = () => {
  const redirect = () => {
    window.open("https://app.jobbyo.ai", "_blank");
  };

  return (
    <section className="py-12 bg-white">
      {/* Top Section Heading */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Get 3x More Interviews with your AI job assistant
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Satisfaction promised with a 100% money‑back guarantee
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Free Plan */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              $0
            </h3>
            <hr className="my-6" />
            <h4 className="text-4xl font-bold text-gray-900">Free</h4>
            <p className="text-sm text-gray-600 mt-2">Basic features to get started</p>
          </div>
          <div className="mt-6">
            <button
              onClick={redirect}
              className="w-full px-6 py-3 border border-[#3F33C0] text-[#3F33C0] font-semibold rounded-md hover:bg-[#3F33C0] hover:text-white transition-colors"
            >
              Get started
            </button>
            {/* Features List */}
            <ul className="mt-5 space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <img
                  src={checkMark}
                  alt="Check icon"
                  className="w-5 h-5 mt-[2px]"
                />
                Manual Custom Resume Generation (2/day)
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <img
                  src={checkMark}
                  alt="Check icon"
                  className="w-5 h-5 mt-[2px]"
                />
                Resume Builder (Unlimited)
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <img
                  src={checkMark}
                  alt="Check icon"
                  className="w-5 h-5 mt-[2px]"
                />
                Personalized Job Listings (15/search)
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <img
                  src={checkMark}
                  alt="Check icon"
                  className="w-5 h-5 mt-[2px]"
                />
                Job Tracker (Unlimited)
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Starter Plan */}
        <div className="rounded-lg p-6 flex flex-col justify-between text-white bg-gradient-to-r from-[#3F33C0] to-[#9077F6]">
          <div>
            <h3 className="text-xl font-semibold">$5 Monthly</h3>
            <hr className="my-6 border-white/20" />
            <h4 className="text-4xl font-bold">Starter</h4>
            <p className="text-sm text-white/90 mt-2">Most popular for job seekers</p>
          </div>
          <div className="mt-6">
            <button
              onClick={redirect}
              className="w-full px-6 py-3 bg-white text-[#3F33C0] font-semibold rounded-md hover:bg-gray-100 transition-colors"
            >
              Upgrade Now
            </button>
            <div className="mt-3 flex items-center justify-center gap-2">
              <img src={checkMark} alt="Check icon" className="w-5 h-5" />
              <span className="text-sm text-white/90">
                100% money‑back guarantee
              </span>
            </div>
            {/* Features List */}
            <ul className="mt-5 space-y-2">
              <li className="flex items-start gap-2 text-white">
                <img
                  src={checkMark}
                  alt="Check icon"
                  className="w-5 h-5 mt-[2px]"
                />
                AI agent Custom Resume (10 jobs/month)
              </li>
              <li className="flex items-start gap-2 text-white">
                <img
                  src={checkMark}
                  alt="Check icon"
                  className="w-5 h-5 mt-[2px]"
                />
                Auto apply AI agent (10 jobs/month)
              </li>
              <li className="flex items-start gap-2 text-white">
                <img
                  src={checkMark}
                  alt="Check icon"
                  className="w-5 h-5 mt-[2px]"
                />
                Manual Custom Resume (10/day)
              </li>
              <li className="flex items-start gap-2 text-white">
                <img
                  src={checkMark}
                  alt="Check icon"
                  className="w-5 h-5 mt-[2px]"
                />
                Cover letter generator (Unlimited)
              </li>
              <li className="flex items-start gap-2 text-white">
                <img
                  src={checkMark}
                  alt="Check icon"
                  className="w-5 h-5 mt-[2px]"
                />
                Personalized job listings (25/search)
              </li>
              <li className="flex items-start gap-2 text-white">
                <img
                  src={checkMark}
                  alt="Check icon"
                  className="w-5 h-5 mt-[2px]"
                />
                All Free plan features
              </li>
            </ul>
          </div>
        </div>

        {/* Card 3: Premium Plan */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              $25 monthly
            </h3>
            <div className="inline-block bg-[#3F33C0] text-white text-xs px-2 py-1 rounded mt-1">
              Save 50%
            </div>
            <hr className="my-6" />
            <h4 className="text-4xl font-bold text-gray-900">Premium</h4>
            <p className="text-sm text-gray-600 mt-2">Complete solution for serious job seekers</p>
          </div>
          <div className="mt-6">
            <button
              onClick={redirect}
              className="w-full px-6 py-3 border border-[#3F33C0] text-[#3F33C0] font-semibold rounded-md hover:bg-[#3F33C0] hover:text-white transition-colors"
            >
              Upgrade Now
            </button>
            <div className="mt-3 flex items-center justify-center gap-2">
              <img src={checkMark} alt="Check icon" className="w-5 h-5" />
              <span className="text-sm text-gray-600">
                100% money‑back guarantee
              </span>
            </div>
            {/* Features List */}
            <ul className="mt-5 space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <img
                  src={checkMark}
                  alt="Check icon"
                  className="w-5 h-5 mt-[2px]"
                />
                AI agent Custom Resume (30 jobs/month)
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <img
                  src={checkMark}
                  alt="Check icon"
                  className="w-5 h-5 mt-[2px]"
                />
                Auto apply AI agent (60 jobs/month)
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <img
                  src={checkMark}
                  alt="Check icon"
                  className="w-5 h-5 mt-[2px]"
                />
                Manual Custom Resume (Unlimited)
              </li>

              <li className="flex items-start gap-2 text-gray-700">
                <img
                  src={checkMark}
                  alt="Check icon"
                  className="w-5 h-5 mt-[2px]"
                />
                Personalized job listings (Unlimited)
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <img
                  src={checkMark}
                  alt="Check icon"
                  className="w-5 h-5 mt-[2px]"
                />
                All Starter plan features
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};