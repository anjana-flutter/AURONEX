import Link from 'next/link';
import { ArrowRight, LucideIcon, Check } from 'lucide-react';

interface ProductCardProps {
    title: string;
    description: string;
    category: string;
    icon: LucideIcon;
    slug: string;
    specs: string[];
}

const ProductCard = ({ title, description, category, icon: Icon, slug, specs }: ProductCardProps) => {
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300 flex flex-col h-full">
            <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                    <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Icon className="text-accent w-6 h-6" />
                    </div>
                    <span className="bg-blue-900/30 text-accent text-xs px-3 py-1 rounded-full font-medium border border-blue-500/20">
                        {category}
                    </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    {description}
                </p>

                <div className="space-y-2 mb-8">
                    {specs.slice(0, 3).map((spec, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                            <Check size={14} className="text-accent mr-2" />
                            {spec}
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 bg-white/5 border-t border-white/5">
                <Link
                    href={`/products/${slug}`}
                    className="w-full flex items-center justify-center bg-transparent border border-gray-600 hover:border-accent text-white hover:text-accent font-medium py-3 rounded-lg transition-all duration-300 group"
                >
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
