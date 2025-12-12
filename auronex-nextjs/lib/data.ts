import { Share2, BarChart3, Globe, Calendar, Briefcase, Map } from "lucide-react";

export const SITE_CONFIG = {
    name: "AURONEX",
    description: "Next-Gen Hospitality & Travel Solutions",
    logos: {
        header: "/images/image (3) (1).png",
        footer: "/images/image (2) (1).png"
    },
    contact: {
        email: "contact@auronex.com",
        phone: "+1 (555) 123-4567",
        address: "123 Innovation Drive, Tech City"
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
            { label: "FMS", href: "/products/fms", description: "Financial Management System" },
            { label: "Booking Engine", href: "/products/secure-booking-engine", description: "Next-Gen Travel Tech (Upcoming)", disabled: true },
            { label: "Event Management", href: "/products/event", description: "Seamless Event Planning (Upcoming)", disabled: true },
        ]
    },
    {
        label: "Services",
        href: "/services",
        dropdown: [
            { label: "Hotel Management", href: "/services/hotel-management", description: "Operational Excellence" },
            { label: "Luxury Travel", href: "/services/luxury-travel-planning", description: "Bespoke Itineraries" },
            { label: "Corporate Concierge", href: "/services/corporate-concierge", description: "Business Support" },
            { label: "Global Logistics", href: "/services/global-logistics", description: "Supply Chain Solutions" },
        ]
    },
    { label: "Contact Us", href: "/contact", isButton: true }
];

export const PRODUCTS = {
    "auronex-crm": {
        title: "Auronex CRM",
        subtitle: "Customer Relationship Intelligence",
        description: "A data-driven CRM designed for high-touch hospitality. Anticipate guest needs, personalize experiences, and drive loyalty through advanced analytics and automation.",
        features: [
            "360° Guest Profiling",
            "AI-Powered Sentiment Analysis",
            "Omnichannel Communication",
            "Loyalty Program Management",
            "Automated Marketing Campaigns"
        ],
        icon: Share2,
        status: "Available"
    },
    fms: {
        title: "FMS Core",
        subtitle: "Financial Management System",
        description: "Streamline your financial operations with our robust FMS. From procurement to payroll, get real-time insights and control over your property's financial health.",
        features: [
            "Real-time P&L Reporting",
            "Automated Invoicing & Billing",
            "Multi-currency Support",
            "Vendor Management",
            "Budget Forecasting"
        ],
        icon: BarChart3,
        status: "Available"
    },
    "secure-booking-engine": {
        title: "Secure Booking Engine",
        subtitle: "Integrated Booking Engine",
        description: "A unified platform for travel bookings, itinerary management, and connections.",
        features: ["Global Inventory", "Dynamic Pricing", "B2B & B2C Interfaces"],
        icon: Globe,
        status: "Upcoming"
    },
    event: {
        title: "Event Management",
        subtitle: "Conference & Banqueting",
        description: "End-to-end event management software for hotels and venues.",
        features: ["Floor Plan Builder", "Catering Management", "Attendee Registration"],
        icon: Calendar,
        status: "Upcoming"
    }
};

export const SERVICES = {
    hospitality: {
        title: "Hospitality Consulting",
        description: "We help hotels and resorts optimize operations, elevate guest standards, and implement cutting-edge technology.",
        features: ["Operational Audits", "Staff Training", "Tech Stack Integration"],
        icon: Briefcase
    },
    "travel-tourism": {
        title: "Travel & Tourism Strategy",
        description: "Strategic consulting for tourism boards and travel agencies to boost engagement and bookings.",
        features: ["Destination Marketing", "Digital Transformation", "Sustainability Planning"],
        icon: Map
    },
    events: {
        title: "Event Planning Services",
        description: "Professional planning and execution for corporate events, weddings, and large-scale conferences.",
        features: ["Logistics Management", "Vendor Coordination", "On-site Execution"],
        icon: Calendar
    },
    "hotel-management": {
        title: "Hotel Management",
        description: "Comprehensive management solutions for hotels and resorts, focusing on operational excellence and guest satisfaction.",
        features: ["Asset Management", "Operational Optimization", "Staff Training"],
        icon: Briefcase
    },
    "luxury-travel-planning": {
        title: "Luxury Travel Planning",
        description: "Bespoke travel itineraries for discerning travelers, offering exclusive access and personalized services.",
        features: ["Private Jet Charter", "VIP Access", "Curated Itineraries"],
        icon: Globe
    },
    "corporate-concierge": {
        title: "Corporate Concierge",
        description: "Dedicated concierge services for businesses, handling everything from travel arrangements to event coordination.",
        features: ["24/7 Support", "Travel Management", "Lifestyle Services"],
        icon: Briefcase
    },
    "global-logistics": {
        title: "Global Logistics",
        description: "Efficient and secure logistics solutions for international operations and supply chain management.",
        features: ["Supply Chain Optimization", "Freight Forwarding", "Customs Clearance"],
        icon: Map
    }
};
