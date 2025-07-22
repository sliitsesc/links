"use client";

import { useEffect } from "react";

export default function SEDay25() {
  useEffect(() => {
    // Client-side redirect that works on all platforms
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfOM8A1A819VNWHNjj8RU0b7Olgu7tjPqwqYsSSB5phca8UGQ/viewform";

    // Immediate redirect
    window.location.replace(googleFormUrl);
  }, []);

  // This component also includes a meta refresh as a backup
  // and manual link in case JavaScript is disabled
  return (
    <>
      <meta
        httpEquiv="refresh"
        content={`0; url=https://docs.google.com/forms/d/e/1FAIpQLSfOM8A1A819VNWHNjj8RU0b7Olgu7tjPqwqYsSSB5phca8UGQ/viewform`}
      />
      <div className="min-h-screen bg-[#131313ba] flex items-center justify-center">
        <div className="text-center text-white max-w-md">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
          <p className="text-lg mb-6">Taking you to SE Day 2025 registration</p>
          <p className="text-sm text-gray-300">
            If you are not redirected automatically,
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfOM8A1A819VNWHNjj8RU0b7Olgu7tjPqwqYsSSB5phca8UGQ/viewform"
              className="text-blue-400 underline ml-1">
              click here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
