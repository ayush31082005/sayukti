import React from 'react';
import { TrendingUp, Users, DollarSign, ShoppingBag, Calendar, Activity, PieChart, BarChart3 } from 'lucide-react';

const AdminAnalytics = () => {
    const stats = [
        { label: 'Total Revenue', value: '$1.2M', change: '+12.5%', icon: DollarSign, color: 'bg-green-500' },
        { label: 'Active Users', value: '24.5K', change: '+8.2%', icon: Users, color: 'bg-blue-500' },
        { label: 'Total Sales', value: '8,432', change: '+23.1%', icon: ShoppingBag, color: 'bg-purple-500' },
        { label: 'Conversion Rate', value: '3.2%', change: '+5.3%', icon: TrendingUp, color: 'bg-yellow-500' }
    ];

    const monthlyData = [
        { month: 'Jan', revenue: 45000, users: 1200 },
        { month: 'Feb', revenue: 52000, users: 1350 },
        { month: 'Mar', revenue: 48000, users: 1420 },
        { month: 'Apr', revenue: 61000, users: 1580 },
        { month: 'May', revenue: 58000, users: 1650 },
        { month: 'Jun', revenue: 67000, users: 1820 }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                        <Calendar className="h-5 w-5" />
                        <span>Last 6 Months</span>
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 ${stat.color} rounded-lg`}>
                                <stat.icon className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-2 gap-6">
                {/* Revenue Chart */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Overview</h3>
                    <div className="h-64 flex items-end space-x-2">
                        {monthlyData.map((data, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center">
                                <div className="w-full bg-green-100 rounded-t-lg relative" style={{ height: `${(data.revenue / 70000) * 200}px` }}>
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
                                        ${(data.revenue / 1000).toFixed(0)}k
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">{data.month}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Users Chart */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">User Growth</h3>
                    <div className="h-64 flex items-end space-x-2">
                        {monthlyData.map((data, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center">
                                <div className="w-full bg-blue-100 rounded-t-lg relative" style={{ height: `${(data.users / 2000) * 200}px` }}>
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
                                        {data.users}
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">{data.month}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Categories</h3>
                    <div className="space-y-3">
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm text-gray-600">Electronics</span>
                                <span className="text-sm font-semibold">45%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm text-gray-600">Clothing</span>
                                <span className="text-sm font-semibold">30%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm text-gray-600">Home & Living</span>
                                <span className="text-sm font-semibold">15%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Traffic Sources</h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Direct</span>
                            <span className="text-sm font-semibold">35%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Social Media</span>
                            <span className="text-sm font-semibold">28%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Search Engines</span>
                            <span className="text-sm font-semibold">22%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Referrals</span>
                            <span className="text-sm font-semibold">15%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                    <div className="space-y-2">
                        <button className="w-full text-left px-4 py-3 hover:bg-green-50 rounded-lg transition-colors">
                            Generate Report
                        </button>
                        <button className="w-full text-left px-4 py-3 hover:bg-green-50 rounded-lg transition-colors">
                            Export Data
                        </button>
                        <button className="w-full text-left px-4 py-3 hover:bg-green-50 rounded-lg transition-colors">
                            View Detailed Analytics
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAnalytics;