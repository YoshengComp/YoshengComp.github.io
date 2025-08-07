# Command Center Dashboard

A comprehensive data analysis management backend webpage for situation rooms, featuring real-time analytics, interactive charts, and multi-branch performance tracking.

## Features

### 📊 Data Analytics Modules
- **Sales Revenue Analysis** - Track revenue trends with line, bar, and pie charts
- **Visitor Analytics** - Monitor visitor patterns and demographics
- **Consumption Analysis** - Analyze spending patterns across categories
- **Product Sales Performance** - Track product sales with detailed metrics
- **Branch Performance Comparison** - Compare performance across multiple locations

### 🎛️ Interactive Controls
- **Branch Selection** - Filter data by specific branches or view all
- **Time Period Filtering** - View data by day, week, month, quarter, or year
- **Chart Type Switching** - Toggle between different visualization types
- **Real-time Updates** - Live activity feed with automatic data refresh

### 📱 Responsive Design
- **Cross-platform Compatible** - Works on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional interface with smooth animations
- **Accessibility** - Keyboard shortcuts and screen reader friendly

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Charts**: Chart.js for data visualization
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Architecture**: Modular JavaScript classes
- **Data**: JSON-based sample data structure

## Quick Start

### Option 1: Direct File Opening
1. Download all files to a local directory
2. Open `index.html` in any modern web browser
3. The dashboard will load with sample data

### Option 2: Local Web Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## File Structure

```
command-center-dashboard/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── data.js            # Sample data and data management
├── charts.js          # Chart creation and management
├── dashboard.js       # Main dashboard controller
└── README.md          # This file
```

## Configuration

### Adding New Branches
Edit the `branches` object in `data.js`:
```javascript
branches: {
    all: 'All Branches',
    newbranch: 'New Branch Name'
}
```

### Customizing Data
Modify the data objects in `data.js`:
- `salesRevenue` - Revenue data by time period and branch
- `visitorAnalytics` - Visitor count data
- `consumptionAnalysis` - Spending category data
- `productSales` - Product performance data

### Styling Customization
Key CSS variables in `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --success-color: #27ae60;
    --warning-color: #f39c12;
    --danger-color: #e74c3c;
}
```

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Features in Detail

### KPI Cards
- Real-time metrics display
- Animated value changes
- Percentage change indicators
- Color-coded performance indicators

### Chart Types Available
- **Line Charts** - Trend analysis over time
- **Bar Charts** - Comparative data visualization
- **Pie Charts** - Proportion and distribution
- **Doughnut Charts** - Modern pie chart alternative
- **Radar Charts** - Multi-dimensional data comparison
- **Polar Area Charts** - Radial data representation

### Real-time Activity Feed
- Live activity updates every 15 seconds
- Different activity types (sales, visitors, orders, alerts)
- Branch-specific activity filtering
- Smooth animations for new activities

### Interactive Controls
- **Keyboard Shortcuts**:
  - `Ctrl/Cmd + R` - Refresh dashboard
  - `Ctrl/Cmd + 1` - Select all branches
  - `Ctrl/Cmd + 2` - Select Taipei branch
- **Export Functions**:
  - Export chart images
  - Export data as JSON
  - Print dashboard

## Customization Guide

### Adding New Chart Types
1. Extend the `ChartManager` class in `charts.js`
2. Add new chart type to the `updateChartType` method
3. Update HTML buttons with appropriate `data-chart` attributes

### Adding New Data Sources
1. Extend the `dashboardData` object in `data.js`
2. Add corresponding chart creation methods
3. Update the dashboard controller to handle new data

### Styling Modifications
- Modify CSS variables for color scheme changes
- Update grid layouts for different arrangements
- Customize animations and transitions

## Performance Optimization

### Implemented Optimizations
- Efficient chart rendering with Chart.js
- Debounced resize handlers
- Lazy loading of chart updates
- Optimized CSS with hardware acceleration
- Minimal DOM manipulation

### Best Practices
- Use modern browsers for best performance
- Avoid excessive real-time update frequency
- Optimize images and assets for production
- Consider CDN for Chart.js in production

## Deployment Options

### Static Hosting
- **GitHub Pages** - Free hosting for static sites
- **Netlify** - Easy deployment with continuous integration
- **Vercel** - Fast global CDN deployment
- **AWS S3** - Scalable cloud storage hosting

### Web Server Deployment
- **Apache** - Traditional web server
- **Nginx** - High-performance web server
- **IIS** - Windows-based web server

### Example Nginx Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/command-center-dashboard;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Security Considerations

- All data is client-side (no server-side vulnerabilities)
- No external API calls (offline capable)
- CSP headers recommended for production
- HTTPS recommended for production deployment

## Troubleshooting

### Common Issues
1. **Charts not loading**: Ensure Chart.js CDN is accessible
2. **Responsive issues**: Check viewport meta tag
3. **JavaScript errors**: Check browser console for details
4. **Performance issues**: Reduce real-time update frequency

### Debug Mode
Add `?debug=true` to URL for additional console logging.

## Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For support and questions:
- Check browser console for error messages
- Ensure all files are in the same directory
- Verify internet connection for CDN resources
- Test in different browsers to isolate issues

---

**Built with ❤️ for modern data visualization and analytics**