import { ABOUT_CONTENT } from '@/lib/data';
import Image from 'next/image';
import { Target, Lightbulb, Heart } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="bg-primary min-h-screen pt-24 pb-20">
            {/* Header */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Us</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    {ABOUT_CONTENT.mission}
                </p>
            </section>

            {/* Content Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            {ABOUT_CONTENT.story}
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Since our inception, we have served over 500+ corporate clients and managed logistics for some of the world's most exclusive events. Our growth is a testament to our unwavering commitment to quality.
                        </p>
                    </div>
                    <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl bg-white/5 border border-white/10">
                        <Image
                            src={ABOUT_CONTENT.image}
                            alt="Our Story"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                        <Target className="text-accent w-10 h-10 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                        <p className="text-gray-400">We don't settle for good. We aim for exceptional in every interaction.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                        <Heart className="text-accent w-10 h-10 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
                        <p className="text-gray-400">Trust is our currency. We are transparent, honest, and reliable.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                        <Lightbulb className="text-accent w-10 h-10 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                        <p className="text-gray-400">We embrace new technologies to enhance the human connection.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
