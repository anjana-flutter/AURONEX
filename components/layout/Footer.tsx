import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="bg-primary text-gray-300 pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-4 block">
                            {SITE_CONFIG.name.toUpperCase()}
                        </Link>
                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                            {SITE_CONFIG.description}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
                            <li><Link href="/products" className="hover:text-accent transition-colors">Products</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="/services/luxury-travel-planning" className="hover:text-accent transition-colors">Luxury Travel</Link></li>
                            <li><Link href="/services/hotel-management" className="hover:text-accent transition-colors">Hotel Management</Link></li>
                            <li><Link href="/services/corporate-concierge" className="hover:text-accent transition-colors">Concierge</Link></li>
                            <li><Link href="/services/global-logistics" className="hover:text-accent transition-colors">Logistics</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-2 mt-1 text-accent flex-shrink-0" />
                                <span>{SITE_CONFIG.contact.address}</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-2 text-accent flex-shrink-0" />
                                <span>{SITE_CONFIG.contact.phone}</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-2 text-accent flex-shrink-0" />
                                <span>{SITE_CONFIG.contact.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
