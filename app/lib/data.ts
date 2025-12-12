import { Plane, Building2, Globe, Shield, Users, MapPin, Briefcase, Star, Clock, CheckCircle } from 'lucide-react';

export const COMPANY_INFO = {
    name: "Auronex",
    tagline: "Elevating Hospitality & Travel",
    description: "Auronex is a premier hospitality and travel solutions provider, dedicated to crafting exceptional experiences through innovation and personalized service.",
    contact: {
        phone: "+1 (555) 123-4567",
        email: "concierge@auronex.com",
        address: "123 Innovation Drive, Tech Valley, CA 94043",
    },
    socials: {
        instagram: "#",
        linkedin: "#",
        twitter: "#",
    }
};

export const SERVICES = [
    {
        id: "luxury-travel-planning",
        title: "Luxury Travel Planning",
        slug: "luxury-travel-planning",
        shortDescription: "Bespoke itineraries for the discerning traveler.",
        fullDescription: "We curate exclusive travel experiences tailored to your unique preferences. From private jet charters to secluded island retreats, our luxury travel planning service ensures every detail is executed to perfection. We partner with the world's finest hotels and service providers to offer you unparalleled access and comfort.",
        features: [
            "Private Jet & Yacht Charter",
            "Exclusive Villa Rentals",
            "VIP Airport Services",
            "24/7 Concierge Support"
        ],
        icon: Plane,
        image: "/images/luxury-travel.jpg" // Placeholder
    },
    {
        id: "hotel-management",
        title: "Hotel Management",
        slug: "hotel-management",
        shortDescription: "Operational excellence for boutique and luxury properties.",
        fullDescription: "Our hotel management division brings decades of industry expertise to optimize your property's performance. We focus on guest satisfaction, operational efficiency, and revenue management to ensure your hotel not only meets but exceeds market standards. We turn properties into landmarks.",
        features: [
            "Revenue Management Optimization",
            "Staff Training & Development",
            "Guest Experience Enhancement",
            "Asset Management"
        ],
        icon: Building2,
        image: "/images/hotel-mgmt.jpg"
    },
    {
        id: "corporate-concierge",
        title: "Corporate Concierge",
        slug: "corporate-concierge",
        shortDescription: "Seamless lifestyle management for executives.",
        fullDescription: "For busy executives and corporations, time is the most valuable asset. Our corporate concierge services handle everything from event planning and client entertainment to personal errands and travel arrangements, allowing you to focus on your business.",
        features: [
            "Event Planning & Management",
            "Client Entertainment Solutions",
            "Lifestyle Management",
            "Business Travel Logistics"
        ],
        icon: Briefcase,
        image: "/images/corporate.jpg"
    },
    {
        id: "global-logistics",
        title: "Global Logistics",
        slug: "global-logistics",
        shortDescription: "Reliable transport solutions worldwide.",
        fullDescription: "Navigating the complexities of global travel and transport requires precision. Auronex offers comprehensive logistics solutions, ensuring smooth transfers, secure transport of goods, and efficient coordination of complex itineraries across borders.",
        features: [
            "Secure Transport",
            "Complex Itinerary Coordination",
            "Cross-border Logistics",
            "Customs & Compliance Handling"
        ],
        icon: Globe,
        image: "/images/logistics.jpg"
    }
];

export const PRODUCTS = [
    {
        id: "auronex-crm",
        title: "Auronex CRM",
        slug: "auronex-crm",
        category: "Software",
        shortDescription: "The ultimate customer relationship tool for hospitality.",
        fullDescription: "Auronex CRM is built specifically for the high-touch hospitality industry. It goes beyond basic contact management to provide deep insights into guest preferences, stay history, and engagement opportunities, enabling you to personalize every interaction.",
        specs: [
            "Cloud-based Architecture",
            "AI-driven Guest Insights",
            "Multi-channel Communication",
            "Seamless PMS Integration"
        ],
        usage: "Ideal for boutique hotels, luxury travel agencies, and concierge services looking to deepen client relationships.",
        icon: Users
    },
    {
        id: "secure-booking-engine",
        title: "Secure Booking Engine",
        slug: "secure-booking-engine",
        category: "Platform",
        shortDescription: "Direct booking power with bank-grade security.",
        fullDescription: "Maximize your direct bookings with our white-label booking engine. Designed for conversion and security, it offers a seamless user experience for your guests while protecting their sensitive data with the highest industry standards.",
        specs: [
            "PCI-DSS Compliant",
            "Mobile-First Design",
            "Direct PMS Connectivity",
            "Dynamic Pricing Support"
        ],
        usage: "Perfect for hotel websites and travel portals requiring a robust, branded booking solution.",
        icon: Shield
    }
];

export const TESTIMONIALS = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "CEO, Horizon Ventures",
        content: "Auronex transformed our corporate retreat into an unforgettable experience. The attention to detail was simply unmatched.",
        stars: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Owner, The Azure Hotel",
        content: "Since partnering with Auronex for management, our guest satisfaction scores have hit record highs. Use them.",
        stars: 5
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Director of Ops, GlobalSoft",
        content: "Professional, reliable, and truly innovative. Auronex is the partner we didn't know we needed until we found them.",
        stars: 5
    }
];

export const ABOUT_CONTENT = {
    mission: "To redefine the standard of hospitality through innovation, empathy, and unwavering dedication to excellence.",
    vision: "To be the global benchmark for personalized travel and hospitality services, connecting the world with grace and efficiency.",
    story: "Founded three years ago, Auronex began with a simple belief: travel should be transformative. What started as a small consultancy has grown into a multi-faceted hospitality firm, driven by a passion for service and a commitment to modern technology.",
    values: [
        { title: "Excellence", desc: "We don't settle for good. We aim for exceptional." },
        { title: "Integrity", desc: "Trust is our currency. We are transparent and honest." },
        { title: "Innovation", desc: "We embrace new technologies to enhance human connection." }
    ]
};
