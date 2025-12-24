import React from 'react';
import { Clock, MapPin, Users } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Clock,
      title: 'Opening Hours',
      description: 'Mon-Fri: 7am - 10pm\nSat-Sun: 8am - 11pm'
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Downtown District\nEasy to find & access'
    },
    {
      icon: Users,
      title: 'Capacity',
      description: 'Intimate dining for 60\nPrivate events available'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Placeholder */}
          <div className="h-96 border-2 border-dashed border-gray-300 flex items-center justify-center bg-white">
            <div className="text-center">
              <div className="w-24 h-24 border-2 border-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">☕</span>
              </div>
              <p className="text-gray-400">About Image Placeholder</p>
            </div>
          </div>

          {/* About Content */}
          <div>
            <div className="mb-4 inline-block px-4 py-2 border border-[var(--color-border)]">
              <span className="text-sm text-[var(--color-accent)]">About Us</span>
            </div>
            <h2 className="mb-6">The LEVERA Story</h2>
            <p className="mb-4 text-gray-600">
              Founded on the principles of quality, authenticity, and community, LEVERA brings 
              together the best of cafe culture and fine dining.
            </p>
            <p className="mb-6 text-gray-600">
              Our passionate team sources the finest ingredients and crafts each dish with care, 
              creating memorable experiences for every guest.
            </p>
            <button className="px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-[var(--color-border)] p-6 text-center">
              <feature.icon className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-4" />
              <h3 className="mb-3 text-xl">{feature.title}</h3>
              <p className="text-gray-600 whitespace-pre-line">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
