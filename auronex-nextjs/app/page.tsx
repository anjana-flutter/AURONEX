"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES, SITE_CONFIG } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const heroTextRef = useRef<HTMLDivElement>(null);
    const introRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            const tl = gsap.timeline();

            tl.fromTo(heroTextRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.5 }
            );

            ScrollTrigger.create({
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                scrub: true,
            });

            // Intro Section Parallax
            gsap.fromTo(introRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: introRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Services Stagger
            gsap.from(".service-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: servicesRef.current,
                    start: "top 75%",
                }
            });

        }, heroRef); // Scope to hero for safety, though we access other refs

        return () => ctx.revert();
    }, []);

    return (
        <main className="bg-primary overflow-hidden">
            {/* Hero Section */}
            <section ref={heroRef} className="h-screen relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/90 z-10" />
                    <Image
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                        alt="Luxury Hotel Lobby"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div ref={heroTextRef} className="relative z-20 text-center max-w-4xl px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Experience the <span className="text-accent italic">Exceptional</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light">
                        {SITE_CONFIG.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/services" className="bg-accent text-primary font-bold py-4 px-8 rounded-full hover:bg-white transition-colors duration-300">
                            Explore Services
                        </Link>
                        <Link href="/contact" className="bg-transparent border border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-colors duration-300">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section ref={introRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-30 bg-primary">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent font-medium tracking-widest uppercase text-sm">Who We Are</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                        Redefining Hospitality for the Modern World
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {SITE_CONFIG.description} At {SITE_CONFIG.name}, we believe that true luxury lies in the details.
                        We combine human empathy with cutting-edge technology to create seamless, unforgettable journeys.
                    </p>
                </div>
            </section>

            {/* Services Preview */}
            <section ref={servicesRef} className="py-24 bg-primary-light/30 border-y border-white/5 relative z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-accent font-medium tracking-widest uppercase text-sm">Our Expertise</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Curated Services</h2>
                        </div>
                        <Link href="/services" className="hidden md:flex items-center text-accent hover:text-white transition-colors">
                            View All <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(SERVICES).slice(0, 4).map(([slug, service]) => (
                            <div key={slug} className="service-card">
                                <ServiceCard
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                    slug={slug}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link href="/services" className="inline-flex items-center text-accent hover:text-white transition-colors">
                            View All Services <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Client Stories</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Testimonials removed as data is pending */}
                </div>
            </section>
        </main>
    );
}
