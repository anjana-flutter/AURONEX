import { PRODUCTS } from '@/app/lib/data';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
    return (
        <main className="bg-primary min-h-screen pt-24 pb-20">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Products</h1>
                    <p className="text-xl text-gray-400">
                        Cutting-edge technology solutions engineered specifically for the complexities of modern hospitality and travel management.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="h-full">
                            <ProductCard
                                title={product.title}
                                description={product.shortDescription}
                                category={product.category}
                                icon={product.icon}
                                slug={product.slug}
                                specs={product.specs}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
