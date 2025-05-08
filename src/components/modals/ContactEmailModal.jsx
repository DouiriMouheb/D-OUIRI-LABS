import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const ContactEmailModal = ({ isOpen, onClose, onSubmit }) => {
  const { t } = useTranslation(); // Initialize the translation hook

  const [formData, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    meetingDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setState({
      name: "",
      email: "",
      phone: "",
      message: "",
      meetingDate: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-xl">
        <div className="p-5">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <h3 className="text-xl font-semibold text-[#3385c6] mb-3">
            {t("contactModal.title")}
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
            {/* Left Column */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                {t("contactModal.name")}
              </label>
              <input
                type="name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#3385c6] focus:border-[#3385c6]"
                placeholder={t("contactModal.namePlaceholder")}
              />
            </div>

            {/* Right Column */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {t("contactModal.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#3385c6] focus:border-[#3385c6]"
                placeholder={t("contactModal.emailPlaceholder")}
              />
            </div>

            {/* Left Column */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                {t("contactModal.phone")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#3385c6] focus:border-[#3385c6]"
                placeholder={t("contactModal.phonePlaceholder")}
              />
            </div>

            {/* Right Column */}
            <div>
              <label
                htmlFor="meetingDate"
                className="block text-sm font-medium text-gray-700"
              >
                {t("contactModal.preferredDate")}
              </label>
              <input
                type="date"
                id="meetingDate"
                name="meetingDate"
                value={formData.meetingDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#3385c6] focus:border-[#3385c6]"
              />
            </div>

            {/* Full Width */}
            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                {t("contactModal.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="2"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#3385c6] focus:border-[#3385c6]"
                placeholder={t("contactModal.messagePlaceholder")}
              ></textarea>
            </div>

            {/* Full Width Button */}
            <div className="col-span-2 mt-3">
              <button
                type="submit"
                className="w-full bg-[#3385c6] text-white px-4 py-2 rounded-md font-medium hover:bg-[#2b6fa7] transition-colors"
              >
                {t("contactModal.submitButton")}
              </button>

              <p className="mt-2 text-center text-xs text-gray-500">
                {t("contactModal.confirmation")}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactEmailModal;
