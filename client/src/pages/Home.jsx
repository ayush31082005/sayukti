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
    CircleUser, Hash, Wallet, Search, Filter
} from 'lucide-react';

const HomePage = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [imageErrors, setImageErrors] = useState({});

    // Mobile recharge form state
    const [mobileNumber, setMobileNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [amount, setAmount] = useState('');
    const [showPlanPopup, setShowPlanPopup] = useState(false);
    const [filteredPlans, setFilteredPlans] = useState([]);
    const [searchAmount, setSearchAmount] = useState('');

    // Hero slides data
    const heroSlides = [
        {
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
            title: "Welcome to Sanyukt Parivaar & Rich Life Company",
            subtitle: "A Trusted & Fast-Growing Multi-Level Marketing Company",
            description: "Sanyukt Parivaar & Rich Life Company is a people-driven direct selling organization committed to empowering individuals with sustainable income opportunities."
        },
        {
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
            title: "Build Your Financial Freedom",
            subtitle: "Join India's Fastest Growing MLM Company",
            description: "Experience the power of network marketing with our proven business model."
        },
        {
            image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
            title: "Quality Products, Unlimited Potential",
            subtitle: "Skin Care • Hair Care • Wellness Products",
            description: "Our range of high-quality, daily-use products ensures repeat business."
        }
    ];

    // About section image
    const aboutImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80";

    // Team images
    const teamImages = [
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80"
    ];

    // Category images
    const skinCareImage = "https://images.pexels.com/photos/6621360/pexels-photo-6621360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop";
    const hairCareImage = "https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop";

    // ✅ FIXED: Working Product Images from Pexels (Verified Links)
    const productImages = [
        "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop", // Herbal Sunscreen Lotion
        "https://images.pexels.com/photos/5946066/pexels-photo-5946066.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop", // Papaya Soap
        "https://images.pexels.com/photos/6955177/pexels-photo-6955177.jpeg", // ✅ Hair Oil (Working)
        "https://images.pexels.com/photos/3738345/pexels-photo-3738345.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"  // Hair Shampoo
    ];

    // Business opportunity image
    const businessImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80";

    // Training image
    const trainingImage = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80";

    // Mobile operators list
    const operators = [
        { id: 'airtel', name: 'Airtel', icon: '🟥' },
        { id: 'jio', name: 'Jio', icon: '🔷' },
        { id: 'vi', name: 'Vi', icon: '🟪' },
        { id: 'bsnl', name: 'BSNL', icon: '🟦' }
    ];

    // Recharge plans
    const plans = [
        { amount: 10, data: '0.1GB', validity: '1 Day', talktime: '₹7.65', description: 'Daily Data Pack', benefits: '0.1GB/day • Local/STD calls @2.5p/sec' },
        { amount: 19, data: '1GB', validity: '1 Day', talktime: '₹16.65', description: 'Daily Data Pack', benefits: '1GB/day • Unlimited calls • 100 SMS/day' },
        { amount: 29, data: '1GB', validity: '1 Day', talktime: '₹26.65', description: 'Daily Pack', benefits: '1GB data • Unlimited calls • 100 SMS' },
        { amount: 48, data: '3GB', validity: '1 Day', talktime: '₹45.65', description: 'Daily Pack', benefits: '3GB • Unlimited calls • 100 SMS' },
        { amount: 79, data: '1GB', validity: '28 Days', talktime: '₹76.65', description: 'Monthly Data Pack', benefits: '1GB • Unlimited calls • 300 SMS', popular: true },
        { amount: 99, data: '1GB', validity: '28 Days', talktime: '₹96.65', description: 'Monthly Data Pack', benefits: '1GB/day • Unlimited calls • 100 SMS/day', popular: true },
        { amount: 149, data: '2GB', validity: '28 Days', talktime: '₹146.65', description: 'Monthly Pack', benefits: '2GB/day • Unlimited calls • 100 SMS/day' },
        { amount: 199, data: '3GB', validity: '28 Days', talktime: '₹196.65', description: 'Monthly Pack', benefits: '3GB/day • Unlimited calls • 100 SMS/day', popular: true },
        { amount: 299, data: '6GB', validity: '56 Days', talktime: '₹296.65', description: 'Smart Pack', benefits: '6GB • Unlimited calls • 3000 SMS', popular: true },
        { amount: 399, data: '12GB', validity: '84 Days', talktime: '₹396.65', description: 'Smart Pack', benefits: '12GB • Unlimited calls • 3600 SMS', popular: true },
        { amount: 499, data: '24GB', validity: '84 Days', talktime: '₹496.65', description: 'Premium Pack', benefits: '24GB • Unlimited calls • 3600 SMS • Zee5', popular: true },
        { amount: 599, data: '36GB', validity: '84 Days', talktime: '₹596.65', description: 'Premium Pack', benefits: '36GB • Unlimited calls • 3600 SMS • Sony LIV' },
        { amount: 699, data: '48GB', validity: '84 Days', talktime: '₹696.65', description: 'Premium Pack', benefits: '48GB • Unlimited calls • 3600 SMS • Amazon Prime' },
        { amount: 799, data: '75GB', validity: '84 Days', talktime: '₹796.65', description: 'Premium Pack', benefits: '75GB • Unlimited calls • 3600 SMS • All Apps' },
        { amount: 999, data: '120GB', validity: '84 Days', talktime: '₹996.65', description: 'Ultimate Pack', benefits: '120GB • Unlimited calls • 3600 SMS • All Apps' }
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
            trainingImage
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

    // Filter plans based on search amount
    useEffect(() => {
        if (searchAmount) {
            const searchValue = parseInt(searchAmount);
            if (!isNaN(searchValue)) {
                const filtered = plans.filter(plan =>
                    plan.amount >= searchValue - 20 && plan.amount <= searchValue + 100
                ).sort((a, b) => a.amount - b.amount);
                setFilteredPlans(filtered);
            } else {
                setFilteredPlans(plans);
            }
        } else {
            setFilteredPlans(plans);
        }
    }, [searchAmount]);

    const whyChoosePoints = [
        { icon: <Shield className="w-5 h-5" />, text: "Transparent & legal MLM business model" },
        { icon: <Package className="w-5 h-5" />, text: "High-quality, daily-use products" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "Unlimited income potential" },
        { icon: <Users className="w-5 h-5" />, text: "Regular training & leadership programs" },
        { icon: <Heart className="w-5 h-5" />, text: "Strong support system" },
        { icon: <Award className="w-5 h-5" />, text: "Long-term vision with stable growth" }
    ];

    // ✅ Products with correct data and working images
    const products = [
        {
            name: "Herbal Sunscreen Lotion",
            category: "Skin Care",
            mrp: "₹450",
            dp: "₹400",
            bv: "100",
            slug: "herbal-sunscreen-lotion",
            image: productImages[0],
            fallbackIcon: "🧴",
            altText: "Herbal Sunscreen Lotion"
        },
        {
            name: "Papaya Soap",
            category: "Skin Care",
            mrp: "₹120",
            dp: "₹100",
            bv: "25",
            slug: "papaya-soap",
            image: productImages[1],
            fallbackIcon: "🧼",
            altText: "Papaya Soap"
        },
        {
            name: "Herbal Hair Oil",
            category: "Hair Care",
            mrp: "₹350",
            dp: "₹300",
            bv: "75",
            slug: "herbal-hair-oil",
            image: productImages[2],
            fallbackIcon: "🧴",
            altText: "Herbal Hair Oil"
        },
        {
            name: "Hair Shampoo",
            category: "Hair Care",
            mrp: "₹280",
            dp: "₹240",
            bv: "60",
            slug: "hair-shampoo",
            image: productImages[3],
            fallbackIcon: "🧴",
            altText: "Hair Shampoo"
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
            setMobileNumber('');
            setOperator('');
            setAmount('');
            setSearchAmount('');
            setShowPlanPopup(false);
        } else {
            alert('Please fill all fields');
        }
    };

    const selectPlan = (planAmount) => {
        setAmount(planAmount);
        setSearchAmount(planAmount.toString());
        setShowPlanPopup(false);
    };

    const openPlanPopup = () => {
        setShowPlanPopup(true);
        if (amount) {
            setSearchAmount(amount);
        }
    };

    const handleImageError = (productName) => {
        setImageErrors(prev => ({ ...prev, [productName]: true }));
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
                <div className="relative h-[500px] md:h-[600px]">
                    {heroSlides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-20"></div>
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80";
                                }}
                            />
                            <div className="absolute inset-0 z-30 flex items-center">
                                <div className="container mx-auto px-4">
                                    <div className="max-w-3xl animate-fadeInUp">
                                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                                            {slide.title}
                                        </h1>
                                        <h2 className="text-base md:text-lg text-[#F7931E] mb-3">
                                            {slide.subtitle}
                                        </h2>
                                        <p className="text-xs md:text-sm mb-4 text-gray-200 leading-relaxed max-w-2xl">
                                            {slide.description}
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                onClick={() => handleNavigation('/register')}
                                                className="px-5 py-2.5 bg-[#F7931E] text-white font-semibold rounded-lg hover:bg-[#e07d0b] transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 text-sm"
                                            >
                                                <span>Join Now</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleNavigation('/contact')}
                                                className="px-5 py-2.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0A7A2F] transform hover:-translate-y-1 transition-all text-sm"
                                            >
                                                Contact Us
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'w-6 bg-[#F7931E]' : 'bg-white/50 hover:bg-white'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT US SECTION */}
            <section className="py-12 md:py-16 bg-[#F8FAF5]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0A7A2F] inline-block relative pb-3">
                            Who We Are
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#F7931E]"></span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                        <div className="space-y-3 text-gray-700 leading-relaxed order-2 md:order-1">
                            <h3 className="text-lg md:text-xl font-semibold text-[#2F7A32] mb-3">
                                Sanyukt Parivaar & Rich Life Company
                            </h3>
                            <p className="text-sm">
                                We are a direct Selling company founded by business professionals. At Ishaavia Global Marketing, we create dynamic entrepreneurs through the promotion of high quality wellness products, personal care products, Home care products.
                            </p>
                            <p className="text-sm">
                                Sanyukt Parivaar & Rich Life Company was founded with a clear vision — to create financial independence through ethical direct selling. We believe in growing together.
                            </p>
                            <div className="flex items-center space-x-4 pt-3">
                                <div className="flex -space-x-2">
                                    {teamImages.map((img, idx) => (
                                        <img key={idx} src={img} alt="Team" className="w-8 h-8 rounded-full border-2 border-white" />
                                    ))}
                                </div>
                                <div className="text-xs">
                                    <span className="font-bold text-[#0A7A2F]">5000+</span>
                                    <span className="text-gray-600 ml-1">Happy Families</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative order-1 md:order-2">
                            <img src={aboutImage} alt="About Us" className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover" />
                            <div className="absolute -bottom-3 -left-3 bg-white p-3 rounded-lg shadow-md">
                                <div className="text-xl font-bold text-[#0A7A2F]">10+</div>
                                <div className="text-xs text-gray-600">Years of Trust</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MOBILE RECHARGE SECTION */}
            <section className="py-12 md:py-16 bg-gradient-to-br from-[#4CAF50] to-[#66BB6A] text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3 backdrop-blur-sm">
                            <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">
                            Mobile Recharge
                        </h2>
                        <p className="text-white/90 text-sm max-w-2xl mx-auto">
                            Fast, secure & instant mobile recharge for all operators
                        </p>
                    </div>
                    <div className="max-w-md mx-auto">
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                            <div className="bg-gradient-to-r from-[#F7931E] to-[#f9a93b] p-4 text-center">
                                <Zap className="w-8 h-8 mx-auto mb-1 text-white" />
                                <h3 className="text-base font-bold text-white">Instant Recharge</h3>
                                <p className="text-white/90 text-xs">Get 5% cashback on every recharge</p>
                            </div>
                            <form onSubmit={handleRecharge} className="p-5 space-y-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1 flex items-center gap-1">
                                        <Smartphone className="w-3 h-3 text-[#4CAF50]" />
                                        Mobile Number
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            value={mobileNumber}
                                            onChange={(e) => setMobileNumber(e.target.value)}
                                            placeholder="Enter 10-digit mobile number"
                                            className="w-full pl-3 pr-12 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent text-gray-800 text-sm"
                                            maxLength="10"
                                        />
                                        <span className="absolute right-3 top-2.5 text-xs text-gray-400">🇮🇳 +91</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1 flex items-center gap-1">
                                        <CircleUser className="w-3 h-3 text-[#4CAF50]" />
                                        Select Operator
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {operators.map((op) => (
                                            <button
                                                key={op.id}
                                                type="button"
                                                onClick={() => setOperator(op.id)}
                                                className={`p-2 rounded-lg border-2 transition-all duration-300 flex items-center justify-center gap-1 ${operator === op.id
                                                    ? 'border-[#4CAF50] bg-[#4CAF50]/10'
                                                    : 'border-gray-200 hover:border-[#4CAF50]'
                                                    }`}
                                            >
                                                <span className="text-base">{op.icon}</span>
                                                <span className="font-medium text-gray-700 text-xs">{op.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1 flex items-center gap-1">
                                        <Wallet className="w-3 h-3 text-[#4CAF50]" />
                                        Recharge Amount
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={amount ? `₹${amount}` : ''}
                                            onClick={openPlanPopup}
                                            placeholder="Click to select plan"
                                            className="w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent text-gray-800 text-sm cursor-pointer"
                                            readOnly
                                        />
                                        <span className="absolute right-3 top-2.5 text-gray-500">
                                            <ChevronDown className="w-4 h-4" />
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={openPlanPopup}
                                        className="mt-2 text-xs text-[#4CAF50] flex items-center gap-1 hover:underline font-medium"
                                    >
                                        <Search className="w-3 h-3" />
                                        Browse all plans ({plans.length} plans available)
                                    </button>
                                    {showPlanPopup && (
                                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
                                            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-hidden animate-fadeInUp">
                                                <div className="bg-gradient-to-r from-[#4CAF50] to-[#66BB6A] p-4 text-white sticky top-0">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <h4 className="font-bold text-base">Select Recharge Plan</h4>
                                                            <p className="text-xs text-white/80">{filteredPlans.length} plans available</p>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowPlanPopup(false)}
                                                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                                                        >
                                                            ✕
                                                        </button>
                                                    </div>
                                                    <div className="mt-3 relative">
                                                        <input
                                                            type="number"
                                                            value={searchAmount}
                                                            onChange={(e) => setSearchAmount(e.target.value)}
                                                            placeholder="Search by amount (e.g., 99, 199, 299)"
                                                            className="w-full px-3 py-2 pr-8 rounded-lg text-gray-800 text-sm"
                                                        />
                                                        <Search className="absolute right-2 top-2.5 w-4 h-4 text-gray-500" />
                                                    </div>
                                                </div>
                                                <div className="overflow-y-auto max-h-[60vh] p-4">
                                                    <div className="space-y-2">
                                                        {filteredPlans.map((plan, index) => (
                                                            <button
                                                                key={index}
                                                                type="button"
                                                                onClick={() => selectPlan(plan.amount)}
                                                                className={`w-full p-3 text-left border rounded-xl transition-all duration-300 hover:border-[#4CAF50] hover:shadow-md ${plan.popular ? 'border-[#F7931E] bg-orange-50' : 'border-gray-200'
                                                                    }`}
                                                            >
                                                                <div className="flex justify-between items-start">
                                                                    <div className="flex-1">
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <span className="font-bold text-lg text-gray-800">₹{plan.amount}</span>
                                                                            {plan.popular && (
                                                                                <span className="text-xs bg-[#F7931E] text-white px-2 py-0.5 rounded-full">
                                                                                    Popular
                                                                                </span>
                                                                            )}
                                                                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                                                                {plan.talktime}
                                                                            </span>
                                                                        </div>
                                                                        <div className="flex items-center gap-2 mt-1">
                                                                            <span className="text-sm font-semibold text-[#4CAF50]">{plan.data}</span>
                                                                            <span className="text-xs text-gray-500">•</span>
                                                                            <span className="text-xs font-medium text-gray-700">{plan.validity}</span>
                                                                        </div>
                                                                        <p className="text-xs font-medium text-gray-700 mt-1">{plan.description}</p>
                                                                        <p className="text-xs text-gray-500 mt-0.5">{plan.benefits}</p>
                                                                    </div>
                                                                    <div className="text-[#4CAF50] ml-2">
                                                                        <Zap className="w-5 h-5" />
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="p-3 border-t border-gray-200 bg-gray-50">
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPlanPopup(false)}
                                                        className="w-full py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#F7931E] to-[#f9a93b] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-1 text-sm"
                                >
                                    <Zap className="w-4 h-4" />
                                    Proceed to Recharge
                                </button>
                                <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1">
                                    <Shield className="w-3 h-3" />
                                    Secure & Instant Transaction
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0A7A2F] mb-2">
                        Why Choose Sanyukt Parivaar?
                    </h2>
                    <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-xs md:text-sm">
                        Discover what makes us the preferred choice for thousands of entrepreneurs
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {whyChoosePoints.map((point, index) => (
                            <div
                                key={index}
                                className="group p-3 bg-[#F8FAF5] rounded-lg hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-8 h-8 bg-[#0A7A2F] rounded-lg flex items-center justify-center text-white mb-2 group-hover:bg-[#F7931E] transition-colors">
                                    {point.icon}
                                </div>
                                <p className="text-gray-700 text-xs">{point.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ Product Categories Section with Working Images */}
            <section className="py-12 md:py-16 bg-[#F8FAF5]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0A7A2F] mb-6">
                        Our Popular Products
                    </h2>

                    {/* Category Tabs */}
                    <div className="flex justify-center space-x-4 mb-8">
                        <button className="px-6 py-2 bg-[#0A7A2F] text-white rounded-full text-sm font-semibold">
                            Skin Care
                        </button>
                        <button className="px-6 py-2 bg-white text-[#0A7A2F] rounded-full text-sm font-semibold border border-[#0A7A2F] hover:bg-[#0A7A2F] hover:text-white transition">
                            Hair Care
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                    {!imageErrors[product.name] ? (
                                        <img
                                            src={product.image}
                                            alt={product.altText}
                                            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                            onError={() => handleImageError(product.name)}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-orange-100">
                                            <span className="text-6xl">{product.fallbackIcon}</span>
                                        </div>
                                    )}
                                    <span className="absolute top-2 right-2 bg-[#F7931E] text-white text-xs px-2 py-1 rounded-full z-10">
                                        {product.category}
                                    </span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800 text-sm mb-3 line-clamp-2 min-h-[40px]">{product.name}</h3>
                                    <div className="space-y-2 text-sm mb-4">
                                        <div className="flex justify-between items-center border-b border-gray-100 pb-1">
                                            <span className="text-gray-500">MRP:</span>
                                            <span className="font-medium text-gray-800 line-through">{product.mrp}</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-gray-100 pb-1">
                                            <span className="text-gray-500">DP:</span>
                                            <span className="font-bold text-lg text-[#0A7A2F]">{product.dp}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500">BV:</span>
                                            <span className="font-semibold text-gray-800">{product.bv}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleNavigation(`/product/${product.slug}`)}
                                        className="w-full bg-[#0A7A2F] text-white text-sm py-2.5 rounded-lg hover:bg-[#F7931E] transition-colors font-medium"
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
            <section className="py-12 md:py-16 bg-gradient-to-r from-[#0A7A2F] to-[#2F7A32] text-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="space-y-3">
                            <h2 className="text-xl md:text-2xl font-bold">
                                A Powerful Business Opportunity
                            </h2>
                            <p className="text-gray-200 text-xs md:text-sm leading-relaxed">
                                Sanyukt Parivaar & Rich Life Company offers a proven MLM business plan that allows individuals to earn through product sales, team building, and leadership development.
                            </p>
                            <div className="space-y-1">
                                {businessHighlights.map((highlight, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <Check className="w-3 h-3 text-[#F7931E] flex-shrink-0" />
                                        <span className="text-xs">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => handleNavigation('/opportunity')}
                                className="inline-block px-4 py-2 bg-[#F7931E] text-white text-xs font-semibold rounded-lg hover:bg-[#e07d0b] transform hover:-translate-y-1 transition-all"
                            >
                                View Opportunities
                            </button>
                        </div>
                        <div className="relative">
                            <img src={businessImage} alt="Business Opportunity" className="rounded-lg shadow-2xl w-full h-48 md:h-64 object-cover" />
                            <div className="absolute -top-2 -right-2 bg-[#F7931E] p-3 rounded-lg shadow-xl">
                                <div className="text-base font-bold">Unlimited</div>
                                <div className="text-xs">Income Potential</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mid CTA Strip */}
            <section className="py-8 bg-[#F7931E]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                        <h3 className="text-base md:text-lg font-bold text-white text-center md:text-left">
                            We Are One of the Fastest Growing Direct Selling Companies
                        </h3>
                        <button
                            onClick={() => handleNavigation('/contact')}
                            className="px-4 py-2 bg-white text-[#F7931E] font-semibold rounded-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all shadow-md whitespace-nowrap text-xs"
                        >
                            CONTACT NOW
                        </button>
                    </div>
                </div>
            </section>

            {/* Training & Support Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="space-y-3 order-2 md:order-1">
                            <h2 className="text-xl md:text-2xl font-bold text-[#0A7A2F] relative inline-block pb-1">
                                Training & Support System
                                <span className="absolute bottom-0 left-0 w-10 h-1 bg-[#F7931E]"></span>
                            </h2>
                            <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                                We believe success comes with knowledge and guidance. That's why we provide structured training programs and continuous mentorship.
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                {supportItems.map((item, index) => (
                                    <div key={index} className="flex items-center space-x-1">
                                        <div className="w-1 h-1 bg-[#F7931E] rounded-full"></div>
                                        <span className="text-xs text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => handleNavigation('/training')}
                                className="inline-block text-[#0A7A2F] text-xs font-medium hover:text-[#F7931E] transition-colors"
                            >
                                Learn More <ArrowRight className="w-3 h-3 inline ml-1" />
                            </button>
                        </div>
                        <div className="relative order-1 md:order-2">
                            <img src={trainingImage} alt="Training" className="rounded-lg shadow-xl w-full h-48 md:h-64 object-cover" />
                            <div className="absolute -bottom-3 -left-3 bg-white p-3 rounded-lg shadow-md">
                                <div className="flex items-center space-x-2">
                                    <Play className="w-5 h-5 text-[#F7931E]" />
                                    <div>
                                        <div className="font-bold text-xs">Leadership Programs</div>
                                        <div className="text-xs text-gray-600">Top 10 in India</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest News & Updates */}
            <section className="py-12 md:py-16 bg-[#F8FAF5]">
                <div className="container mx-auto px-4">
                    <h2 className="text-xl md:text-2xl font-bold text-center text-[#0A7A2F] mb-2">
                        Latest News & Updates
                    </h2>
                    <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto text-xs">
                        Stay updated with the latest company announcements and success stories.
                    </p>
                    <div className="grid md:grid-cols-3 gap-3">
                        {newsItems.map((news, index) => (
                            <div key={index} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-all duration-300">
                                <div className="p-3">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-semibold px-1.5 py-0.5 bg-[#F7931E] text-white rounded-full">
                                            {news.category}
                                        </span>
                                        <span className="text-xs text-gray-500 flex items-center">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {news.date}
                                        </span>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2 text-xs">{news.title}</h4>
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
            <section className="py-12 md:py-16 bg-[#E8F5E9]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#0A7A2F]">
                        Together We Grow, Together We Prosper
                    </h2>
                    <p className="text-sm mb-4 max-w-2xl mx-auto text-gray-600">
                        At Sanyukt Parivaar & Rich Life Company, we don't just build income — we build people, confidence, and a better future.
                    </p>
                    <button
                        onClick={() => handleNavigation('/register')}
                        className="inline-block px-4 py-2 bg-[#F7931E] text-white font-semibold rounded-lg hover:bg-[#e07d0b] transform hover:-translate-y-1 transition-all shadow-md text-sm"
                    >
                        Join Sanyukt Parivaar Today
                    </button>
                </div>
            </section>

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