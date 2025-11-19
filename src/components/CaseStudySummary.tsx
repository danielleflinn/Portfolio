import React from 'react';
interface CaseStudySummaryProps {
  title: string;
  description: string;
  background: string;
  timeline: string;
  role: string;
  methods: string[];
  impact: string;
  image: string;
}
export function CaseStudySummary({
  title,
  description,
  background,
  timeline,
  role,
  methods,
  impact,
  image
}: CaseStudySummaryProps) {
  return <div className="w-full bg-white" data-case-study-summary>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Image column - appears first on mobile, second on desktop */}
          <div className="w-full md:w-2/5 md:order-2 flex flex-col gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg bg-[#FFFAF5]">
              <img src={image} alt={title} className="w-full h-auto object-contain" />
            </div>
            {/* Background Section - appears here on desktop only */}
            <div className="hidden md:block p-4 bg-[#FFFAF5] rounded-lg border border-[#FFE8D9]">
              <h3 className="font-semibold text-gray-800 mb-2">Background</h3>
              <p className="text-gray-600">{background}</p>
            </div>
          </div>
          {/* Content column - appears second on mobile, first on desktop */}
          <div className="w-full md:w-3/5 md:order-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Timeline */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Timeline</h3>
                <p className="text-gray-600">{timeline}</p>
              </div>
              {/* Role */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Role</h3>
                <p className="text-gray-600">{role}</p>
              </div>
              {/* Methods */}
              <div className="sm:col-span-2">
                <h3 className="font-semibold text-gray-800 mb-2">Methods</h3>
                <div className="flex flex-wrap gap-2">
                  {methods.map((method, idx) => <span key={idx} className="bg-[#FFF0E8] text-[#C3471D] text-sm px-3 py-1 rounded-full">
                      {method}
                    </span>)}
                </div>
              </div>
              {/* Impact */}
              <div className="sm:col-span-2">
                <h3 className="font-semibold text-gray-800 mb-1">Impact</h3>
                <p className="text-gray-600">{impact}</p>
              </div>
            </div>
            {/* Background Section - appears here on mobile only */}
            <div className="md:hidden mt-6 p-4 bg-[#FFFAF5] rounded-lg border border-[#FFE8D9]">
              <h3 className="font-semibold text-gray-800 mb-2">Background</h3>
              <p className="text-gray-600">{background}</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}