import React, { useState } from "react";

const ZariSareeProcess = () => {
  const [visibleStep, setVisibleStep] = useState(null);
  const [isVisible, setIsVisible] = useState(true); // State to control visibility of the entire component

  const toggleStep = (step) => {
    setVisibleStep(visibleStep === step ? null : step); // Toggle visibility of specific steps
  };

  const closeComponent = () => {
    setIsVisible(false); // Close the component when the close button is clicked
  };

  if (!isVisible) return null; // If component is not visible, render nothing

  return (
    <div className="container mx-auto max-w-4xl p-8 mt-16 bg-white rounded-xl shadow-xl relative">
      <button
        onClick={closeComponent}
        className="absolute top-4 right-4 text-xl text-gray-600 hover:text-gray-900"
      >
        &#x2715; {/* This is the "X" close icon */}
      </button>

      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-8 text-center">
        Our Zari Saree Selling Process
      </h2>

      <div className="space-y-12">
        {/* Step 1: Secure Packing */}
        <div
          className="p-8 rounded-xl shadow-xl bg-gradient-to-r from-pink-100 to-purple-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          onClick={() => toggleStep(1)}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 1: Secure Packing</h3>
          {visibleStep === 1 && (
            <p className="text-gray-600">
              We provide a Secure Packing Pouch and Tamper-Proof Cover for your Zari sarees once you place your order. This ensures that your items are protected during transit.
            </p>
          )}
        </div>

        {/* Step 2: Packing */}
        <div
          className="p-8 rounded-xl shadow-xl bg-gradient-to-r from-green-100 to-teal-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          onClick={() => toggleStep(2)}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 2: Packing</h3>
          {visibleStep === 2 && (
            <p className="text-gray-600">
              Place your Zari sarees inside the provided pouch and seal it securely with the Tamper-Proof Cover to ensure safe delivery.
            </p>
          )}
        </div>

        {/* Step 3: Courier Pickup */}
        <div
          className="p-8 rounded-xl shadow-xl bg-gradient-to-r from-blue-100 to-indigo-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          onClick={() => toggleStep(3)}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 3: Courier Pickup</h3>
          {visibleStep === 3 && (
            <p className="text-gray-600">
              Relax as our courier partner collects your securely packed items directly from your doorstep, nationwide.
            </p>
          )}
        </div>

        {/* Step 4: Quality Inspection */}
        <div
          className="p-8 rounded-xl shadow-xl bg-gradient-to-r from-yellow-100 to-orange-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          onClick={() => toggleStep(4)}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 4: Quality Inspection</h3>
          {visibleStep === 4 && (
            <p className="text-gray-600">
              Upon arrival, your Zari sarees will undergo a thorough Quality Inspection. Following the evaluation, we will offer you a Selling Price based on the Quality condition of your Zari items.
            </p>
          )}
        </div>

        {/* Step 5: Payment */}
        <div
          className="p-8 rounded-xl shadow-xl bg-gradient-to-r from-purple-100 to-pink-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          onClick={() => toggleStep(5)}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 5: Payment</h3>
          {visibleStep === 5 && (
            <p className="text-gray-600">
              Receive your payment promptly through your preferred method - bank transfer or UPI - ensuring a secure and hassle-free transaction.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ZariSareeProcess;
