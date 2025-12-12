"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="glass-header fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/image (3) (1).png"
                        alt="Auronex"
                        width={64}
                        height={64}
                        className="h-10 w-auto brightness-0 invert"
                        priority
                    />
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-xs font-mono uppercase tracking-wider text-white glow-hover">
                        Home
                    </Link>
                    <Link href="/services" className="text-xs font-mono uppercase tracking-wider text-neon-silver glow-hover">
                        Services
                    </Link>
                    <Link href="/products" className="text-xs font-mono uppercase tracking-wider text-neon-silver glow-hover">
                        Products
                    </Link>
                    <Link href="/about" className="text-xs font-mono uppercase tracking-wider text-neon-silver glow-hover">
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="shimmer-btn text-gunmetal px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-semibold"
                    >
                        Connect
                    </Link>
                </nav>

                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {mobileMenuOpen && (
                <nav className="md:hidden mt-4 pt-4 border-t border-white/10">
                    <div className="flex flex-col space-y-3">
                        <Link href="/" className="text-xs font-mono uppercase tracking-wider text-white">
                            Home
                        </Link>
                        <Link href="/services" className="text-xs font-mono uppercase tracking-wider text-neon-silver">
                            Services
                        </Link>
                        <Link href="/products" className="text-xs font-mono uppercase tracking-wider text-neon-silver">
                            Products
                        </Link>
                        <Link href="/about" className="text-xs font-mono uppercase tracking-wider text-neon-silver">
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="shimmer-btn text-gunmetal px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-center"
                        >
                            Connect
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}
