import React, { useState, useMemo } from 'react';
import { 
  Phone, 
  Calendar, 
  Clock, 
  Zap, 
  Menu, 
  X, 
  ShieldCheck, 
  Wrench, 
  Lightbulb,
  Plug,
  Home,
  Building,
  AlertTriangle,
  Droplet,
  Flame,
  Search,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Award,
  DollarSign,
  ThumbsUp,
  MapPin,
  Check
} from 'lucide-react';

const SERVICES_DATA = [
  {
    id: "elec-1",
    category: "Electrical",
    title: "Electrical Wiring & Rewiring",
    icon: Lightbulb,
    badge: "Popular",
    shortDesc: "Complete residential and commercial internal wiring, fault tracing, and safety upgrades.",
    fullDesc: "Our licensed electricians perform comprehensive electrical wiring inspections, partial or full home rewiring, and cable replacements adhering to national electrical safety codes.",
    estimatedPrice: "$120 - $350",
    timeRequired: "2 - 6 Hours",
    includedFeatures: [
      "Fault detection & insulation test",
      "Concealed wiring & conduit fitting",
      "Circuit breaker & load test",
      "Safety certificate provided"
    ]
  },
  {
    id: "elec-2",
    category: "Electrical",
    title: "Switch & Socket Repair",
    icon: Plug,
    badge: "Quick Fix",
    shortDesc: "Repairing damaged power outlets, switchboards, burnt sockets, and loose connections.",
    fullDesc: "Get dangerous, sparkling, or non-functioning wall sockets and switchboards repaired or upgraded with modular child-safe plates.",
    estimatedPrice: "$45 - $90",
    timeRequired: "1 - 2 Hours",
    includedFeatures: [
      "Replacement of burnt sockets",
      "Grounding/earthing verification",
      "Heavy load socket installation (16A+)",
      "Child safety outlet covers"
    ]
  },
  {
    id: "elec-3",
    category: "Electrical",
    title: "Heavy Appliance Installation",
    icon: Zap,
    badge: "Certified",
    shortDesc: "Safe wiring setup for high-voltage AC units, electric stoves, and heavy machinery.",
    fullDesc: "Ensure heavy household or commercial appliances operate safely without tripping breakers. Includes dedicated line setup and circuit protection.",
    estimatedPrice: "$85 - $200",
    timeRequired: "1 - 3 Hours",
    includedFeatures: [
      "Dedicated circuit setup",
      "MCB/RCBO breaker installation",
      "Voltage stability check",
      "Load balancing across phases"
    ]
  },
  {
    id: "elec-4",
    category: "Electrical",
    title: "Commercial Power Setup",
    icon: Building,
    badge: "Commercial",
    shortDesc: "Three-phase power setup, main distribution panels, and industrial lighting.",
    fullDesc: "Tailored electrical infrastructure setup for offices, retail stores, restaurants, and warehouses with full load management.",
    estimatedPrice: "$300 - $1,200",
    timeRequired: "1 - 2 Days",
    includedFeatures: [
      "3-Phase panel board assembly",
      "Emergency power backup connections",
      "Energy usage audit",
      "Surge protection device setup"
    ]
  },
  {
    id: "elec-5",
    category: "Electrical",
    title: "Emergency Electrician Response",
    icon: AlertTriangle,
    badge: "24/7 Priority",
    shortDesc: "Immediate assistance for power outages, short circuits, and burning odors.",
    fullDesc: "24/7 fast-dispatch emergency unit for urgent electrical hazards, blackout troubleshooting, and tripped breaker restoration.",
    estimatedPrice: "$95 - $180",
    timeRequired: "Immediate Dispatch",
    includedFeatures: [
      "30-45 min target arrival time",
      "Short-circuit isolation",
      "Temporary power restoration",
      "Hazard assessment report"
    ]
  },
  {
    id: "plumb-1",
    category: "Plumbing",
    title: "Tap, Faucet & Sink Repair",
    icon: Droplet,
    badge: "High Demand",
    shortDesc: "Fixing leaking taps, broken cartridges, faucet replacements, and basin fittings.",
    fullDesc: "Eliminate costly water wastage and annoying drips. We service all brands of faucets, mixer taps, shower heads, and sink drains.",
    estimatedPrice: "$50 - $110",
    timeRequired: "1 Hour",
    includedFeatures: [
      "Washer & ceramic cartridge replacement",
      "Pressure testing",
      "New mixer faucet installation",
      "No-leak guarantee for 6 months"
    ]
  },
  {
    id: "plumb-2",
    category: "Plumbing",
    title: "Drain Unclogging & Sewer Clean",
    icon: Wrench,
    badge: "Essential",
    shortDesc: "Clearing stubborn blockages in sinks, toilets, showers, and main sewer pipes.",
    fullDesc: "Using modern motorized drain snakes and hydro-jetting tools to dissolve grease, hair, and scale buildup deep inside pipes.",
    estimatedPrice: "$80 - $220",
    timeRequired: "1 - 3 Hours",
    includedFeatures: [
      "Motorized drain auger cleaning",
      "Debris & hair removal",
      "Drain pipe inspection",
      "Odour treatment treatment"
    ]
  },
  {
    id: "plumb-3",
    category: "Plumbing",
    title: "Water Heater / Geyser Service",
    icon: Flame,
    badge: "Popular",
    shortDesc: "Repair, descaling, and installation for electric and gas water heaters.",
    fullDesc: "Ensure consistent hot water and energy efficiency. We handle thermostat repair, element replacement, tank flushing, and new unit setup.",
    estimatedPrice: "$110 - $280",
    timeRequired: "2 - 4 Hours",
    includedFeatures: [
      "Heating element replacement",
      "Thermostat calibration",
      "Pressure relief valve test",
      "Tank sediment flushing"
    ]
  },
  {
    id: "plumb-4",
    category: "Plumbing",
    title: "Water Tank & Pipeline Fitting",
    icon: Home,
    badge: "Full Setup",
    shortDesc: "Pipelining, booster pump fitting, overhead tank installation, and leak detection.",
    fullDesc: "Complete water distribution system setup for homes and buildings including pressure pumps, water meters, and tank plumbing.",
    estimatedPrice: "$250 - $800",
    timeRequired: "3 - 8 Hours",
    includedFeatures: [
      "CPVC / PVC pipe installation",
      "Automatic pump switch connection",
      "Overhead water tank sanitization",
      "Acoustic leak detection check"
    ]
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All'); // 'All', 'Electrical', 'Plumbing'
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Modals state
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState(null);
  const [bookingModalService, setBookingModalService] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Form input state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    date: '',
    timeSlot: 'Morning (8 AM - 12 PM)',
    notes: ''
  });

  // Filtered services list based on category and search
  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter(service => {
      const matchesCategory = activeCategory === 'All' || service.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Handlers
  const openBookingModal = (service) => {
    setBookingModalService(service);
    setSelectedServiceForDetail(null);
    setBookingSuccess(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      
      {}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
          
           

         
          

           
           

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        
      </header>

      {}
      <section id="top" className="relative overflow-hidden bg-gray-100 py-16 lg:py-24">
       
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No matching services found</h3>
            <p className="text-sm text-slate-500">Try adjusting your search query or switching categories.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              const isElectrical = service.category === 'Electrical';

              return (
                <div 
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group"
                >
                  <div className="space-y-4">
                    
                    {/* Header line with badge */}
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl ${isElectrical ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                        isElectrical 
                          ? 'bg-amber-50 text-amber-700 border-amber-200' 
                          : 'bg-blue-50 text-blue-700 border-blue-200'
                      }`}>
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{service.category} Service</span>
                      <h3 className="text-lg font-extrabold text-slate-900 mt-0.5 group-hover:text-emerald-600 transition">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                      <span>Est. Price: <strong className="text-slate-900 font-extrabold">{service.estimatedPrice}</strong></span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /> {service.timeRequired}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedServiceForDetail(service)}
                      className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => openBookingModal(service)}
                      className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition shadow-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {}
      <section id="emergency" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-rose-700 text-white rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none flex items-center pr-10">
            <AlertTriangle className="w-96 h-96" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" /> 24/7 Rapid Emergency Response
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Facing an Electrical Short Circuit or Water Leak?
              </h2>
              <p className="text-red-100 text-sm sm:text-base leading-relaxed">
                Do not risk safety hazards or property damage. Our on-call technicians are dispatched within 30-45 minutes for urgent electrical power cuts, gas/water line leaks, or tripped circuit breakers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href="tel:8053257870"
                className="px-8 py-4 bg-white text-red-700 hover:bg-red-50 font-black rounded-2xl text-center shadow-lg transition flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5 animate-bounce" /> Call Now: (805) 325-7870
              </a>
              <p className="text-center text-xs text-red-200">Average response time: &lt; 40 mins</p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="why-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Why Volt & Flow</span>
          <h2 className="text-3xl font-black text-slate-900">Guaranteed Peace of Mind</h2>
          <p className="text-slate-600 text-sm">We combine certified expertise with honest, upfront pricing so you know exactly what to expect.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 text-center sm:text-left">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit mx-auto sm:mx-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Verified & Licensed</h3>
            <p className="text-xs text-slate-500 leading-relaxed">All background-checked technicians with master electrician & plumber certifications.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 text-center sm:text-left">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit mx-auto sm:mx-0">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">No Hidden Fees</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Upfront written estimate before any work starts. No surprise bills guaranteed.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 text-center sm:text-left">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto sm:mx-0">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Punctual & Fast</h3>
            <p className="text-xs text-slate-500 leading-relaxed">We respect your time. On-time arrival with fully stocked service vans.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 text-center sm:text-left">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl w-fit mx-auto sm:mx-0">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Workmanship Warranty</h3>
            <p className="text-xs text-slate-500 leading-relaxed">All repairs and installations are backed by our 6-month free service warranty.</p>
          </div>
        </div>
      </section>

      {}
      {selectedServiceForDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedServiceForDetail(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
                {React.createElement(selectedServiceForDetail.icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase">{selectedServiceForDetail.category}</span>
                <h3 className="text-xl font-extrabold text-slate-900">{selectedServiceForDetail.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedServiceForDetail.fullDesc}
            </p>

            {/* Inclusions checklist */}
            <div className="bg-slate-50 p-4 rounded-2xl space-y-3 border border-slate-100">
              <h4 className="text-xs font-extrabold uppercase text-slate-700 tracking-wider">What's Included in this Service</h4>
              <ul className="space-y-2">
                {selectedServiceForDetail.includedFeatures.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between text-sm bg-slate-100 p-4 rounded-2xl">
              <div>
                <span className="text-xs text-slate-500 block">Estimated Cost</span>
                <strong className="text-base font-black text-slate-900">{selectedServiceForDetail.estimatedPrice}</strong>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 block">Est. Duration</span>
                <strong className="text-sm font-bold text-slate-800">{selectedServiceForDetail.timeRequired}</strong>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => openBookingModal(selectedServiceForDetail)}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition shadow-md"
              >
                Book This Service Now
              </button>
            </div>

          </div>
        </div>
      )}

      {}
      {bookingModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative space-y-5 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setBookingModalService(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Booking Confirmed!</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thank you! We have received your booking request for <strong className="text-slate-900">{bookingModalService.title}</strong>. Our dispatcher will call you shortly to confirm the appointment time.
                </p>
                <button
                  onClick={() => setBookingModalService(null)}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <>
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Appointment Form</span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">Book {bookingModalService.title}</h3>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Alex Morgan" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input 
                      required 
                      type="tel" 
                      placeholder="(555) 000-0000" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service Address</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Street address, apartment or house number" 
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm" 
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
                      <input 
                        required 
                        type="date" 
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-xs" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Time Slot</label>
                      <select 
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                        className="w-full px-2 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-xs bg-white"
                      >
                        <option>Morning (8 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 4 PM)</option>
                        <option>Evening (4 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Job Details / Notes (Optional)</label>
                    <textarea 
                      rows={2} 
                      placeholder="Describe the issue or request details..." 
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="w-full px-3.5 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3.5 rounded-xl text-sm shadow-md transition"
                  >
                    Confirm Booking Request
                  </button>
                </form>
              </>
            )}

          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-black text-xl">
                <Zap className="w-5 h-5 text-amber-400" /> Volt & Flow
              </div>
              <p className="text-xs leading-relaxed text-slate-400">
                Your trusted local experts for all residential and commercial electrical and plumbing needs.
              </p>
            </div>

            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Electrical</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-white transition">Wiring & Rewiring</a></li>
                <li><a href="#services" className="hover:text-white transition">Sockets & Switches</a></li>
                <li><a href="#services" className="hover:text-white transition">Panel Upgrades</a></li>
                <li><a href="#services" className="hover:text-white transition">Lighting Fitting</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Plumbing</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-white transition">Faucet & Tap Fixes</a></li>
                <li><a href="#services" className="hover:text-white transition">Drain Unclogging</a></li>
                <li><a href="#services" className="hover:text-white transition">Water Heater Repair</a></li>
                <li><a href="#services" className="hover:text-white transition">Pipeline Installation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Contact Support</h4>
              <p className="text-xs text-slate-400 mb-2">24/7 Dispatch Hotline:</p>
              <a href="tel:8053257870" className="text-sm font-bold text-emerald-400 block hover:underline">
                (805) 325-7870
              </a>
              <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Servicing Metro & Suburbs
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Volt & Flow Electrical & Plumbing Services. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}