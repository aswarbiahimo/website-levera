import React from 'react';

interface HeroSectionProps {
  onViewMenu?: () => void;
}

export function HeroSection({ onViewMenu }: HeroSectionProps) {
  return (
    <section id="home" className="bg-gray-50 border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="mb-4 inline-block px-4 py-2 border border-[var(--color-border)]">
              <span className="text-sm text-[var(--color-accent)]">Est. 2024</span>
            </div>
            <h1 className="mb-6">
              Welcome to<br />
              <span className="text-[var(--color-accent)]">LEVERA</span>
            </h1>
            <p className="mb-8 text-gray-600 max-w-lg">
              Experience the perfect blend of artisanal coffee and exquisite cuisine in a warm, 
              inviting atmosphere. Where every meal tells a story.
            </p>
            <div className="flex gap-4">
              <button onClick={onViewMenu} className="px-8 py-3 bg-[var(--color-accent)] text-white hover:opacity-90 transition-opacity">
                View Menu
              </button>
              <button className="px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors">
                Book a Table
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="h-96 border-2 border-dashed border-gray-300 flex items-center justify-center bg-white">
            <div className="text-center">
              <div className="w-24 h-24 border-2 border-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">🍽️</span>
              </div>
              <p className="text-gray-400">Hero Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}