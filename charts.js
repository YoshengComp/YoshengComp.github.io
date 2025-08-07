// Chart Management System for Command Center Dashboard
class ChartManager {
    constructor() {
        this.charts = {};
        this.currentBranch = 'all';
        this.currentPeriod = 'month';
        this.initializeCharts();
    }

    // Initialize all charts
    initializeCharts() {
        this.createRevenueChart();
        this.createVisitorsChart();
        this.createConsumptionChart();
        this.createProductsChart();
        this.createBranchChart();
    }

    // Create Sales Revenue Chart
    createRevenueChart() {
        const ctx = document.getElementById('revenueChart').getContext('2d');
        const data = dashboardData.salesRevenue[this.currentPeriod][this.currentBranch];
        
        this.charts.revenue = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: '收入 ($)',
                    data: data.data,
                    borderColor: dashboardData.colorSchemes.revenue[0],
                    backgroundColor: this.createGradient(ctx, dashboardData.colorSchemes.revenue[0]),
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: dashboardData.colorSchemes.revenue[0],
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: dashboardData.colorSchemes.revenue[0],
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return `Revenue: ${dashboardData.formatCurrency(context.parsed.y)}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return dashboardData.formatCurrency(value);
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    // Create Visitors Chart
    createVisitorsChart() {
        const ctx = document.getElementById('visitorsChart').getContext('2d');
        const data = dashboardData.visitorAnalytics[this.currentPeriod][this.currentBranch];
        
        this.charts.visitors = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Visitors',
                    data: data.data,
                    borderColor: dashboardData.colorSchemes.visitors[0],
                    backgroundColor: this.createGradient(ctx, dashboardData.colorSchemes.visitors[0]),
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: dashboardData.colorSchemes.visitors[0],
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: dashboardData.colorSchemes.visitors[0],
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return `Visitors: ${dashboardData.formatNumber(context.parsed.y)}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return dashboardData.formatNumber(value);
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // Create Consumption Chart
    createConsumptionChart() {
        const ctx = document.getElementById('consumptionChart').getContext('2d');
        const data = dashboardData.consumptionAnalysis[this.currentPeriod][this.currentBranch];
        
        this.charts.consumption = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.categories,
                datasets: [{
                    label: '消費 ($)',
                    data: data.data,
                    borderColor: dashboardData.colorSchemes.consumption[0],
                    backgroundColor: this.createGradient(ctx, dashboardData.colorSchemes.consumption[0]),
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: dashboardData.colorSchemes.consumption[0],
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: dashboardData.colorSchemes.consumption[0],
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return `Amount: ${dashboardData.formatCurrency(context.parsed.y)}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return dashboardData.formatCurrency(value);
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            maxRotation: 45
                        }
                    }
                }
            }
        });
    }

    // Create Products Chart
    createProductsChart() {
        const ctx = document.getElementById('productsChart').getContext('2d');
        const data = dashboardData.productSales[this.currentPeriod][this.currentBranch];
        
        this.charts.products = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.products,
                datasets: [{
                    label: '銷售數量',
                    data: data.quantities,
                    backgroundColor: dashboardData.colorSchemes.products.map(color => color + '80'),
                    borderColor: dashboardData.colorSchemes.products,
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        callbacks: {
                            label: function(context) {
                                const revenue = data.revenues[context.dataIndex];
                                return [
                                    `Quantity: ${dashboardData.formatNumber(context.parsed.y)}`,
                                    `Revenue: ${dashboardData.formatCurrency(revenue)}`
                                ];
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return dashboardData.formatNumber(value);
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            maxRotation: 45
                        }
                    }
                }
            }
        });
    }

    // Create Branch Comparison Chart
    createBranchChart() {
        const ctx = document.getElementById('branchChart').getContext('2d');
        const data = dashboardData.branchPerformance[this.currentPeriod];
        
        this.charts.branch = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.branches,
                datasets: [
                    {
                        label: '收入 ($)',
                        data: data.metrics.revenue,
                        backgroundColor: dashboardData.colorSchemes.branches[0] + '80',
                        borderColor: dashboardData.colorSchemes.branches[0],
                        borderWidth: 2,
                        yAxisID: 'y'
                    },
                    {
                        label: '顧客',
                        data: data.metrics.visitors,
                        backgroundColor: dashboardData.colorSchemes.branches[1] + '80',
                        borderColor: dashboardData.colorSchemes.branches[1],
                        borderWidth: 2,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        callbacks: {
                            label: function(context) {
                                if (context.datasetIndex === 0) {
                                    return `Revenue: ${dashboardData.formatCurrency(context.parsed.y)}`;
                                } else {
                                    return `Visitors: ${dashboardData.formatNumber(context.parsed.y)}`;
                                }
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return dashboardData.formatCurrency(value);
                            }
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false
                        },
                        ticks: {
                            callback: function(value) {
                                return dashboardData.formatNumber(value);
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // Update chart type
    updateChartType(chartName, newType) {
        const chart = this.charts[chartName];
        if (!chart) return;

        // Store current data
        const currentData = chart.data;
        
        // Destroy current chart
        chart.destroy();
        
        // Create new chart with different type
        const ctx = document.getElementById(chartName + 'Chart').getContext('2d');
        
        // Adjust data format based on chart type
        let newData = { ...currentData };
        
        if (newType === 'pie' || newType === 'doughnut' || newType === 'polarArea') {
            // For pie charts, use different colors for each segment
            newData.datasets[0].backgroundColor = dashboardData.colorSchemes[chartName] || dashboardData.colorSchemes.primary;
            newData.datasets[0].borderColor = '#fff';
            newData.datasets[0].borderWidth = 2;
        } else if (newType === 'radar') {
            // For radar charts, adjust styling
            newData.datasets[0].backgroundColor = (dashboardData.colorSchemes[chartName][0] || dashboardData.colorSchemes.primary[0]) + '40';
            newData.datasets[0].borderColor = dashboardData.colorSchemes[chartName][0] || dashboardData.colorSchemes.primary[0];
            newData.datasets[0].pointBackgroundColor = dashboardData.colorSchemes[chartName][0] || dashboardData.colorSchemes.primary[0];
        }

        // Create new chart
        this.charts[chartName] = new Chart(ctx, {
            type: newType,
            data: newData,
            options: this.getChartOptions(chartName, newType)
        });
    }

    // Get chart options based on type
    getChartOptions(chartName, chartType) {
        const baseOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff'
                }
            }
        };

        if (chartType === 'pie' || chartType === 'doughnut' || chartType === 'polarArea') {
            return {
                ...baseOptions,
                plugins: {
                    ...baseOptions.plugins,
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 15
                        }
                    }
                }
            };
        } else if (chartType === 'radar') {
            return {
                ...baseOptions,
                scales: {
                    r: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                }
            };
        } else {
            return {
                ...baseOptions,
                plugins: {
                    ...baseOptions.plugins,
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            };
        }
    }

    // Update all charts with new data
    updateCharts(branch, period) {
        this.currentBranch = branch;
        this.currentPeriod = period;

        // Destroy existing charts
        Object.values(this.charts).forEach(chart => {
            if (chart) chart.destroy();
        });

        // Recreate charts with new data
        this.initializeCharts();
    }

    // Create gradient for chart backgrounds
    createGradient(ctx, color) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, color + '40');
        gradient.addColorStop(1, color + '10');
        return gradient;
    }

    // Animate chart updates
    animateChart(chartName) {
        const chart = this.charts[chartName];
        if (chart) {
            chart.update('active');
        }
    }

    // Get chart instance
    getChart(chartName) {
        return this.charts[chartName];
    }

    // Resize all charts
    resizeCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart) {
                chart.resize();
            }
        });
    }

    // Export chart as image
    exportChart(chartName, format = 'png') {
        const chart = this.charts[chartName];
        if (chart) {
            const url = chart.toBase64Image();
            const link = document.createElement('a');
            link.download = `${chartName}-chart.${format}`;
            link.href = url;
            link.click();
        }
    }

    // Print chart
    printChart(chartName) {
        const chart = this.charts[chartName];
        if (chart) {
            const url = chart.toBase64Image();
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <html>
                    <head><title>Chart Print</title></head>
                    <body style="margin: 0; padding: 20px; text-align: center;">
                        <img src="${url}" style="max-width: 100%; height: auto;" />
                    </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        }
    }
}

// Initialize chart manager when DOM is loaded
let chartManager;
document.addEventListener('DOMContentLoaded', function() {
    chartManager = new ChartManager();

});
