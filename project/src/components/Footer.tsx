import { Sun, Heart, Phone, MapPin, User } from 'lucide-react';
import { BUSINESS } from '@/lib/businessInfo';

function Footer() {
  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-solar-400 via-energy-500 to-solar-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-solar-400 to-solar-600 flex items-center justify-center">
                <Sun className="w-6 h-6 text-navy-900" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-lg">{BUSINESS.name}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted solar partner across Maharashtra. Premium installations with leading
              brands, backed by 25 years of warranty.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-solar-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Benefits', href: '#benefits' },
                { label: 'Cost Calculator', href: '#calculator' },
                { label: 'Apply Now', href: '#apply' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-solar-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-solar-400">Contact Us</h4>
            <div className="space-y-3">
              {BUSINESS.contacts.map((contact) => (
                <a
                  key={contact.phone}
                  href={`tel:+91${contact.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-solar-500/30 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-solar-500/15 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-solar-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-gray-400" />
                      {contact.name}
                    </p>
                    <p className="text-sm text-gray-300 group-hover:text-solar-400 transition-colors">
                      +91 {contact.display}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Address & Partners */}
          <div>
            <h4 className="font-display font-bold text-base mb-4 text-solar-400">Our Address</h4>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 mb-6">
              <MapPin className="w-5 h-5 text-solar-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-300 leading-relaxed">{BUSINESS.address}</p>
            </div>

            <h4 className="font-display font-bold text-base mb-3 text-solar-400">Brand Partners</h4>
            <div className="flex flex-wrap gap-2">
              {BUSINESS.brandPartners.map((brand) => (
                <span
                  key={brand}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-gray-200"
                >
                  {brand}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4">Serving All Maharashtra ☀️</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 space-y-4">
          <p className="font-display font-bold text-center text-lg">
            {BUSINESS.name} © {BUSINESS.copyrightYear} <span className="text-gray-500 font-normal">|</span>{' '}
            <span className="text-solar-400">{BUSINESS.tagline}.</span>
          </p>
          <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-gray-400">Disclaimer:</strong> Warranties
            are fulfilled directly by brand partners ({BUSINESS.brandPartners.join(', ')}).
          </p>
          <p className="text-center text-xs text-gray-600 flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
