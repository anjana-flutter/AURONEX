import { Plane, Building2, Globe, Shield, Users, MapPin, Briefcase, Star, Clock, CheckCircle, Share2, BarChart3, Calendar } from 'lucide-react';

export const SITE_CONFIG = {
    name: "AURONEX",
    tagline: "Elevating Hospitality & Travel",
    description: "Next-Gen Hospitality & Travel Solutions",
    logos: {
        header: "/images/image (3) (1).png",
        footer: "/images/image (2) (1).png"
    },
    contact: {
        email: "contact@auronex.com",
        phone: "+1 (555) 123-4567",
        address: "123 Innovation Drive, Tech City"
    },
    socials: {
        instagram: "#",
        linkedin: "#",
        twitter: "#",
    }
};

export const NAVIGATION = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
        label: "Products",
        href: "/products",
        dropdown: [
            { label: "CRM", href: "/products/auronex-crm", description: "Customer Relationship Management" },
            { label: "FMS", href: "/products/fleet", description: "Fleet Management Solution" },
            { label: "Secure Booking Engine", href: "/products/secure-booking-engine", description: "Direct Booking Power (Coming Soon)", disabled: true },
            { label: "Event Management", href: "/products/event", description: "Seamless Event Planning (Upcoming)", disabled: true },
        ]
    },
    {
        label: "Services",
        href: "/services",
        dropdown: [
            { label: "Luxury Travel", href: "/services/luxury-travel-planning", description: "Bespoke Itineraries" },
            { label: "Hotel Management", href: "/services/hotel-management", description: "Operational Excellence" },
            { label: "Corporate Concierge", href: "/services/corporate-concierge", description: "Business Support" },
            { label: "Global Logistics", href: "/services/global-logistics", description: "Supply Chain Solutions" },
        ]
    },
    { label: "Contact Us", href: "/contact", isButton: true }
];

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
        image: "/images/luxury-travel.jpg", // Placeholder
        status: "Upcoming"
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
        image: "/images/hotel-mgmt.jpg",
        status: "Upcoming"
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
        image: "/images/corporate.jpg",
        status: "Upcoming"
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
        image: "/images/logistics.jpg",
        status: "Upcoming"
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
        icon: Users,
        status: "Available"
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
        icon: Shield,
        status: "Upcoming"
    },
    {
        id: "fleet",
        title: "Fleet Management Solution",
        slug: "fleet",
        category: "Software",
        shortDescription: "Comprehensive fleet tracking and logistics management.",
        fullDescription: "Optimize your transport operations with real-time tracking, driver performance analytics, and maintenance scheduling. Ensure passenger safety and operational efficiency with our unified fleet management platform.",
        specs: [
            "Real-time GPS Tracking",
            "Driver Behavior Analysis",
            "Maintenance Alerts",
            "Fuel Management"
        ],
        usage: "Essential for hotels with transport fleets, travel agencies, and logistics providers.",
        icon: BarChart3,
        status: "Available"
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
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80",
    values: [
        { title: "Excellence", desc: "We don't settle for good. We aim for exceptional." },
        { title: "Integrity", desc: "Trust is our currency. We are transparent and honest." },
        { title: "Innovation", desc: "We embrace new technologies to enhance human connection." }
    ]
};
