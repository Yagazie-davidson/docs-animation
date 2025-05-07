"use client";

import type React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

interface A4DocumentProps {
  children: React.ReactNode;
  companyName?: string;
  companyAddress?: string;
  companyPhone?: string;
  companyEmail?: string;
  showLetterhead?: boolean;
  className?: string;
}

export function A4Document({
  children,
  companyName = "Acme Corporation",
  companyAddress = "123 Business Street, Corporate City, 12345",
  companyPhone = "+1 (555) 123-4567",
  companyEmail = "contact@acmecorp.com",
  showLetterhead = true,
  className = "",
}: A4DocumentProps) {
  return (
    <div
      className={`w-full max-w-[210mm] h-auto bg-white shadow-lg rounded-2xl overflow-hidden ${className}`}
      style={{
        aspectRatio: "210/297", // A4 aspect ratio
      }}
    >
      <div className="p-8 md:p-12 h-full flex flex-col">
        {showLetterhead && (
          <>
            <div className="flex justify-between items-start md:items-center border-b border-black pb-6 mb-8">
              <div className="text-left">
                <h1 className="text-xl font-bold text-gray-800">
                  {companyName}
                </h1>
              </div>
              <div className="text-right space-y-1">
                <div className="flex items-center justify-end text-sm text-gray-600">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  <span>{companyAddress}</span>
                </div>
                <div className="flex items-center justify-end text-sm text-gray-600">
                  <Phone className="h-3.5 w-3.5 mr-1" />
                  <span>{companyPhone}</span>
                </div>
                <div className="flex items-center justify-end text-sm text-gray-600">
                  <Mail className="h-3.5 w-3.5 mr-1" />
                  <span>{companyEmail}</span>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="flex-1">{children}</div>

        <div className="mt-auto pt-6 border-t border-black text-xs text-gray-500 text-center">
          <p>
            {companyName} • {companyAddress} • {companyPhone}
          </p>
        </div>
      </div>
    </div>
  );
}
