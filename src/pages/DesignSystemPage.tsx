import React, { Component } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
export function DesignSystemPage() {
  return <div className="w-full min-h-screen bg-[#FFFAF5]">
      <Navbar />
      <main className="w-full">
        <section className="w-full py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Unifying the Bitwarden Design Language
            </h1>
            <p className="text-lg text-gray-600">
              Improving user satisfaction and internal design and development
              experience through establishing an atomic Design System and
              Component Library.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}