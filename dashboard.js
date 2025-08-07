// Main Dashboard Controller
class Dashboard {
    constructor() {
        this.currentBranch = 'all';
        this.currentPeriod = 'month';
        this.realtimeInterval = null;
        this.lastUpdateTime = new Date();
        
        this.init();
    }

    // Initialize dashboard
    init() {
        this.setupEventListeners();
        this.updateKPIs();
        this.populateActivityFeed();
        this.startRealtimeUpdates();
        this.updateLastUpdatedTime();
        this.hideLoadingOverlay();
        
        // Add fade-in animation to main content
        setTimeout(() => {
            document.querySelector('.dashboard-main').classList.add('fade-in');
        }, 500);
    }

    // Setup event listeners
    setupEventListeners() {
        // Branch selector
        const branchSelector = document.getElementById('branchSelector');
        branchSelector.addEventListener('change', (e) => {
            this.currentBranch = e.target.value;
            this.updateDashboard();
        });

        // Time range selector
        const timeRange = document.getElementById('timeRange');
        timeRange.addEventListener('change', (e) => {
            this.currentPeriod = e.target.value;
            this.updateDashboard();
        });

        // Refresh button
        const refreshBtn = document.getElementById('refreshBtn');
        refreshBtn.addEventListener('click', () => {
            this.refreshDashboard();
        });

        // Chart type buttons
        document.querySelectorAll('.chart-type-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const button = e.target;
                const chartData = button.dataset.chart.split('-');
                const chartName = chartData[0];
                const chartType = chartData[1];
                
                // Update active button
                button.parentElement.querySelectorAll('.chart-type-btn').forEach(b => {
                    b.classList.remove('active');
                });
                button.classList.add('active');
                
                // Update chart
                if (chartManager) {
                    chartManager.updateChartType(chartName, chartType);
                }
            });
        });

        // Window resize handler
        window.addEventListener('resize', () => {
            if (chartManager) {
                chartManager.resizeCharts();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 'r':
                        e.preventDefault();
                        this.refreshDashboard();
                        break;
                    case '1':
                        e.preventDefault();
                        branchSelector.value = 'all';
                        this.currentBranch = 'all';
                        this.updateDashboard();
                        break;
                    case '2':
                        e.preventDefault();
                        branchSelector.value = 'taipei';
                        this.currentBranch = 'taipei';
                        this.updateDashboard();
                        break;
                }
            }
        });
    }

    // Update entire dashboard
    updateDashboard() {
        this.showLoadingOverlay();
        
        // Simulate loading delay for better UX
        setTimeout(() => {
            this.updateKPIs();
            if (chartManager) {
                chartManager.updateCharts(this.currentBranch, this.currentPeriod);
            }
            this.updateLastUpdatedTime();
            this.hideLoadingOverlay();
            
            // Add slide-in animation
            document.querySelectorAll('.chart-module').forEach((module, index) => {
                setTimeout(() => {
                    module.classList.add('slide-in');
                }, index * 100);
            });
        }, 800);
    }

    // Refresh dashboard with animation
    refreshDashboard() {
        const refreshBtn = document.getElementById('refreshBtn');
        refreshBtn.style.transform = 'rotate(360deg)';
        refreshBtn.style.transition = 'transform 0.5s ease';
        
        setTimeout(() => {
            refreshBtn.style.transform = '';
            refreshBtn.style.transition = '';
        }, 500);
        
        this.updateDashboard();
        this.addNewRealtimeActivity();
    }

    // Update KPI cards
    updateKPIs() {
        const kpis = dashboardData.calculateKPIs(this.currentBranch, this.currentPeriod);
        
        // Update values with animation
        this.animateValue('totalRevenue', kpis.totalRevenue, dashboardData.formatCurrency);
        this.animateValue('totalVisitors', kpis.totalVisitors, dashboardData.formatNumber);
        this.animateValue('avgConsumption', kpis.avgConsumption, (val) => dashboardData.formatCurrency(val));
        this.animateValue('productsSold', kpis.productsSold, dashboardData.formatNumber);
        
        // Update change indicators
        this.updateChangeIndicator('revenueChange', kpis.revenueChange);
        this.updateChangeIndicator('visitorsChange', kpis.visitorsChange);
        this.updateChangeIndicator('consumptionChange', kpis.consumptionChange);
        this.updateChangeIndicator('productsChange', kpis.productsChange);
    }

    // Animate value changes
    animateValue(elementId, targetValue, formatter) {
        const element = document.getElementById(elementId);
        const currentValue = parseFloat(element.textContent.replace(/[^0-9.-]+/g, '')) || 0;
        const increment = (targetValue - currentValue) / 30;
        let current = currentValue;
        
        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= targetValue) || (increment < 0 && current <= targetValue)) {
                current = targetValue;
                clearInterval(timer);
            }
            element.textContent = formatter(Math.round(current));
        }, 50);
    }

    // Update change indicators
    updateChangeIndicator(elementId, changeValue) {
        const element = document.getElementById(elementId);
        element.textContent = dashboardData.formatPercentage(changeValue);
        
        // Update class based on positive/negative change
        element.classList.remove('positive', 'negative');
        element.classList.add(changeValue >= 0 ? 'positive' : 'negative');
    }

    // Populate activity feed
    populateActivityFeed() {
        const activityFeed = document.getElementById('activityFeed');
        activityFeed.innerHTML = '';
        
        dashboardData.realtimeActivities.forEach((activity, index) => {
            setTimeout(() => {
                const activityElement = this.createActivityElement(activity);
                activityFeed.appendChild(activityElement);
                activityElement.classList.add('slide-in');
            }, index * 100);
        });
    }

    // Create activity element
    createActivityElement(activity) {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        
        activityItem.innerHTML = `
            <div class="activity-icon ${activity.type}">
                ${activity.icon}
            </div>
            <div class="activity-content">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-details">${activity.details}</div>
            </div>
            <div class="activity-time">${activity.time}</div>
        `;
        
        return activityItem;
    }

    // Add new realtime activity
    addNewRealtimeActivity() {
        const activityFeed = document.getElementById('activityFeed');
        const newActivity = dashboardData.generateRealtimeActivity();
        const activityElement = this.createActivityElement(newActivity);
        
        // Add to beginning of feed
        activityFeed.insertBefore(activityElement, activityFeed.firstChild);
        activityElement.classList.add('slide-in');
        
        // Remove oldest activity if more than 8 items
        const activities = activityFeed.querySelectorAll('.activity-item');
        if (activities.length > 8) {
            activities[activities.length - 1].remove();
        }
        
        // Update KPIs slightly for realism
        this.simulateKPIChanges();
    }

    // Simulate small KPI changes for realism
    simulateKPIChanges() {
        const elements = ['totalRevenue', 'totalVisitors', 'avgConsumption', 'productsSold'];
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        const element = document.getElementById(randomElement);
        const currentValue = parseFloat(element.textContent.replace(/[^0-9.-]+/g, ''));
        const change = Math.floor(Math.random() * 100) + 1;
        const newValue = currentValue + change;
        
        // Animate the change
        if (randomElement === 'totalRevenue' || randomElement === 'avgConsumption') {
            this.animateValue(randomElement, newValue, dashboardData.formatCurrency);
        } else {
            this.animateValue(randomElement, newValue, dashboardData.formatNumber);
        }
    }

    // Start realtime updates
    startRealtimeUpdates() {
        this.realtimeInterval = setInterval(() => {
            this.addNewRealtimeActivity();
            this.updateLastUpdatedTime();
        }, 15000); // Update every 15 seconds
    }

    // Stop realtime updates
    stopRealtimeUpdates() {
        if (this.realtimeInterval) {
            clearInterval(this.realtimeInterval);
            this.realtimeInterval = null;
        }
    }

    // Update last updated time
    updateLastUpdatedTime() {
        this.lastUpdateTime = new Date();
        const lastUpdatedElement = document.getElementById('lastUpdated');
        if (lastUpdatedElement) {
            lastUpdatedElement.textContent = this.lastUpdateTime.toLocaleString();
        }
    }

    // Show loading overlay
    showLoadingOverlay() {
        const overlay = document.getElementById('loadingOverlay');
        overlay.classList.remove('hidden');
    }

    // Hide loading overlay
    hideLoadingOverlay() {
        const overlay = document.getElementById('loadingOverlay');
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 300);
    }

    // Export dashboard data
    exportData(format = 'json') {
        const exportData = {
            branch: this.currentBranch,
            period: this.currentPeriod,
            timestamp: new Date().toISOString(),
            kpis: dashboardData.calculateKPIs(this.currentBranch, this.currentPeriod),
            salesData: dashboardData.salesRevenue[this.currentPeriod][this.currentBranch],
            visitorsData: dashboardData.visitorAnalytics[this.currentPeriod][this.currentBranch],
            consumptionData: dashboardData.consumptionAnalysis[this.currentPeriod][this.currentBranch],
            productsData: dashboardData.productSales[this.currentPeriod][this.currentBranch]
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `dashboard-data-${this.currentBranch}-${this.currentPeriod}-${Date.now()}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }

    // Print dashboard
    printDashboard() {
        window.print();
    }

    // Toggle fullscreen mode
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    // Get dashboard status
    getStatus() {
        return {
            currentBranch: this.currentBranch,
            currentPeriod: this.currentPeriod,
            lastUpdate: this.lastUpdateTime,
            realtimeActive: !!this.realtimeInterval,
            chartsLoaded: !!chartManager
        };
    }

    // Handle errors gracefully
    handleError(error, context = 'Dashboard') {
        console.error(`${context} Error:`, error);
        
        // Show user-friendly error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `
            <div style="background: #fee; border: 1px solid #fcc; color: #c66; padding: 1rem; border-radius: 8px; margin: 1rem;">
                <strong>Error:</strong> Something went wrong. Please refresh the page or try again later.
            </div>
        `;
        
        document.querySelector('.dashboard-main').prepend(errorDiv);
        
        // Auto-remove error message after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }

    // Cleanup resources
    destroy() {
        this.stopRealtimeUpdates();
        
        // Remove event listeners
        window.removeEventListener('resize', this.handleResize);
        document.removeEventListener('keydown', this.handleKeydown);
        
        // Destroy charts
        if (chartManager) {
            Object.values(chartManager.charts).forEach(chart => {
                if (chart) chart.destroy();
            });
        }
    }
}

// Utility functions
const DashboardUtils = {
    // Format time ago
    timeAgo: function(date) {
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);
        
        if (diffInSeconds < 60) return 'Just now';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
        return `${Math.floor(diffInSeconds / 86400)} days ago`;
    },

    // Debounce function
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Check if device is mobile
    isMobile: function() {
        return window.innerWidth <= 768;
    },

    // Generate random color
    randomColor: function() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
};

// Initialize dashboard when DOM is loaded
let dashboard;
document.addEventListener('DOMContentLoaded', function() {
    try {
        dashboard = new Dashboard();
        
        // Add global error handler
        window.addEventListener('error', (e) => {
            dashboard.handleError(e.error, 'Global');
        });
        
        // Add unhandled promise rejection handler
        window.addEventListener('unhandledrejection', (e) => {
            dashboard.handleError(e.reason, 'Promise');
        });
        
    } catch (error) {
        console.error('Failed to initialize dashboard:', error);
        document.body.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #f5f5f5;">
                <div style="text-align: center; padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <h2 style="color: #e74c3c; margin-bottom: 1rem;">Dashboard Error</h2>
                    <p style="color: #666; margin-bottom: 1rem;">Failed to load the dashboard. Please refresh the page.</p>
                    <button onclick="location.reload()" style="background: #667eea; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">
                        Refresh Page
                    </button>
                </div>
            </div>
        `;
    }
});

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
    if (dashboard) {
        dashboard.destroy();
    }
});