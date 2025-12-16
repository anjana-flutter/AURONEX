"use client";


import { SITE_CONFIG } from '@/lib/data';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="bg-primary min-h-screen pt-24 pb-20">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Ready to elevate your hospitality experience? Reach out to our team of experts today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input type="text" id="name" className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email id</label>
                                    <input type="email" id="email" className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                                    <input type="tel" id="phone" className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="+1 (555) 000-0000" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                    <input type="text" id="subject" className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Inquiry about..." />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea id="message" rows={6} className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-accent text-primary font-bold py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center">
                                <Send size={20} className="mr-2" /> Send Message
                            </button>
                        </form>
                    </div>

                    {/* Info & Map */}
                    <div className="space-y-8">
                        {/* Info Cards */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-start">
                            <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                                <MapPin size={24} className="text-accent" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Visit Us</h3>
                                <p className="text-gray-400">{SITE_CONFIG.contact.address}</p>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-start">
                            <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                                <Mail size={24} className="text-accent" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                                <p className="text-gray-400">{SITE_CONFIG.contact.email}</p>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-start">
                            <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                                <Phone size={24} className="text-accent" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                                <p className="text-gray-400">{SITE_CONFIG.contact.phone}</p>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-white/5 rounded-xl border border-white/10 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.628236556408!2d-122.08374688469227!3d37.422327079824614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614134947477!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
