// Load Alke Analytics script
(function() {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://cdn-analytics.alketech.eu/collector.js';
  document.head.appendChild(script);
})();

// Configure Alke Analytics
window.alkeAnalyticsCmd = window.alkeAnalyticsCmd || [];
window.alkeAnalyticsCmd.push(() => {
  window.alkeAnalytics.setConfig({
    propertyId: '20f74350-2148-4673-844e-47d943feb799'
  });
});