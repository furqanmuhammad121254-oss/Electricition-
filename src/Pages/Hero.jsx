import React, { useState } from 'react';
import {
    Phone,
    Calendar,
    Clock,
    X,
    ShieldCheck,
    Wrench,
    CheckCircle2,
    
} from 'lucide-react';
import Category from "../Pages/Category.jsx"
import Navber from './Navber.jsx';


export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">

            <Navber />

            {/* Main Container */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold border border-emerald-200">
                            <ShieldCheck className="w-4 h-4" /> Licensed & Insured Professionals
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                            ASMAR MUHAMMAD KHAN Electrical & PLAMBER Services
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                            From quick repairs and safety inspections to complete home rewiring, our certified electricians deliver fast, dependable, and high-quality electrical solutions.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a
                                href="tel:+966 59 235 4174"
                                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                            >
                                <Phone className="w-5 h-5" /> Call Now
                            </a>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                            >
                                <Calendar className="w-5 h-5" /> Book a Service
                            </button>
                        </div>

                        {/* Features list */}
                        <div className="pt-4 grid grid-cols-2 gap-3 text-sm font-medium text-slate-700">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Same-day Service
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Upfront Pricing
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Satisfaction
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 24/7 Availability
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500 to-amber-500 rounded-3xl blur-lg opacity-20"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80"
                                alt="Professional Electrician Working"
                                className="w-full h-[380px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-lg">
                                        <Wrench className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-sm">Certified Technicians</p>
                                        <p className="text-xs text-slate-500">Over 15+ years of experience in residential electrical systems</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Emergency Service Section UI */}
                <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 relative overflow-hidden">
                    {/* Accent red bar */}
                    <div className="absolute top-0 left-0 bottom-0 w-2 bg-red-600"></div>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pl-2">
                        <div className="space-y-3 max-w-2xl">
                            {/* Emergency Tag */}
                            <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                                Emergency Services
                            </span>

                            <div className="flex items-start sm:items-center gap-4">
                                <div className="p-4 bg-slate-100 text-slate-800 rounded-full shrink-0">
                                    <Clock className="w-8 h-8 text-slate-700" />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                                        24/7 Emergency Support
                                    </h2>
                                    <p className="text-slate-600 text-sm sm:text-base mt-1">
                                        Emergency assistance is available around the clock. Electrical power outage, sparking, or burning smell? Call us immediately!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Call Box */}
                        <div className="w-full md:w-auto bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row md:flex-col items-center gap-3 text-center sm:text-left md:text-center">
                            <a
                                href="tel:+966 592354174
"
                                className="text-2xl font-black text-slate-900 tracking-wide hover:text-red-600 transition flex items-center justify-center gap-2"
                            >
                                <Phone className="w-6 h-6 text-red-600 animate-pulse" />
                                (+966)592354174


                            </a>
                            <a
                                href="tel:+966 592354174
"
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition shadow-md shadow-red-600/20 text-center"
                            >
                                Get Immediate Help
                            </a>
                        </div>
                    </div>
                </section>
                {/* Category  */}
                <Category />
            </main>

            {/* Booking Service Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h3 className="text-xl font-bold text-slate-900 mb-1">Book a Service</h3>
                        <p className="text-sm text-slate-500 mb-4">Fill out the form below and we will contact you shortly.</p>

                        <form onSubmit={(e) => { e.preventDefault(); alert('Booking submitted successfully!'); setIsModalOpen(false); }} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                                <input required type="text" placeholder="John Doe" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                                <input required type="tel" placeholder="(555) 000-0000" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">Service Needed</label>
                                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm">
                                    <option>General Electrical Repair</option>
                                    <option>Panel Upgrade</option>
                                    <option>Lighting Installation</option>
                                    <option>Safety Inspection</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                                <input required type="date" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm" />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg text-sm shadow-md transition"
                            >
                                Confirm Booking
                            </button>

                        </form>
                    </div>




                </div>
            )}
        </div>
    );
}