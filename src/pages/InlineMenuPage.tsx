import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
export function InlineMenuPage() {
  return <div className="w-full min-h-screen bg-[#FFFAF5]">
      <Navbar />
      <main className="w-full">
        <section className="w-full py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Elevating the Bitwarden Autofill Experience
            </h1>
            <p className="text-lg text-gray-600">
              Improving user satisfaction and adoption iteratively by increasing
              usability of Bitwarden save and fill by delivering the #1
              community requested feature.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}