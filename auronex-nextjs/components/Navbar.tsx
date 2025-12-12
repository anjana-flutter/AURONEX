"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { SITE_CONFIG, NAVIGATION } from "@/lib/data";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const toggleDropdown = (label: string) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/10" : "bg-transparent border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
                        <div className="relative h-16 w-auto aspect-[1/1] min-w-[64px]">
                            <Image
                                src={SITE_CONFIG.logos.header}
                                alt="Auronex"
                                height={64}
                                width={64}
                                className="object-contain w-auto h-full brightness-0 invert group-hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {NAVIGATION.map((item) => (
                            <div
                                key={item.label}
                                className="relative group"
                                onMouseEnter={() => !item.isButton && setActiveDropdown(item.label)}
                                onMouseLeave={() => !item.isButton && setActiveDropdown(null)}
                            >
                                {item.dropdown ? (
                                    <button className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors py-2">
                                        <span>{item.label}</span>
                                        <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`text-sm font-medium transition-colors py-2 ${item.isButton
                                            ? "px-5 rounded-full bg-white text-black hover:bg-gray-200 font-semibold"
                                            : pathname === item.href
                                                ? "text-white"
                                                : "text-gray-300 hover:text-white"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}

                                {/* Desktop Dropdown */}
                                {item.dropdown && (
                                    <div
                                        className={`absolute left-0 mt-0 w-64 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 origin-top-left ${activeDropdown === item.label ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"
                                            }`}
                                    >
                                        <div className="p-2 space-y-1">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.href}
                                                    href={subItem.disabled ? "#" : subItem.href}
                                                    className={`block p-3 rounded-lg transition-colors ${subItem.disabled
                                                        ? "opacity-50 cursor-not-allowed"
                                                        : "hover:bg-white/5"
                                                        }`}
                                                >
                                                    <div className="text-sm font-medium text-white flex items-center justify-between">
                                                        {subItem.label}
                                                        {subItem.disabled && <span className="text-[10px] uppercase bg-white/10 px-1.5 py-0.5 rounded text-gray-400">Soon</span>}
                                                    </div>
                                                    {subItem.description && (
                                                        <div className="text-xs text-gray-500 mt-1 line-clamp-1">{subItem.description}</div>
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-x-0 bg-[#050505] border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 pt-4 pb-8 space-y-2 h-[calc(100vh-80px)] overflow-y-auto">
                    {NAVIGATION.map((item) => (
                        <div key={item.label} className="border-b border-white/5 last:border-0 pb-2">
                            {item.dropdown ? (
                                <div>
                                    <button
                                        onClick={() => toggleDropdown(item.label)}
                                        className="flex items-center justify-between w-full py-3 text-base font-medium text-gray-200"
                                    >
                                        {item.label}
                                        <ChevronRight size={16} className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-90" : ""}`} />
                                    </button>
                                    <div
                                        className={`space-y-1 pl-4 overflow-hidden transition-all duration-300 ${activeDropdown === item.label ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.href}
                                                href={subItem.disabled ? "#" : subItem.href}
                                                className={`block py-2.5 text-sm text-gray-400 ${subItem.disabled ? "opacity-50" : "hover:text-white"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    {subItem.label}
                                                    {subItem.disabled && <span className="text-[9px] uppercase border border-gray-700 px-1 rounded text-gray-500">Soon</span>}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={`block py-3 text-base font-medium ${item.isButton
                                        ? "mt-4 text-center bg-white text-black rounded-lg hover:bg-gray-200"
                                        : "text-gray-200 hover:text-white"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
