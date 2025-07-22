"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];

    // Define gtag function
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    // Initialize Google Analytics
    window.gtag("js", new Date());
    window.gtag("config", "G-H8NX7J7JFK");

    // Load the Google Analytics script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-H8NX7J7JFK";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup function to remove script if component unmounts
      const scripts = document.querySelectorAll(
        'script[src*="googletagmanager"]'
      );
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return null; // This component doesn't render anything
}
