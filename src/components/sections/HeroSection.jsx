import React, { useState, useEffect } from "react";
import ParticlesBackground from "../animations/ParticlesBackground";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector";

const HeroSection = () => {
  const { t, i18n } = useTranslation();

  // Array of texts to cycle through - now using translation keys
  const textKeys = [
    "qualities.quality",
    "qualities.innovation",
    "qualities.excellence",
    "qualities.precision",
    "qualities.adaptability",
    "qualities.transparency",
    "qualities.efficiency",
    "qualities.expertise",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing, completed, deleting, or waiting

  useEffect(() => {
    let timer;
    // Get the translated text for the current key
    const currentFullText = t(textKeys[textIndex]);

    // Calculate timing to achieve approximately 30 seconds per text
    const typingSpeed = 80; // ms per character
    const deleteSpeed = 10; // ms per character (faster than typing)
    const displayTime = 5000; // time to display completed text
    const pauseTime = 1000; // time to pause before starting next text

    if (phase === "typing") {
      // Typing phase
      if (currentCharIndex < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev + currentFullText[currentCharIndex]);
          setCurrentCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Finished typing this text
        setPhase("completed");
      }
    } else if (phase === "completed") {
      // Text is fully displayed, wait before deleting
      timer = setTimeout(() => {
        setPhase("deleting");
      }, displayTime);
    } else if (phase === "deleting") {
      // Deleting phase
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Finished deleting
        setPhase("waiting");
      }
    } else if (phase === "waiting") {
      // Waiting before showing next text
      timer = setTimeout(() => {
        // Move to next text
        setTextIndex((prev) => (prev + 1) % textKeys.length);
        setCurrentCharIndex(0);
        setPhase("typing");
      }, pauseTime);
    }

    return () => clearTimeout(timer);
  }, [phase, currentCharIndex, displayText, textIndex, textKeys, t]);

  // Reset animation when language changes
  useEffect(() => {
    setDisplayText("");
    setCurrentCharIndex(0);
    setPhase("typing");
  }, [i18n.language]);

  return (
    <div className="bg-[#0A0E1A] min-h-screen flex items-center relative overflow-hidden">
      <ParticlesBackground />
      {/* Bottom half circle - repositioned on smaller screens */}
      <div className="absolute md:bottom-0 md:right-0 bottom-0 right-1/2 md:translate-x-1/4 md:translate-y-1/2 translate-x-1/2 translate-y-1/2">
        <div className="w-72 md:w-96 h-36 md:h-48 rounded-t-full bg-white opacity-5"></div>
        <div className="w-72 md:w-96 h-36 md:h-48 rounded-t-full bg-transparent border-t-4 border-l-4 border-r-4 border-white absolute top-0 left-0 opacity-10"></div>
        <div className="w-72 md:w-96 h-36 md:h-48 rounded-t-full bg-transparent border-t-2 border-l-2 border-r-2 border-white absolute top-0 left-0 opacity-20 animate-pulse"></div>
        <div className="w-72 md:w-96 h-36 md:h-48 rounded-t-full bg-transparent border-t border-l border-r border-white absolute top-0 left-0 opacity-30 shadow-[0_0_40px_10px_rgba(255,255,255,0.4)]"></div>
      </div>

      {/* Top half circle - repositioned on smaller screens */}
      <div className="absolute md:top-0 md:left-0 top-0 left-1/2 md:-translate-x-1/4 md:-translate-y-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-72 md:w-96 h-36 md:h-48 rounded-b-full bg-white opacity-5"></div>
        <div className="w-72 md:w-96 h-36 md:h-48 rounded-b-full bg-transparent border-b-4 border-l-4 border-r-4 border-white absolute top-0 left-0 opacity-10"></div>
        <div className="w-72 md:w-96 h-36 md:h-48 rounded-b-full bg-transparent border-b-2 border-l-2 border-r-2 border-white absolute top-0 left-0 opacity-20 animate-pulse"></div>
        <div className="w-72 md:w-96 h-36 md:h-48 rounded-b-full bg-transparent border-b border-l border-r border-white absolute top-0 left-0 opacity-30 shadow-[0_0_40px_10px_rgba(255,255,255,0.4)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 w-full z-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-16 lg:gap-24">
          {/* Left Column - Text Content */}
          <div className="md:w-5/12 text-center md:text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              <span className="block">{t("companyName")}</span>
              <span className="block text-[#3385c6]">
                {t("companySubtitle")}
              </span>
            </h1>

            {/* Fixed typing effect with proper visibility */}
            <div className="mt-8 text-xl md:text-2xl text-[#B3D7F0] h-10 md:h-12 relative">
              <p className="absolute left-0 right-0 text-center">
                {displayText}
                <span className="animate-pulse inline-block ml-1">|</span>{" "}
                {/* Blinking cursor */}
              </p>
            </div>
          </div>

          {/* Right Column - Button with fixed visibility */}
          <div className="md:w-5/12 flex flex-col items-center mt-20 md:mt-0 z-10">
            <a
              href="#services"
              className="bg-[#3385c6] text-white px-8 py-3 rounded-md font-medium block hover:bg-gray-100 hover:text-[#3385c6] transition-colors mb-6"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("ourServices")}
            </a>

            {/* Using the new LanguageSelector component */}
            <LanguageSelector className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
