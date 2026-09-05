"use client";

import React from "react";

interface NeonButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  onClick,
  children = "Download CV",
}) => {
  return (
    <>
      <button
        onClick={() => window.open('/CV_Document.pdf')}
        style={{
          padding: "15px 40px",
          fontSize: "18px",
          fontWeight: 600,
          color: "#00d4ff",
          background: "transparent",
          border: "2px solid #00d4ff",
          borderRadius: "8px",
          cursor: "pointer",
          textTransform: "uppercase",
          letterSpacing: "2px",
          transition: "all 0.3s ease",
          boxShadow:
            "0 0 10px rgba(0, 212, 255, 0.3), inset 0 0 10px rgba(0, 212, 255, 0.1)",
          textShadow: "0 0 10px rgba(0, 212, 255, 0.5)",
          animation: "neonPulse 2s ease-in-out infinite",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#ffffff";
          e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)";
          e.currentTarget.style.boxShadow =
            "0 0 20px rgba(0, 212, 255, 0.6), 0 0 40px rgba(0, 212, 255, 0.4), 0 0 60px rgba(0, 212, 255, 0.2), inset 0 0 20px rgba(0, 212, 255, 0.2)";
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.textShadow = "0 0 20px rgba(0, 212, 255, 0.8)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#00d4ff";
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.boxShadow =
            "0 0 10px rgba(0, 212, 255, 0.3), inset 0 0 10px rgba(0, 212, 255, 0.1)";
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.textShadow = "0 0 10px rgba(0, 212, 255, 0.5)";
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "scale(0.95)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
        }}
      >
        {children}
      </button>

      {/* Keyframes for the pulsating animation */}
      <style>{`
        @keyframes neonPulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(0, 212, 255, 0.3), inset 0 0 10px rgba(0, 212, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3), inset 0 0 20px rgba(0, 212, 255, 0.2);
          }
        }
      `}</style>
    </>
  );
};

export default NeonButton;
