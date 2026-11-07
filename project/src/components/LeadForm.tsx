import { useState, useMemo } from 'react';
import { User, Phone, MapPin, Upload, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import type { CalculatorResults } from './SolarCalculator';
import { BUSINESS } from '@/lib/businessInfo';

const MAHARASHTRA_CITIES = [
  'Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane', 'Aurangabad',
  'Navi Mumbai', 'Solapur', 'Amravati', 'Kolhapur', 'Bhiwandi',
  'Malegaon', 'Jalgaon', 'Akola', 'Latur', 'Ahmednagar',
  'Chandrapur', 'Parbhani', 'Dhule', 'Ratnagiri', 'Buldhana',
  'Bhandara', 'Wardha', 'Yavatmal', 'Washim', 'Gadchiroli',
  'Chiplun', 'Satara', 'Sangli', 'Jalna', 'Other (Maharashtra)',
];

function LeadForm({ data }: { data: CalculatorResults }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [billFileName, setBillFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const whatsappLink = useMemo(() => {
    const message = `☀️ *${BUSINESS.name} - Solar Inquiry*

*Name:* ${name}
*WhatsApp:* ${phone}
*City:* ${city}
*Bill Uploaded:* ${billFileName || 'Not uploaded'}

--- *Calculated Solar Report* ---
*Recommended Plant Size:* ${data.plantSize} KW
*Approx Investment:* ₹${data.investment.toLocaleString('en-IN')}
*Govt Subsidy:* ₹${data.subsidy.toLocaleString('en-IN')}
*Your Effective Cost:* ₹${data.effectiveCost.toLocaleString('en-IN')}
*Monthly Savings:* ₹${data.monthlySavings.toLocaleString('en-IN')}
*Payback Period:* 3 Years (Paisa Vasool!)

Please share my Custom Feasibility Report! 🔆`;
    return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [name, phone, city, billFileName, data]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !city) return;
    window.open(whatsappLink, '_blank');
    setSubmitted(true);
  };

  return (
    <section
      id="apply"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* Decorative bg */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-energy-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-solar-100 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-energy-100 text-energy-700 text-sm font-semibold mb-4">
            <MessageCircle className="w-4 h-4 inline mr-1" /> Quick & Easy
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy-900 mb-4">
            Get Your Custom Feasibility Report in 10 Mins!
          </h2>
          <p className="text-gray-600 text-lg">
            Fill in your details and send your electricity bill via WhatsApp. Our solar expert will
            call you back with a personalized report.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-10">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 mx-auto rounded-full bg-energy-100 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-12 h-12 text-energy-600" />
              </div>
              <h3 className="font-display font-bold text-2xl text-navy-900 mb-3">
                Almost Done! Check WhatsApp
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                We've opened WhatsApp with your solar report pre-filled. Just hit send and our team
                will get back to you within 10 minutes!
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setPhone('');
                  setCity('');
                  setBillFileName(null);
                }}
                className="text-energy-600 font-semibold hover:text-energy-700 underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-navy-900 font-semibold text-sm mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-energy-500 focus:bg-white focus:outline-none transition-all text-navy-900"
                  />
                </div>
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-navy-900 font-semibold text-sm mb-2">
                  WhatsApp Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="10-digit mobile number"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-energy-500 focus:bg-white focus:outline-none transition-all text-navy-900"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block text-navy-900 font-semibold text-sm mb-2">
                  City (Maharashtra)
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <select
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-energy-500 focus:bg-white focus:outline-none transition-all text-navy-900 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select your city
                    </option>
                    {MAHARASHTRA_CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Upload Bill */}
              <div>
                <label className="block text-navy-900 font-semibold text-sm mb-2">
                  Upload Electricity Bill (Optional)
                </label>
                <label className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 hover:border-energy-400 hover:bg-energy-50 cursor-pointer transition-all">
                  <div className="w-10 h-10 rounded-lg bg-energy-100 flex items-center justify-center flex-shrink-0">
                    <Upload className="w-5 h-5 text-energy-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-navy-900">
                      {billFileName || 'Click to upload your latest bill'}
                    </span>
                    <p className="text-xs text-gray-500">PDF, JPG, or PNG accepted</p>
                  </div>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="sr-only"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      setBillFileName(file ? file.name : null);
                    }}
                  />
                </label>
              </div>

              {/* Summary preview */}
              <div className="p-4 rounded-xl bg-navy-50 border border-navy-100">
                <p className="text-xs font-semibold text-navy-700 uppercase tracking-wide mb-2">
                  Your Solar Report Preview
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-600">Plant Size: <span className="font-bold text-navy-900">{data.plantSize} KW</span></div>
                  <div className="text-gray-600">Subsidy: <span className="font-bold text-energy-600">₹{data.subsidy.toLocaleString('en-IN')}</span></div>
                  <div className="text-gray-600">Effective Cost: <span className="font-bold text-navy-900">₹{data.effectiveCost.toLocaleString('en-IN')}</span></div>
                  <div className="text-gray-600">Monthly Savings: <span className="font-bold text-solar-600">₹{data.monthlySavings.toLocaleString('en-IN')}</span></div>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-energy-500 to-energy-600 text-white font-bold text-lg shadow-xl shadow-energy-500/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-energy-500/40 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                Send Bill via WhatsApp
                <Send className="w-5 h-5" />
              </button>

              <p className="text-center text-xs text-gray-500">
                By submitting, you agree to be contacted by {BUSINESS.name} regarding your solar inquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default LeadForm;
