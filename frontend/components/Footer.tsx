'use client';
import Image from 'next/image';
import { FaWhatsapp, FaTelegram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import ScrollLink from './ScrollLink';
import { trackWhatsAppClick, trackTelegramClick } from '../utils/facebookPixel';

export default function Footer() {
  return (
    <footer className="section-bg border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/brand/logo.png" alt="Adpion" width={100} height={30} />
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Premium Meta Advertising Solutions with transparent funding and 24/7 support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <ScrollLink targetId="services" className="block text-gray-400 hover:text-primary-400 transition-colors text-xs">
                Services
              </ScrollLink>
              <ScrollLink targetId="how-it-works" className="block text-gray-400 hover:text-primary-400 transition-colors text-xs">
                How It Works
              </ScrollLink>
              <ScrollLink targetId="contact" className="block text-gray-400 hover:text-primary-400 transition-colors text-xs">
                Contact
              </ScrollLink>
              <ScrollLink targetId="faq" className="block text-gray-400 hover:text-primary-400 transition-colors text-xs">
                FAQ
              </ScrollLink>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">Services</h3>
            <div className="space-y-2">
              <span className="block text-gray-400 text-xs">Meta Ad Accounts</span>
              <span className="block text-gray-400 text-xs">Account Management</span>
              <span className="block text-gray-400 text-xs">24/7 Support</span>
              <span className="block text-gray-400 text-xs">Compliance Support</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary-400 w-3 h-3 flex-shrink-0" />
                <a href="tel:+84762866888" className="text-gray-400 hover:text-primary-400 transition-colors text-xs">
                  +84 762 866 888
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary-400 w-3 h-3 flex-shrink-0" />
                <a href="mailto:contact@adpion.com" className="text-gray-400 hover:text-primary-400 transition-colors text-xs">
                  support@adpion.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary-400 w-3 h-3 flex-shrink-0" />
                <span className="text-gray-400 text-xs">SUITE C, LEVEL 7, WORLD TRUST TOWER, 50 STANLEY STREET, CENTRAL,HONG KONG</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="py-6 border-t border-gray-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://wa.me/+84762866888"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://t.me/adpion"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackTelegramClick}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <FaTelegram className="w-4 h-4" />
                Telegram
              </a>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-gray-400 text-xs">
                &copy; 2025 ADPION CO. LTD. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Premium Meta Advertising Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
