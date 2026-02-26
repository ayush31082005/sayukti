import React, { useState } from 'react';
import { Users, Phone, Mail, Home, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        sponsorId: '',
        sponsorName: '',
        position: 'Left',
        gender: 'Male',
        mobile: '',
        email: '',
        shippingAddress: '',
        state: '',
        city: '',
        password: '',
    });

    const [agreed, setAgreed] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Field ${name} changed to:`, value); // Debug log
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        setError('');
    };

    const validateForm = () => {
        // Check terms agreement
        if (!agreed) {
            setError("Please accept the terms and conditions");
            return false;
        }

        // Check required fields
        const requiredFields = [
            { field: 'sponsorId', message: 'Sponsor ID' },
            { field: 'name', message: 'Full Name' },
            { field: 'mobile', message: 'Mobile Number' },
            { field: 'email', message: 'Email ID' },
            { field: 'shippingAddress', message: 'Shipping Address' },
            { field: 'state', message: 'State' },
            { field: 'city', message: 'City' }
        ];

        for (let item of requiredFields) {
            if (!formData[item.field] || formData[item.field].trim() === '') {
                setError(`Please enter ${item.message}`);
                return false;
            }
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address");
            return false;
        }

        // Validate mobile (10 digits)
        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(formData.mobile)) {
            setError("Please enter a valid 10-digit mobile number");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted!"); // Debug log

        // Prevent double submission
        if (loading) {
            console.log("Already loading, skipping...");
            return;
        }

        // Validate form
        if (!validateForm()) {
            console.log("Validation failed");
            return;
        }

        console.log("Validation passed, submitting data...");
        setLoading(true);
        setError('');

        try {
            console.log("Sending to API:", formData);

            const response = await api.post("/register", formData);
            console.log("API Response:", response);

            if (response.data) {
                // Store email/phone for OTP verification
                localStorage.setItem('registrationEmail', formData.email);
                localStorage.setItem('registrationMobile', formData.mobile);

                // Navigate to OTP verification
                navigate("/verify-otp", {
                    state: {
                        email: formData.email,
                        mobile: formData.mobile
                    }
                });
            }

        } catch (error) {
            console.error("Full error object:", error);

            if (error.response) {
                // Server responded with error
                console.log("Error response data:", error.response.data);
                console.log("Error response status:", error.response.status);
                setError(error.response.data.message || "Registration failed. Please try again.");
            } else if (error.request) {
                // Request made but no response
                console.log("No response received:", error.request);
                setError("No response from server. Please check your internet connection.");
            } else {
                // Something else happened
                console.log("Error message:", error.message);
                setError("An error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    // Test function to check if button works
    const testClick = () => {
        console.log("Button clicked directly");
        alert("Button is working!");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto relative">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-gray-600 mb-6">
                    <Home className="h-4 w-4" />
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                    <span className="text-blue-600 font-semibold">Register Now</span>
                </div>

                {/* Main Grid */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Registration Form */}
                    <div className="flex-1">
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-green-600 to-green-800 px-6 md:px-8 py-6 text-center">
                                <h2 className="text-2xl md:text-3xl font-bold text-white">
                                    Registration Form
                                </h2>
                                <p className="text-blue-100 mt-2 text-sm md:text-base">Join our network today</p>
                            </div>

                            {/* Error Display */}
                            {error && (
                                <div className="mx-4 md:mx-6 lg:mx-8 mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                    {error}
                                </div>
                            )}

                            {/* Form Body */}
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="p-4 md:p-6 lg:p-8">
                                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                        {/* Left Column */}
                                        <div className="space-y-4">
                                            {/* Sponsor Id */}
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">
                                                    Sponsor Id <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        name="sponsorId"
                                                        value={formData.sponsorId}
                                                        onChange={handleChange}
                                                        placeholder="Enter Sponsor Id"
                                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {/* Sponsor Name */}
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">
                                                    Sponsor Name
                                                </label>
                                                <div className="relative">
                                                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        name="sponsorName"
                                                        value={formData.sponsorName}
                                                        onChange={handleChange}
                                                        placeholder="Enter Sponsor Name"
                                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">
                                                    Sponsor password
                                                </label>
                                                <div className="relative">
                                                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        placeholder="Enter Sponsor Name"
                                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    />
                                                </div>
                                            </div>


                                            {/* Position Radio */}
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">
                                                    Position <span className="text-red-500">*</span>
                                                </label>
                                                <div className="flex flex-wrap gap-4">
                                                    {['Left', 'Right'].map((pos) => (
                                                        <label key={pos} className="flex items-center space-x-2 cursor-pointer">
                                                            <input
                                                                type="radio"
                                                                name="position"
                                                                value={pos}
                                                                checked={formData.position === pos}
                                                                onChange={handleChange}
                                                                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                                                required
                                                            />
                                                            <span className="text-gray-700">{pos}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Full Name */}
                                            {/* <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">
                                                    Name <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Enter Full Name"
                                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        required
                                                    />
                                                </div>
                                            </div> */}

                                            {/* Gender Radio */}
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">
                                                    Gender <span className="text-red-500">*</span>
                                                </label>
                                                <div className="flex flex-wrap gap-4">
                                                    {['Male', 'Female', 'Other'].map((gen) => (
                                                        <label key={gen} className="flex items-center space-x-2 cursor-pointer">
                                                            <input
                                                                type="radio"
                                                                name="gender"
                                                                value={gen}
                                                                checked={formData.gender === gen}
                                                                onChange={handleChange}
                                                                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                                                required
                                                            />
                                                            <span className="text-gray-700">{gen}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Column */}
                                        <div className="space-y-4">
                                            {/* Mobile Number */}
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">
                                                    Mobile No. <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="tel"
                                                        name="mobile"
                                                        value={formData.mobile}
                                                        onChange={handleChange}
                                                        placeholder="Enter Mobile Number"
                                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        required
                                                        maxLength="10"
                                                    />
                                                </div>
                                            </div>

                                            {/* Email ID */}
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">
                                                    Email ID <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="Enter Email Id"
                                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {/* Shipping Address */}
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">
                                                    Shipping Address <span className="text-red-500">*</span>
                                                </label>
                                                <p className="text-xs text-gray-500 mb-2 italic">
                                                    Note: Enter complete shipping address with city, Pincode & State.
                                                </p>
                                                <textarea
                                                    name="shippingAddress"
                                                    value={formData.shippingAddress}
                                                    onChange={handleChange}
                                                    placeholder="Enter complete shipping address"
                                                    rows="3"
                                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                                    required
                                                />
                                            </div>

                                            {/* State and City Grid */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {/* State Select */}
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-semibold text-gray-700">
                                                        State <span className="text-red-500">*</span>
                                                    </label>
                                                    <select
                                                        name="state"
                                                        value={formData.state}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                                        required
                                                    >
                                                        <option value="">- Select State -</option>
                                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                        <option value="Delhi">Delhi</option>
                                                        <option value="Gujarat">Gujarat</option>
                                                        <option value="Karnataka">Karnataka</option>
                                                        <option value="Maharashtra">Maharashtra</option>
                                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                                        <option value="Telangana">Telangana</option>
                                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                        <option value="West Bengal">West Bengal</option>
                                                    </select>
                                                </div>

                                                {/* City Input */}
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-semibold text-gray-700">
                                                        City <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        value={formData.city}
                                                        onChange={handleChange}
                                                        placeholder="Enter city name"
                                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Agreement and Submit Section */}
                                    <div className="mt-8 space-y-4">
                                        {/* Agreement Checkbox */}
                                        <div className="flex items-start space-x-3">
                                            <input
                                                type="checkbox"
                                                id="agreement"
                                                checked={agreed}
                                                onChange={(e) => setAgreed(e.target.checked)}
                                                className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                            />
                                            <label htmlFor="agreement" className="text-sm text-gray-600">
                                                I accept the <Link to="/terms" className="text-blue-600 hover:underline font-semibold">terms and conditions</Link> and <Link to="/privacy" className="text-blue-600 hover:underline font-semibold">privacy policy</Link>.
                                            </label>
                                        </div>

                                        {/* Sign In Link and Submit Button */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200">
                                            <p className="text-gray-600 text-sm">
                                                Already have an account?{' '}
                                                <Link to="/login" className="text-blue-600 hover:underline font-semibold">
                                                    Sign In
                                                </Link>
                                            </p>

                                            {/* Test Button - Remove after debugging */}
                                            {/* <button
                                                type="button"
                                                onClick={testClick}
                                                className="px-4 py-2 bg-gray-500 text-white rounded-lg mr-2"
                                            >
                                                Test Button
                                            </button> */}

                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className={`px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                                                    }`}
                                            >
                                                {loading ? 'REGISTERING...' : 'SIGN UP'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;