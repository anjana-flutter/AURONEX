import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Instagram, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { SITE_CONFIG, NAVIGATION, PRODUCTS } from "@/lib/data";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="relative w-[180px] h-auto">
                                <Image
                                    src={SITE_CONFIG.logos.footer}
                                    alt="Auronex"
                                    width={180}
                                    height={60}
                                    className="w-full h-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            {SITE_CONFIG.description}. Pioneering the future of hospitality with data-driven intelligence and seamless automation.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-6 tracking-wide">Company</h4>
                        <ul className="space-y-4">
                            {NAVIGATION.filter(n => !n.isButton).map(item => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                                        <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-2 text-white">
                                            <ArrowRight size={12} />
                                        </span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products Column */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-semibold mb-6 tracking-wide">Solutions</h4>
                        <ul className="space-y-4">
                            {PRODUCTS.map((product) => (
                                <li key={product.slug}>
                                    <Link href={`/products/${product.slug}`} className="text-gray-400 hover:text-white transition-colors text-sm block">
                                        {product.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-semibold mb-6 tracking-wide">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded bg-white/5 flex items-center justify-center flex-shrink-0 text-accent">
                                    <MapPin size={14} />
                                </div>
                                <span className="text-sm text-gray-400 leading-relaxed">{SITE_CONFIG.contact.address}</span>
                            </li>
                            <li>
                                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                                    <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center text-accent group-hover:bg-white group-hover:text-black transition-colors">
                                        <Phone size={14} />
                                    </div>
                                    {SITE_CONFIG.contact.phone}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                                    <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center text-accent group-hover:bg-white group-hover:text-black transition-colors">
                                        <Mail size={14} />
                                    </div>
                                    {SITE_CONFIG.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs">
                        © {currentYear} {SITE_CONFIG.name}. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-xs text-gray-600">
                        <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
