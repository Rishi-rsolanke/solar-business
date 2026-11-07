import { Zap, Landmark, ShieldCheck } from 'lucide-react';
import { BUSINESS } from '@/lib/businessInfo';

function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: '100% Zero Bill',
      desc: '1KW saves ~150 units/month. Stop donating money to the electricity board.',
      accent: 'from-solar-400 to-solar-600',
      glow: 'shadow-solar-500/20',
    },
    {
      icon: Landmark,
      title: 'Government Subsidy',
      desc: 'Direct bank transfer up to ₹78,000. Full paperwork managed by us.',
      accent: 'from-energy-400 to-energy-600',
      glow: 'shadow-energy-500/20',
    },
    {
      icon: ShieldCheck,
      title: '25 Years Warranty',
      desc: 'Zero maintenance, high-efficiency solar panels for lifetime peace of mind.',
      accent: 'from-navy-400 to-navy-600',
      glow: 'shadow-navy-500/20',
    },
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-solar-100 rounded-full blur-3xl opacity-50 -z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-energy-100 text-energy-700 text-sm font-semibold mb-4">
            Why Choose {BUSINESS.name}
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 mb-4">
            Benefits That Power Your Savings
          </h2>
          <p className="text-gray-600 text-lg">
            Premium solar solutions designed for Maharashtra homes and businesses.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${benefit.accent} opacity-0 group-hover:opacity-5 transition-opacity`}
                />

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.accent} flex items-center justify-center shadow-lg ${benefit.glow} mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-2xl text-navy-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">{benefit.desc}</p>

                {/* Number indicator */}
                <div className="absolute top-6 right-6 text-6xl font-display font-extrabold text-gray-50 group-hover:text-gray-100 transition-colors select-none">
                  {i + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
