import React, { useEffect } from "react";

type AutoCloseModalProps = {
  message: string;
  onClose: () => void;
  type?: "success" | "error";
};

export const AutoCloseModal: React.FC<AutoCloseModalProps> = ({ message, onClose, type = "success", }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose, message]);

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-md shadow-lg z-50
        ${type === "success" ? "border-green-500 bg-white" : ""}
        ${type === "error" ? "border-red-500 bg-white" : ""}
        border-4
      `}
      role="alert"
    >
      <div className="flex items-center space-x-2">

        {/* //! to show succcess! */}
        {type === "success" && (
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}

        {/* //! to show error! */}
        {type === "error" && (
          <svg
            className="w-6 h-6 text-red-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
        <p className={`text-gray-700 ${type === "error" ? "text-red-600" : ""}`}>
          {message}
        </p>
      </div>
    </div>
  );
};
