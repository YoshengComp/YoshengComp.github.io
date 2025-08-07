// Sample Data for Command Center Dashboard
const dashboardData = {
    // Branch information
    branches: {
        all: '所有分店',
        taipei: '台北分店',
        taichung: '台中分店',
        kaohsiung: '高雄分店',
        hsinchu: '新竹分店'
    },

    // Time periods for data filtering
    timePeriods: ['today', 'week', 'month', 'quarter', 'year'],

    // Sales Revenue Data
    salesRevenue: {
        month: {
            all: {
                labels: ['周一', '周二', '周三', '周四'],
                data: [125000, 142000, 138000, 156000],
                total: 561000,
                change: 12.5
            },
            taipei: {
                labels: ['周一', '周二', '周三', '周四'],
                data: [45000, 52000, 48000, 58000],
                total: 203000,
                change: 15.2
            },
            taichung: {
                labels:['周一', '周二', '周三', '周四'],
                data: [32000, 38000, 35000, 42000],
                total: 147000,
                change: 8.7
            },
            kaohsiung: {
                labels: ['周一', '周二', '周三', '周四'],
                data: [28000, 31000, 33000, 35000],
                total: 127000,
                change: 11.3
            },
            hsinchu: {
                labels: ['周一', '周二', '周三', '周四'],
                data: [20000, 21000, 22000, 21000],
                total: 84000,
                change: 6.8
            }
        },
        week: {
            all: {
                labels: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
                data: [18000, 22000, 25000, 28000, 32000, 35000, 28000],
                total: 188000,
                change: 8.3
            }
        },
        year: {
            all: {
                labels: ['1月份', '2月份', '3月份', '4月份', '5月份', '6月份', '7月份', '8月份', '9月份', '10月份', '11月份', '12月份'],
                data: [520000, 480000, 610000, 580000, 650000, 720000, 680000, 750000, 690000, 720000, 680000, 750000],
                total: 7830000,
                change: 14.2
            }
        }
    },

    // Visitor Analytics Data
    visitorAnalytics: {
        month: {
            all: {
                labels: ['周一', '周二', '周三', '周四'],
                data: [2800, 3200, 3100, 3500],
                total: 12600,
                change: 18.5
            },
            taipei: {
                labels: ['周一', '周二', '周三', '周四'],
                data: [1200, 1400, 1350, 1500],
                total: 5450,
                change: 22.1
            },
            taichung: {
                labels:['周一', '周二', '周三', '周四'],
                data: [800, 900, 850, 950],
                total: 3500,
                change: 15.8
            },
            kaohsiung: {
                labels: ['周一', '周二', '周三', '周四'],
                data: [500, 600, 580, 650],
                total: 2330,
                change: 12.3
            },
            hsinchu: {
                labels: ['周一', '周二', '周三', '周四'],
                data: [300, 300, 320, 400],
                total: 1320,
                change: 25.0
            }
        },
        week: {
            all: {
                labels: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
                data: [420, 380, 450, 520, 680, 850, 720],
                total: 4020,
                change: 12.8
            }
        }
    },

    // Consumption Analysis Data
    consumptionAnalysis: {
        month: {
            all: {
                categories: ['Electronics', 'Clothing', 'Food & Beverage', 'Home & Garden', 'Sports', 'Books'],
                data: [85000, 65000, 120000, 45000, 35000, 25000],
                avgPerCustomer: 44.5,
                change: 7.2
            },
            taipei: {
                categories: ['Electronics', 'Clothing', 'Food & Beverage', 'Home & Garden', 'Sports', 'Books'],
                data: [35000, 28000, 48000, 18000, 15000, 12000],
                avgPerCustomer: 47.2,
                change: 9.1
            },
            taichung: {
                categories: ['Electronics', 'Clothing', 'Food & Beverage', 'Home & Garden', 'Sports', 'Books'],
                data: [25000, 20000, 35000, 12000, 10000, 8000],
                avgPerCustomer: 42.0,
                change: 6.5
            },
            kaohsiung: {
                categories: ['Electronics', 'Clothing', 'Food & Beverage', 'Home & Garden', 'Sports', 'Books'],
                data: [15000, 12000, 25000, 10000, 7000, 3000],
                avgPerCustomer: 38.8,
                change: 4.2
            },
            hsinchu: {
                categories: ['Electronics', 'Clothing', 'Food & Beverage', 'Home & Garden', 'Sports', 'Books'],
                data: [10000, 5000, 12000, 5000, 3000, 2000],
                avgPerCustomer: 35.6,
                change: 8.9
            }
        }
    },

    // Product Sales Data
    productSales: {
        month: {
            all: {
                products: ['Smartphone', 'Laptop', 'Headphones', 'Tablet', 'Smart Watch', 'Camera', 'Gaming Console', 'TV'],
                quantities: [450, 280, 680, 320, 520, 180, 150, 220],
                revenues: [315000, 420000, 136000, 128000, 156000, 108000, 75000, 132000],
                total: 2825,
                change: 16.3
            },
            taipei: {
                products: ['Smartphone', 'Laptop', 'Headphones', 'Tablet', 'Smart Watch', 'Camera', 'Gaming Console', 'TV'],
                quantities: [180, 120, 280, 140, 220, 80, 60, 90],
                revenues: [126000, 180000, 56000, 56000, 66000, 48000, 30000, 54000],
                total: 1170,
                change: 18.5
            },
            taichung: {
                products: ['Smartphone', 'Laptop', 'Headphones', 'Tablet', 'Smart Watch', 'Camera', 'Gaming Console', 'TV'],
                quantities: [120, 80, 200, 90, 150, 50, 40, 70],
                revenues: [84000, 120000, 40000, 36000, 45000, 30000, 20000, 42000],
                total: 800,
                change: 14.2
            },
            kaohsiung: {
                products: ['Smartphone', 'Laptop', 'Headphones', 'Tablet', 'Smart Watch', 'Camera', 'Gaming Console', 'TV'],
                quantities: [100, 50, 150, 60, 100, 30, 30, 40],
                revenues: [70000, 75000, 30000, 24000, 30000, 18000, 15000, 24000],
                total: 560,
                change: 12.8
            },
            hsinchu: {
                products: ['Smartphone', 'Laptop', 'Headphones', 'Tablet', 'Smart Watch', 'Camera', 'Gaming Console', 'TV'],
                quantities: [50, 30, 50, 30, 50, 20, 20, 20],
                revenues: [35000, 45000, 10000, 12000, 15000, 12000, 10000, 12000],
                total: 270,
                change: 15.7
            }
        }
    },

    // Branch Performance Comparison
    branchPerformance: {
        month: {
            branches: ['Taipei', 'Taichung', 'Kaohsiung', 'Hsinchu'],
            metrics: {
                revenue: [203000, 147000, 127000, 84000],
                visitors: [5450, 3500, 2330, 1320],
                avgConsumption: [47.2, 42.0, 38.8, 35.6],
                productsSold: [1170, 800, 560, 270],
                satisfaction: [4.8, 4.6, 4.5, 4.7]
            }
        }
    },

    // Real-time Activity Data
    realtimeActivities: [
        {
            type: 'sale',
            icon: '💰',
            title: 'New Sale Completed',
            details: 'Smartphone sold at Taipei Branch - $700',
            time: '2 minutes ago',
            branch: 'taipei'
        },
        {
            type: 'visitor',
            icon: '👥',
            title: 'Peak Visitor Hour',
            details: 'Taichung Branch reached 85 visitors this hour',
            time: '5 minutes ago',
            branch: 'taichung'
        },
        {
            type: 'order',
            icon: '📦',
            title: 'Large Order Processed',
            details: '15 laptops ordered by corporate client',
            time: '8 minutes ago',
            branch: 'taipei'
        },
        {
            type: 'sale',
            icon: '💰',
            title: 'High-Value Transaction',
            details: 'Gaming setup sold - $2,500',
            time: '12 minutes ago',
            branch: 'kaohsiung'
        },
        {
            type: 'visitor',
            icon: '👥',
            title: 'New Customer Registration',
            details: '3 new customers registered in Hsinchu',
            time: '15 minutes ago',
            branch: 'hsinchu'
        },
        {
            type: 'alert',
            icon: '⚠️',
            title: 'Inventory Alert',
            details: 'Smart Watch stock running low at Taipei',
            time: '18 minutes ago',
            branch: 'taipei'
        },
        {
            type: 'sale',
            icon: '💰',
            title: 'Bundle Sale',
            details: 'Camera + Accessories bundle sold',
            time: '22 minutes ago',
            branch: 'taichung'
        },
        {
            type: 'visitor',
            icon: '👥',
            title: 'Weekend Rush',
            details: 'Saturday visitor count up 25%',
            time: '25 minutes ago',
            branch: 'all'
        }
    ],

    // Chart Color Schemes
    colorSchemes: {
        primary: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'],
        revenue: ['#667eea', '#764ba2', '#f093fb', '#f5576c'],
        visitors: ['#4facfe', '#00f2fe', '#43e97b', '#38f9d7'],
        consumption: ['#fa709a', '#fee140', '#a8edea', '#fed6e3', '#d299c2', '#fef9d7'],
        products: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#43e97b', '#38f9d7'],
        branches: ['#667eea', '#f5576c', '#4facfe', '#43e97b']
    },

    // KPI Calculations
    calculateKPIs: function(branch = 'all', period = 'month') {
        const revenue = this.salesRevenue[period][branch];
        const visitors = this.visitorAnalytics[period][branch];
        const consumption = this.consumptionAnalysis[period][branch];
        const products = this.productSales[period][branch];

        return {
            totalRevenue: revenue ? revenue.total : 0,
            revenueChange: revenue ? revenue.change : 0,
            totalVisitors: visitors ? visitors.total : 0,
            visitorsChange: visitors ? visitors.change : 0,
            avgConsumption: consumption ? consumption.avgPerCustomer : 0,
            consumptionChange: consumption ? consumption.change : 0,
            productsSold: products ? products.total : 0,
            productsChange: products ? products.change : 0
        };
    },

    // Generate random real-time data
    generateRealtimeActivity: function() {
        const activities = [
            { type: 'sale', icon: '💰', titles: ['New Sale Completed', 'High-Value Transaction', 'Bundle Sale'], details: ['Smartphone sold', 'Laptop purchased', 'Accessories bundle'] },
            { type: 'visitor', icon: '👥', titles: ['New Visitor', 'Peak Hour Reached', 'Customer Registration'], details: ['New customer arrived', 'Busy period started', 'Account created'] },
            { type: 'order', icon: '📦', titles: ['Order Processed', 'Bulk Order', 'Express Delivery'], details: ['Items shipped', 'Large quantity', 'Same-day delivery'] },
            { type: 'alert', icon: '⚠️', titles: ['Inventory Alert', 'System Notice', 'Maintenance Required'], details: ['Stock running low', 'Update available', 'Scheduled maintenance'] }
        ];

        const branches = ['taipei', 'taichung', 'kaohsiung', 'hsinchu'];
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        const randomBranch = branches[Math.floor(Math.random() * branches.length)];
        const randomTitle = randomActivity.titles[Math.floor(Math.random() * randomActivity.titles.length)];
        const randomDetail = randomActivity.details[Math.floor(Math.random() * randomActivity.details.length)];

        return {
            type: randomActivity.type,
            icon: randomActivity.icon,
            title: randomTitle,
            details: `${randomDetail} at ${this.branches[randomBranch]}`,
            time: 'Just now',
            branch: randomBranch
        };
    },

    // Utility functions
    formatCurrency: function(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    },

    formatNumber: function(number) {
        return new Intl.NumberFormat('en-US').format(number);
    },

    formatPercentage: function(percentage) {
        return `${percentage > 0 ? '+' : ''}${percentage.toFixed(1)}%`;
    }
};


// Data is available globally as dashboardData



