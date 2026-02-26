import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Menu, X, ChevronRight, ChevronDown, Star,
    TrendingUp, Users, Award, Shield, Sun,
    Cloud, Droplets, Sparkles, Leaf, Heart,
    Phone, Mail, MapPin, Facebook, Instagram,
    Youtube, Twitter, ArrowRight, Play, Check,
    Clock, Calendar, Gift, CreditCard, Package,
    Zap, Smartphone, Wifi, Radio, BatteryCharging,
    CircleUser, Hash, Wallet
} from 'lucide-react';

const HomePage = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Mobile recharge form state
    const [mobileNumber, setMobileNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [amount, setAmount] = useState('');
    const [showPlanPopup, setShowPlanPopup] = useState(false);

    // Hero slides data
    const heroSlides = [
        {
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80",
            title: "Welcome to Sanyukt Parivaar & Rich Life Company",
            subtitle: "A Trusted & Fast-Growing Multi-Level Marketing Company",
            description: "Sanyukt Parivaar & Rich Life Company is a people-driven direct selling organization committed to empowering individuals with sustainable income opportunities."
        },
        {
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80",
            title: "Build Your Financial Freedom",
            subtitle: "Join India's Fastest Growing MLM Company",
            description: "Experience the power of network marketing with our proven business model."
        },
        {
            image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80",
            title: "Quality Products, Unlimited Potential",
            subtitle: "Skin Care • Hair Care • Wellness Products",
            description: "Our range of high-quality, daily-use products ensures repeat business."
        }
    ];

    // About section image
    const aboutImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80";

    // Team images
    const teamImages = [
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40&q=80",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40&q=80",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40&q=80",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40&q=80"
    ];

    // Category images
    const skinCareImage = "https://images.unsplash.com/photo-1598449356475-b9f71db7d847?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80";
    const hairCareImage = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80";

    // Product images
    const productImages = [
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        "https://images.unsplash.com/photo-1600857062245-47e2dceae73c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        "https://images.unsplash.com/photo-1596460107916-430662021b77?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
        "https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
    ];

    // Business opportunity image
    const businessImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80";

    // Training image
    const trainingImage = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80";

    // Recharge background image
    const rechargeBgImage = "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

    // Mobile operators list
    const operators = [
        { id: 'airtel', name: 'Airtel', icon: '🟥', color: 'bg-red-500' },
        { id: 'jio', name: 'Jio', icon: '🔷', color: 'bg-blue-500' },
        { id: 'vi', name: 'Vi', icon: '🟪', color: 'bg-purple-500' },
        { id: 'bsnl', name: 'BSNL', icon: '🟦', color: 'bg-sky-500' }
    ];

    // Recharge plans
    const plans = [
        { amount: 99, data: '1GB', validity: '28 days', description: 'Data pack' },
        { amount: 199, data: '3GB', validity: '28 days', description: 'Data pack' },
        { amount: 299, data: '6GB', validity: '56 days', description: 'Data pack' },
        { amount: 399, data: '12GB', validity: '84 days', description: 'Data pack' },
        { amount: 499, data: '24GB', validity: '84 days', description: 'Unlimited calling' },
        { amount: 599, data: '36GB', validity: '84 days', description: 'Premium plan' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);

        // Preload images
        const imageUrls = [
            ...heroSlides.map(s => s.image),
            aboutImage,
            ...teamImages,
            skinCareImage,
            hairCareImage,
            ...productImages,
            businessImage,
            trainingImage,
            rechargeBgImage
        ];

        let loadedCount = 0;
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === imageUrls.length) {
                    setImagesLoaded(true);
                }
            };
            img.onerror = () => {
                loadedCount++;
                if (loadedCount === imageUrls.length) {
                    setImagesLoaded(true);
                }
            };
        });

        return () => {
            clearInterval(interval);
        };
    }, []);

    const whyChoosePoints = [
        { icon: <Shield className="w-6 h-6" />, text: "Transparent & legal MLM business model" },
        { icon: <Package className="w-6 h-6" />, text: "High-quality, daily-use products" },
        { icon: <TrendingUp className="w-6 h-6" />, text: "Unlimited income potential" },
        { icon: <Users className="w-6 h-6" />, text: "Regular training & leadership programs" },
        { icon: <Heart className="w-6 h-6" />, text: "Strong support system" },
        { icon: <Award className="w-6 h-6" />, text: "Long-term vision with stable growth" }
    ];

    const products = [
        {
            name: "Herbal Sunscreen Lotion",
            category: "Skin Care",
            mrp: "₹450",
            dp: "₹400",
            bv: "100",
            slug: "herbal-sunscreen-lotion",
            image: productImages[0]
        },
        {
            name: "Papaya Soap",
            category: "Skin Care",
            mrp: "₹120",
            dp: "₹100",
            bv: "25",
            slug: "papaya-soap",
            image: productImages[1]
        },
        {
            name: "Herbal Hair Oil",
            category: "Hair Care",
            mrp: "₹350",
            dp: "₹300",
            bv: "75",
            slug: "herbal-hair-oil",
            image: productImages[2]
        },
        {
            name: "Hair Shampoo",
            category: "Hair Care",
            mrp: "₹280",
            dp: "₹240",
            bv: "60",
            slug: "hair-shampoo",
            image: productImages[3]
        }
    ];

    const businessHighlights = [
        "Low investment, high growth potential",
        "Work from anywhere",
        "Earn part-time or full-time"
    ];

    const supportItems = [
        "Product knowledge training",
        "Business & leadership development",
        "Online and offline seminars"
    ];

    const newsItems = [
        { date: "15 Mar 2025", title: "New Product Launch: Herbal Sunscreen Lotion", slug: "new-product-launch", category: "Product" },
        { date: "10 Mar 2025", title: "National Seminar in Mumbai on April 5-6", slug: "national-seminar", category: "Event" },
        { date: "05 Mar 2025", title: "Sanyukt Parivaar crosses 10,000 distributors", slug: "crosses-10000", category: "Achievement" }
    ];

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleRecharge = (e) => {
        e.preventDefault();
        if (mobileNumber && operator && amount) {
            alert(`Recharge of ₹${amount} initiated for ${mobileNumber}`);
            // Reset form
            setMobileNumber('');
            setOperator('');
            setAmount('');
            setShowPlanPopup(false);
        } else {
            alert('Please fill all fields');
        }
    };

    const selectPlan = (planAmount) => {
        setAmount(planAmount);
        setShowPlanPopup(false);
    };

    if (!imagesLoaded) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8FAF5]">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-[#0A7A2F] border-t-[#F7931E] rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[#0A7A2F] font-medium">Loading Sanyukt Parivaar...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#0A7A2F] to-[#2F7A32] text-white">
                <div className="absolute inset-0 bg-black/20 z-10"></div>

                {/* Slider */}
                <div className="relative h-[500px]">
                    {heroSlides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-20"></div>
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80";
                                }}
                            />

                            <div className="absolute inset-0 z-30 flex items-center">
                                <div className="container mx-auto px-4">
                                    <div className="max-w-3xl animate-fadeInUp">
                                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                                            {slide.title}
                                        </h1>
                                        <h2 className="text-lg md:text-xl text-[#F7931E] mb-4">
                                            {slide.subtitle}
                                        </h2>
                                        <p className="text-sm md:text-base mb-6 text-gray-200 leading-relaxed">
                                            {slide.description}
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                onClick={() => handleNavigation('/register')}
                                                className="px-6 py-3 bg-[#F7931E] text-white font-semibold rounded-lg hover:bg-[#e07d0b] transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2"
                                            >
                                                <span>Join Now</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleNavigation('/contact')}
                                                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0A7A2F] transform hover:-translate-y-1 transition-all"
                                            >
                                                Contact Us
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Slider Controls */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'w-6 bg-[#F7931E]' : 'bg-white/50 hover:bg-white'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT US SECTION */}
            <section className="py-16 bg-[#F8FAF5]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A7A2F] inline-block relative pb-3">
                            Who We Are
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#F7931E]"></span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <h3 className="text-xl md:text-2xl font-semibold text-[#2F7A32] mb-4">
                                Sanyukt Parivaar & Rich Life Company
                            </h3>

                            <p>
                                We are a direct Selling company founded by business professionals. At Ishaavia Global Marketing, we create dynamic entrepreneurs through the promotion of high quality wellness products, personal care products, Home care products.
                            </p>
                            <p>
                                Sanyukt Parivaar & Rich Life Company was founded with a clear vision — to create financial independence through ethical direct selling. We believe in growing together.
                            </p>

                            <div className="flex items-center space-x-4 pt-4">
                                <div className="flex -space-x-2">
                                    {teamImages.map((img, idx) => (
                                        <img key={idx} src={img} alt="Team" className="w-10 h-10 rounded-full border-2 border-white" />
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <span className="font-bold text-[#0A7A2F]">5000+</span>
                                    <span className="text-gray-600 ml-1">Happy Families</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <img src={aboutImage} alt="About Us" className="rounded-lg shadow-xl w-full" />
                            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-md">
                                <div className="text-2xl font-bold text-[#0A7A2F]">10+</div>
                                <div className="text-xs text-gray-600">Years of Trust</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MOBILE RECHARGE SECTION - SIMPLE LIKE MOBILE APP */}
            <section className="py-16 bg-gradient-to-br from-[#0A7A2F] to-[#2F7A32] text-white">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                            <Smartphone className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            Mobile Recharge
                        </h2>
                        <p className="text-white/90 max-w-2xl mx-auto">
                            Fast, secure & instant mobile recharge for all operators
                        </p>
                    </div>

                    {/* Recharge Card - Like Mobile App */}
                    <div className="max-w-md mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                            {/* Card Header */}
                            <div className="bg-gradient-to-r from-[#F7931E] to-[#f9a93b] p-6 text-center">
                                <Zap className="w-12 h-12 mx-auto mb-2 text-white" />
                                <h3 className="text-xl font-bold text-white">Instant Recharge</h3>
                                <p className="text-white/90 text-sm">Get 5% cashback on every recharge</p>
                            </div>

                            {/* Recharge Form */}
                            <form onSubmit={handleRecharge} className="p-6 space-y-5">
                                {/* Mobile Number Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                        <Smartphone className="w-4 h-4 text-[#0A7A2F]" />
                                        Mobile Number
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            value={mobileNumber}
                                            onChange={(e) => setMobileNumber(e.target.value)}
                                            placeholder="Enter 10-digit mobile number"
                                            className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A7A2F] focus:border-transparent text-gray-800"
                                            maxLength="10"
                                        />
                                        <span className="absolute right-3 top-3 text-xs text-gray-400">🇮🇳 +91</span>
                                    </div>
                                </div>

                                {/* Operator Selection */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                        <CircleUser className="w-4 h-4 text-[#0A7A2F]" />
                                        Select Operator
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {operators.map((op) => (
                                            <button
                                                key={op.id}
                                                type="button"
                                                onClick={() => setOperator(op.id)}
                                                className={`p-3 rounded-xl border-2 transition-all duration-300 flex items-center justify-center gap-2 ${operator === op.id
                                                    ? 'border-[#0A7A2F] bg-[#0A7A2F]/10'
                                                    : 'border-gray-200 hover:border-[#0A7A2F]'
                                                    }`}
                                            >
                                                <span className="text-xl">{op.icon}</span>
                                                <span className="font-medium text-gray-700">{op.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Amount Input with Plans */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                        <Wallet className="w-4 h-4 text-[#0A7A2F]" />
                                        Recharge Amount
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            placeholder="Enter amount"
                                            className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A7A2F] focus:border-transparent text-gray-800"
                                        />
                                        <span className="absolute right-3 top-3 text-gray-500 font-medium">₹</span>
                                    </div>

                                    {/* Quick Plan Selection */}
                                    <button
                                        type="button"
                                        onClick={() => setShowPlanPopup(!showPlanPopup)}
                                        className="mt-2 text-sm text-[#0A7A2F] flex items-center gap-1 hover:underline"
                                    >
                                        <Hash className="w-4 h-4" />
                                        View recommended plans
                                    </button>

                                    {/* Plan Popup */}
                                    {showPlanPopup && (
                                        <div className="absolute z-50 mt-2 w-full max-w-md bg-white rounded-xl shadow-xl border border-gray-200 p-4 animate-fadeInUp">
                                            <div className="flex justify-between items-center mb-3">
                                                <h4 className="font-bold text-gray-800">Select a Plan</h4>
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPlanPopup(false)}
                                                    className="text-gray-500 hover:text-gray-700"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                            <div className="space-y-2 max-h-60 overflow-y-auto">
                                                {plans.map((plan) => (
                                                    <button
                                                        key={plan.amount}
                                                        type="button"
                                                        onClick={() => selectPlan(plan.amount)}
                                                        className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-[#0A7A2F] hover:bg-[#0A7A2F]/5 transition-all duration-300"
                                                    >
                                                        <div className="flex justify-between items-center">
                                                            <div>
                                                                <span className="font-bold text-gray-800">₹{plan.amount}</span>
                                                                <span className="text-sm text-gray-600 ml-2">{plan.data}</span>
                                                            </div>
                                                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                                                {plan.validity}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs text-gray-500 mt-1">{plan.description}</p>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Recharge Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#F7931E] to-[#f9a93b] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group"
                                >
                                    <Zap className="w-5 h-5 group-hover:animate-pulse" />
                                    Proceed to Recharge
                                </button>

                                {/* Secure Transaction Note */}
                                <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1">
                                    <Shield className="w-4 h-4" />
                                    Secure & Instant Transaction
                                </p>
                            </form>

                            {/* Features List */}
                            <div className="px-6 pb-6 grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 text-xs text-gray-600">
                                    <Check className="w-4 h-4 text-green-500" />
                                    All Operators
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-600">
                                    <Check className="w-4 h-4 text-green-500" />
                                    Instant
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-600">
                                    <Check className="w-4 h-4 text-green-500" />
                                    24/7 Support
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-600">
                                    <Check className="w-4 h-4 text-green-500" />
                                    Cashback
                                </div>
                            </div>
                        </div>

                        {/* Trust Badge */}
                        <div className="mt-6 text-center text-white/80 text-sm flex items-center justify-center gap-4">
                            <div className="flex items-center gap-1">
                                <Shield className="w-4 h-4" />
                                100% Secure
                            </div>
                            <div className="flex items-center gap-1">
                                <Zap className="w-4 h-4" />
                                Instant Processing
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A7A2F] mb-3">
                        Why Choose Sanyukt Parivaar?
                    </h2>
                    <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-sm">
                        Discover what makes us the preferred choice for thousands of entrepreneurs
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChoosePoints.map((point, index) => (
                            <div
                                key={index}
                                className="group p-5 bg-[#F8FAF5] rounded-xl hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-10 h-10 bg-[#0A7A2F] rounded-lg flex items-center justify-center text-white mb-3 group-hover:bg-[#F7931E] transition-colors">
                                    {point.icon}
                                </div>
                                <p className="text-gray-700 text-sm">{point.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories Section */}
            <section className="py-16 bg-[#F8FAF5]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A7A2F] mb-3">
                        Product Categories
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <button onClick={() => handleNavigation('/products/skin-care')} className="group relative overflow-hidden rounded-xl cursor-pointer h-60 w-full">
                            <img src={skinCareImage} alt="Skin Care" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Skin Care</h3>
                                    <p className="text-gray-200 text-xs">Advanced skincare products for natural beauty</p>
                                </div>
                            </div>
                        </button>
                        <button onClick={() => handleNavigation('/products/hair-care')} className="group relative overflow-hidden rounded-xl cursor-pointer h-60 w-full">
                            <img src={hairCareImage} alt="Hair Care" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Hair Care</h3>
                                    <p className="text-gray-200 text-xs">Herbal solutions for healthy hair growth</p>
                                </div>
                            </div>
                        </button>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-center text-[#0A7A2F] mb-6">
                        Our Popular Products
                    </h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {products.map((product, index) => (
                            <div key={index} className="bg-white rounded-lg shadow overflow-hidden group hover:shadow-md transition-all duration-300">
                                <div className="relative">
                                    <img src={product.image} alt={product.name} className="w-full h-36 object-cover" />
                                    <span className="absolute top-2 right-2 bg-[#F7931E] text-white text-xs px-2 py-1 rounded-full">
                                        {product.category}
                                    </span>
                                </div>
                                <div className="p-3">
                                    <h4 className="font-semibold text-gray-800 mb-1 text-sm line-clamp-2">{product.name}</h4>
                                    <div className="space-y-1 text-xs mb-2">
                                        <p className="flex justify-between"><span className="text-gray-600">MRP:</span> <span className="font-medium">{product.mrp}</span></p>
                                        <p className="flex justify-between"><span className="text-gray-600">DP:</span> <span className="font-medium text-[#0A7A2F]">{product.dp}</span></p>
                                        <p className="flex justify-between"><span className="text-gray-600">BV:</span> <span className="font-medium">{product.bv}</span></p>
                                    </div>
                                    <button
                                        onClick={() => handleNavigation(`/product/${product.slug}`)}
                                        className="block w-full py-1.5 bg-[#0A7A2F] text-white text-xs rounded-lg text-center hover:bg-[#F7931E] transition-colors"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Opportunity Section */}
            <section className="py-16 bg-gradient-to-r from-[#0A7A2F] to-[#2F7A32] text-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                A Powerful Business Opportunity
                            </h2>
                            <p className="text-gray-200 text-sm leading-relaxed">
                                Sanyukt Parivaar & Rich Life Company offers a proven MLM business plan that allows individuals to earn through product sales, team building, and leadership development.
                            </p>

                            <div className="space-y-2">
                                {businessHighlights.map((highlight, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <Check className="w-4 h-4 text-[#F7931E] flex-shrink-0" />
                                        <span className="text-sm">{highlight}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleNavigation('/opportunity')}
                                className="inline-block px-5 py-2 bg-[#F7931E] text-white text-sm font-semibold rounded-lg hover:bg-[#e07d0b] transform hover:-translate-y-1 transition-all"
                            >
                                View Opportunities
                            </button>
                        </div>

                        <div className="relative">
                            <img src={businessImage} alt="Business Opportunity" className="rounded-lg shadow-2xl w-full" />
                            <div className="absolute -top-3 -right-3 bg-[#F7931E] p-4 rounded-lg shadow-xl">
                                <div className="text-xl font-bold">Unlimited</div>
                                <div className="text-xs">Income Potential</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mid CTA Strip */}
            <section className="py-10 bg-[#F7931E]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white text-center md:text-left">
                            We Are One of the Fastest Growing Direct Selling Companies
                        </h3>
                        <button
                            onClick={() => handleNavigation('/contact')}
                            className="px-5 py-2 bg-white text-[#F7931E] font-semibold rounded-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all shadow-md whitespace-nowrap text-sm"
                        >
                            CONTACT NOW
                        </button>
                    </div>
                </div>
            </section>

            {/* Training & Support Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0A7A2F] relative inline-block pb-2">
                                Training & Support System
                                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#F7931E]"></span>
                            </h2>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                We believe success comes with knowledge and guidance. That's why we provide structured training programs and continuous mentorship.
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                {supportItems.map((item, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 bg-[#F7931E] rounded-full"></div>
                                        <span className="text-xs text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleNavigation('/training')}
                                className="inline-block text-[#0A7A2F] text-sm font-medium hover:text-[#F7931E] transition-colors"
                            >
                                Learn More <ArrowRight className="w-3 h-3 inline ml-1" />
                            </button>
                        </div>

                        <div className="relative">
                            <img src={trainingImage} alt="Training" className="rounded-lg shadow-xl w-full" />
                            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-md">
                                <div className="flex items-center space-x-3">
                                    <Play className="w-8 h-8 text-[#F7931E]" />
                                    <div>
                                        <div className="font-bold text-sm">Leadership Programs</div>
                                        <div className="text-xs text-gray-600">Top 10 in India</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest News & Updates */}
            <section className="py-16 bg-[#F8FAF5]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0A7A2F] mb-3">
                        Latest News & Updates
                    </h2>
                    <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm">
                        Stay updated with the latest company announcements and success stories.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4">
                        {newsItems.map((news, index) => (
                            <div key={index} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-all duration-300">
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-semibold px-2 py-0.5 bg-[#F7931E] text-white rounded-full">
                                            {news.category}
                                        </span>
                                        <span className="text-xs text-gray-500 flex items-center">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {news.date}
                                        </span>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">{news.title}</h4>
                                    <button
                                        onClick={() => handleNavigation(`/news/${news.slug}`)}
                                        className="text-[#0A7A2F] text-xs font-medium hover:text-[#F7931E] transition-colors inline-flex items-center"
                                    >
                                        Read More <ArrowRight className="w-3 h-3 ml-1" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Trust Section */}
            <section className="py-16 bg-gradient-to-r from-[#0A7A2F] to-[#2F7A32] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Together We Grow, Together We Prosper
                    </h2>
                    <p className="text-base mb-6 max-w-2xl mx-auto text-gray-200">
                        At Sanyukt Parivaar & Rich Life Company, we don't just build income — we build people, confidence, and a better future.
                    </p>
                    <button
                        onClick={() => handleNavigation('/register')}
                        className="inline-block px-5 py-2 bg-[#F7931E] text-white font-semibold rounded-lg hover:bg-[#e07d0b] transform hover:-translate-y-1 transition-all shadow-md"
                    >
                        Join Sanyukt Parivaar Today
                    </button>
                </div>
            </section>

            <hr />


            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
        </div>
    );
};

export default HomePage;