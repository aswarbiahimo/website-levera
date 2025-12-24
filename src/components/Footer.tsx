import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 border-2 border-[var(--color-accent)] flex items-center justify-center mr-3">
                <span className="text-[var(--color-accent)]">L</span>
              </div>
              <h3 className="text-xl">LEVERA</h3>
            </div>
            <p className="text-gray-400 text-sm">
              A perfect blend of cafe culture and fine dining experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-[var(--color-accent)]" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-[var(--color-accent)]" />
                <span className="text-gray-400">hello@levera.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-[var(--color-accent)]" />
                <span className="text-gray-400">123 Main Street<br />Downtown District</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg mb-4">Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7am - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>8am - 11pm</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 LEVERA. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
