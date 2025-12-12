import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    slug: string;
}

const ServiceCard = ({ title, description, icon: Icon, slug }: ServiceCardProps) => {
    return (
        <Link href={`/services/${slug}`} className="group block h-full">
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl h-full transition-all duration-300 hover:bg-white/10 hover:border-accent/30 hover:-translate-y-1">
                <div className="bg-blue-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                    {description}
                </p>
                <div className="flex items-center text-sm font-medium text-accent hover:text-white transition-colors">
                    <span>Explore Service</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard;
