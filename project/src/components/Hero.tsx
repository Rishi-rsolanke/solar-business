import { ArrowDown, Sun, BadgeIndianRupee, ShieldCheck, TrendingUp } from 'lucide-react';

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-950"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/38171120/pexels-photo-38171120.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
          alt="Rooftop solar panels"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/85 to-energy-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      </div>

      {/* Decorative sun glow */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-solar-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-energy-500/15 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-solar-500/15 border border-solar-500/30 backdrop-blur-sm mb-6 animate-fade-up">
            <Sun className="w-4 h-4 text-solar-400" />
            <span className="text-solar-400 text-sm font-medium">
              PM-Surya Ghar Yojana | Authorized Partner
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Aapla Ghar,<br />
            <span className="text-shine">Aapli Bijli,</span><br />
            Zero Bill! <span className="inline-block animate-float">⚡</span>
          </h1>

          {/* Sub-header */}
          <p
            className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Get up to <span className="text-solar-400 font-semibold">₹78,000 Government Subsidy</span> under
            PM-Surya Ghar Yojana. Premium Brand Installation{' '}
            <span className="text-white font-semibold">(Loom Solar, Waaree, UTL & Adani)</span> with{' '}
            <span className="text-energy-400 font-semibold">25 Years Warranty</span> across Maharashtra.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#calculator"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-solar-400 to-solar-600 text-navy-950 font-bold text-base shadow-2xl shadow-solar-500/40 hover:scale-105 hover:shadow-solar-500/50 transition-all"
            >
              Get Free Savings Report (DM Bill)
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-base hover:bg-white/20 transition-all"
            >
              Explore Benefits
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            {[
              { icon: BadgeIndianRupee, value: '₹78,000', label: 'Max Subsidy' },
              { icon: ShieldCheck, value: '25 Years', label: 'Warranty' },
              { icon: TrendingUp, value: 'Zero Bill', label: 'Guaranteed' },
            ].map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="flex flex-col items-center sm:items-start gap-1 p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-solar-500/30 transition-colors"
                >
                  <Icon className="w-5 h-5 text-solar-400 mb-1" />
                  <span className="text-lg sm:text-xl font-bold text-white">{badge.value}</span>
                  <span className="text-xs text-gray-400">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
