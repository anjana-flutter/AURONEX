import { SERVICES } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
    return (
        <main className="bg-primary min-h-screen pt-24 pb-20">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
                    <p className="text-xl text-gray-400">
                        comprehensive suite of solutions designed to elevate every aspect of the hospitality and travel experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service) => (
                        <div key={service.id} className="h-full">
                            <ServiceCard
                                title={service.title}
                                description={service.shortDescription}
                                icon={service.icon}
                                slug={service.slug}
                                status={service.status}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
