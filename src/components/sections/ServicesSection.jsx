import React, { useEffect, useRef, useState } from "react";
import { Database, CreditCard } from "lucide-react";
import Footer from "../bars/Footer";
import ContactEmailModal from "../modals/ContactEmailModal";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [isShaking, setIsShaking] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle modal submission
  const handleModalSubmit = (formData) => {
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    // e.g., using fetch() or axios to send a POST request
  };

  // Array of texts to cycle through - now using translations
  const callToActionTexts = [
    t("services.callToAction.text1"),
    t("services.callToAction.text2"),
    t("services.callToAction.text3"),
    t("services.callToAction.text4"),
    t("services.callToAction.text5"),
    t("services.callToAction.text6"),
  ];

  const services = [
    {
      title: t("services.webDevelopment"),
    },
    {
      title: t("services.uiUxDesign"),
    },
    {
      title: t("services.databaseSolutions"),
    },
    /*{
      title: t("services.dataAnalytics"),
    },
    {
      title: t("services.cyberSecurity"),
    },
    {
      title: t("services.crmSolutions"),
    },*/
    {
      title: t("services.cloudSolutions"),
    } /*
    {
      title: t("services.posSolutions.title"),
      description: t("services.posSolutions.description"),
      icon: <Database className="h-8 w-8 text-blue-600" />,
    },
    {
      title: t("services.contactlessPayment.title"),
      description: t("services.contactlessPayment.description"),
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    },*/,
  ];

  // Double services for infinite loop
  const repeatedServices = [...services, ...services];

  // Effect for carousel scrolling
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const SCROLL_SPEED = 0.5;
    let animationFrameId;

    const scroll = () => {
      if (!carousel || isPaused || isDragging) {
        animationFrameId = requestAnimationFrame(scroll);
        return;
      }

      carousel.scrollLeft += SCROLL_SPEED;

      // When we reach halfway (end of first set), reset to start
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging]);

  // Effect for text rotation and blinking
  useEffect(() => {
    // Text blinking effect
    const blinkInterval = setInterval(() => {
      setTextVisible(false);

      // After a brief pause, show the next text
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) =>
          prevIndex === callToActionTexts.length - 1 ? 0 : prevIndex + 1
        );
        setTextVisible(true);
      }, 500); // Half a second for the fade effect
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  // Effect for button shaking
  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setIsShaking(true);

      // Stop shaking after a short duration
      setTimeout(() => {
        setIsShaking(false);
      }, 820); // Shake for 820ms (matches the CSS animation duration)
    }, 5000); // Trigger shake every 5 seconds

    return () => clearInterval(shakeInterval);
  }, []);

  // Drag/Touch Handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);
  const handleWheel = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1500);
  };

  return (
    <div id="services" className="min-h-screen bg-[#0A0E1A] flex flex-col">
      <div className="max-w-7xl mx-auto p-4 w-full">
        <div className="text-center">
          <p className="mt-2 text-3xl font-bold text-[#B3D7F0]">
            {t("services.title")}
          </p>
        </div>

        <div className="mt-16 relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto py-4 hide-scrollbar touch-pan-x select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex space-x-6 px-4">
              {repeatedServices.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 sm:w-72 p-6 hover:shadow-xl transition-shadow cursor-grab active:cursor-grabbing flex items-center justify-center"
                >
                  <div className="">
                    <h3 className="text-lg text-center font-semibold text-[#3385c6]">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blinking Call-to-Action Text */}
        <div className="text-center mt-12 mb-20">
          <p
            className={`mt-2 text-3xl font-bold text-[#B3D7F0] transition-opacity duration-500 ${
              textVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {callToActionTexts[currentTextIndex]}
          </p>
          <button
            className={`mt-4 bg-[#3385c6] text-white px-8 py-3 rounded-md font-medium hover:bg-gray-100 hover:text-[#3385c6] transition-colors ${
              isShaking ? "shake-animation" : ""
            }`}
            onClick={() => setIsModalOpen(true)} // Add onClick handler to open modal
          >
            {t("services.button")}
          </button>
          <p className="mt-2 text-sm text-gray-400">
            {t("services.freeSession")}
          </p>
        </div>
      </div>

      {/* Add the ContactEmailModal component */}
      <ContactEmailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />

      {/* Footer - Now positioned at the bottom */}
      <Footer />

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          10% {
            transform: translateX(-4px) rotate(-1deg);
          }
          20% {
            transform: translateX(4px) rotate(1deg);
          }
          30% {
            transform: translateX(-4px) rotate(-1deg);
          }
          40% {
            transform: translateX(4px) rotate(1deg);
          }
          50% {
            transform: translateX(-4px) rotate(-1deg);
          }
          60% {
            transform: translateX(4px) rotate(1deg);
          }
          70% {
            transform: translateX(-4px) rotate(-1deg);
          }
          80% {
            transform: translateX(2px) rotate(0.5deg);
          }
          90% {
            transform: translateX(-2px) rotate(-0.5deg);
          }
          100% {
            transform: translateX(0);
          }
        }

        .shake-animation {
          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;
