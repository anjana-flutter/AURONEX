import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/data";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const product = PRODUCTS.find(p => p.slug === resolvedParams.slug);
    if (!product) return { title: "Product Not Found" };
    return {
        title: `${product.title} | Auronex`,
        description: product.shortDescription,
    };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const product = PRODUCTS.find(p => p.slug === resolvedParams.slug);

    if (!product) {
        notFound();
    }

    const Icon = product.icon;

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#050505]">
            <div className="max-w-5xl mx-auto">
                <Link href="/" className="inline-flex items-center text-gray-500 hover:text-white mb-12 transition-colors group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/5 text-white border border-white/10 shadow-lg shadow-white/5">
                            <Icon size={40} strokeWidth={1.5} />
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-sm font-mono tracking-widest text-gray-500 uppercase">Product</span>
                                {product.status === 'Upcoming' && <span className="text-xs border border-gray-700 px-2 py-0.5 rounded text-gray-400">COMING SOON</span>}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">{product.title}</h1>
                            <p className="text-xl md:text-2xl text-gray-400 font-light">{product.shortDescription}</p>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed border-l-2 border-white/10 pl-6">
                            {product.fullDescription}
                        </p>

                        <div className="pt-8">
                            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                                Request Demo
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/5">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            Key Features
                        </h3>
                        <ul className="space-y-4">
                            {product.specs.map((spec, idx) => (
                                <li key={idx} className="flex items-start group">
                                    <CheckCircle2 size={20} className="mr-3 text-gray-500 group-hover:text-white transition-colors mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 group-hover:text-white transition-colors">{spec}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
