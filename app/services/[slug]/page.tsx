import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/data";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
    return Object.keys(SERVICES).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const service = SERVICES[resolvedParams.slug as keyof typeof SERVICES];
    if (!service) return { title: "Service Not Found" };
    return {
        title: `${service.title} | Auronex`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const service = SERVICES[resolvedParams.slug as keyof typeof SERVICES];

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#050505]">
            <div className="max-w-5xl mx-auto">
                <Link href="/" className="inline-flex items-center text-gray-500 hover:text-white mb-12 transition-colors group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <div className="mb-16">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6">
                        <Icon size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{service.title}</h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-normal">
                        {service.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.features.map((feature, idx) => (
                        <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group">
                            <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-gray-400 mb-4 group-hover:text-white transition-colors">
                                <ArrowUpRight size={16} />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">{feature}</h3>
                            <p className="text-sm text-gray-500">Comprehensive {feature.toLowerCase()} solutions tailored to your needs.</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-white/10 to-transparent border border-white/10">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-semibold text-white mb-4">Ready to elevate your business?</h2>
                        <p className="text-gray-400 mb-8">Let's discuss how our {service.title} can transform your operations.</p>
                        <Link href="/contact" className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
