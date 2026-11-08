import { useState, useMemo } from 'react';
import {
  Calculator as CalcIcon,
  Sun,
  BadgeIndianRupee,
  TrendingDown,
  PiggyBank,
  CalendarClock,
  Zap,
} from 'lucide-react';

interface SolarCalculatorProps {
  bill: number;
  setBill: (n: number) => void;
}

export interface CalculatorResults {
  plantSize: number;
  investment: number;
  subsidy: number;
  effectiveCost: number;
  monthlySavings: number;
}

export function useCalculator(bill: number): CalculatorResults {
  return useMemo(() => {
    const safeBill = Math.max(0, isNaN(bill) ? 0 : bill);
    const rawSize = safeBill / 1000;
    const plantSize = Math.min(10, Math.max(1, Math.round(rawSize)));
    const investment = plantSize * 66333.3333333;
    const subsidy = plantSize === 1 ? 30000 : plantSize === 2 ? 60000 : 78000;
    const effectiveCost = investment - subsidy;
    const monthlySavings = safeBill;
    return { plantSize, investment, subsidy, effectiveCost, monthlySavings };
  }, [bill]);
}

function SolarCalculator({ bill, setBill }: SolarCalculatorProps) {
  const results = useCalculator(bill);

  return (
    <section
      id="calculator"
      className="py-20 md:py-28 bg-gradient-to-br from-navy-900 via-navy-950 to-energy-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-solar-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-energy-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-solar-500/15 text-solar-400 text-sm font-semibold mb-4 border border-solar-500/20">
            <CalcIcon className="w-4 h-4 inline mr-1" /> Solar Savings Calculator
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
            How Much Will You Save?
          </h2>
          <p className="text-gray-400 text-lg">
            Enter your monthly electricity bill to get a personalized solar plan instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Input panel */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
            <label className="block text-white font-semibold text-lg mb-2">
              Monthly Electricity Bill
            </label>
            <p className="text-gray-400 text-sm mb-6">
              Check your latest electricity bill and enter the total amount here.
            </p>

            {/* Input with rupee symbol */}
            <div className="relative mb-6">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-solar-400">
                ₹
              </span>
              <input
                type="number"
                min={0}
                max={100000}
                step={100}
                value={bill || ''}
                onChange={(e) => setBill(parseInt(e.target.value) || 0)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-navy-950/60 text-white text-2xl font-bold border-2 border-white/10 focus:border-solar-500 focus:outline-none transition-colors placeholder:text-gray-600"
                placeholder="2000"
              />
            </div>

            {/* Slider */}
            <input
              type="range"
              min={500}
              max={10000}
              step={100}
              value={Math.min(10000, Math.max(500, bill || 500))}
              onChange={(e) => setBill(parseInt(e.target.value))}
              className="w-full accent-solar-500 cursor-pointer mb-2"
            />
            <div className="flex justify-between text-xs text-gray-500 mb-6">
              <span>₹500</span>
              <span>₹10,000</span>
            </div>

            {/* Quick presets */}
            <div className="flex flex-wrap gap-2">
              {[1000, 2000, 3000, 5000].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setBill(preset)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    bill === preset
                      ? 'bg-solar-500 text-navy-950 shadow-lg shadow-solar-500/30'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  ₹{preset.toLocaleString('en-IN')}
                </button>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-energy-500/10 border border-energy-500/20 flex items-start gap-3">
              <Sun className="w-5 h-5 text-energy-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-300">
                Based on your bill, we recommend a{' '}
                <span className="text-solar-400 font-bold">{results.plantSize} KW</span> solar plant.
                Calculations update live as you change the input.
              </p>
            </div>
          </div>

          {/* Results panel */}
          <div className="grid gap-4 sm:gap-5">
            {/* Plant Size */}
            <ResultCard
              icon={Zap}
              label="Recommended Plant Size"
              value={`${results.plantSize} KW`}
              accent="text-solar-400"
              sub="Optimal for your consumption"
            />

            {/* Investment */}
            <ResultCard
              icon={BadgeIndianRupee}
              label="Approx Investment (Before Subsidy)"
              value={`₹${results.investment.toLocaleString('en-IN')}`}
              accent="text-white"
              sub={`₹65,000 × ${results.plantSize} KW`}
            />

            {/* Subsidy */}
            <ResultCard
              icon={TrendingDown}
              label="Govt Subsidy Amount"
              value={`₹${results.subsidy.toLocaleString('en-IN')}`}
              accent="text-energy-400"
              sub="Direct bank transfer"
              highlight
            />

            {/* Effective Cost */}
            <div className="bg-gradient-to-br from-solar-500/20 to-solar-600/10 backdrop-blur-xl rounded-2xl p-5 border border-solar-500/30 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-solar-500/30 flex items-center justify-center">
                    <PiggyBank className="w-6 h-6 text-solar-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Your Effective Cost</p>
                    <p className="text-2xl font-bold text-white">
                      ₹{results.effectiveCost.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">After subsidy</p>
                  <p className="text-sm text-solar-400 font-semibold">
                    Save {Math.round((results.subsidy / results.investment) * 100)}%
                  </p>
                </div>
              </div>
            </div>

            {/* Two-column: Savings + Payback */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <ResultCard
                icon={BadgeIndianRupee}
                label="Monthly Savings"
                value={`₹${results.monthlySavings.toLocaleString('en-IN')}`}
                accent="text-energy-400"
                sub="Equals your bill"
              />
              <ResultCard
                icon={CalendarClock}
                label="Payback Period"
                value="3 Years (Paisa Vasool!)"
                accent="text-solar-400"
                sub="Then free for 22+ yrs"
                smallValue
              />
            </div>
          </div>
        </div>

        {/* CTA below calculator */}
        <div className="text-center mt-10">
          <p className="text-gray-300 mb-4">Like what you see? Get your custom report now!</p>
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-solar-400 to-solar-600 text-navy-950 font-bold text-base shadow-2xl shadow-solar-500/30 hover:scale-105 transition-all"
          >
            Apply Now & Send Bill via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

interface ResultCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  accent: string;
  sub: string;
  highlight?: boolean;
  smallValue?: boolean;
}

function ResultCard({ icon: Icon, label, value, accent, sub, highlight, smallValue }: ResultCardProps) {
  return (
    <div
      className={`backdrop-blur-xl rounded-2xl p-5 border shadow-xl transition-all hover:scale-[1.02] ${
        highlight
          ? 'bg-energy-500/10 border-energy-500/30'
          : 'bg-white/5 border-white/10'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              highlight ? 'bg-energy-500/20' : 'bg-white/10'
            }`}
          >
            <Icon className={`w-6 h-6 ${accent}`} />
          </div>
          <div>
            <p className="text-sm text-gray-400">{label}</p>
            <p className={`font-bold ${smallValue ? 'text-lg' : 'text-2xl'} ${accent}`}>{value}</p>
          </div>
        </div>
        <span className="text-xs text-gray-500 hidden sm:block">{sub}</span>
      </div>
    </div>
  );
}

export default SolarCalculator;
