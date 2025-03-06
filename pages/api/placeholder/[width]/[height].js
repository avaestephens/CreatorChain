// pages/api/placeholder/[width]/[height].js
export default function handler(req, res) {
    // Get width and height from the URL parameters
    const { width, height } = req.query;
    
    // Validate parameters - ensure they're numbers and within reasonable limits
    const parsedWidth = Math.min(Math.max(parseInt(width) || 100, 10), 1200);
    const parsedHeight = Math.min(Math.max(parseInt(height) || 100, 10), 1200);
    
    // Create an SVG placeholder
    const svg = `
      <svg width="${parsedWidth}" height="${parsedHeight}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#EEEEEE"/>
        <rect width="100%" height="100%" fill="none" stroke="#CCCCCC" stroke-width="4"/>
        <text 
          x="50%" 
          y="50%" 
          font-family="Arial, sans-serif" 
          font-size="${Math.max(parsedWidth, parsedHeight) > 200 ? '16' : '12'}" 
          fill="#888888" 
          text-anchor="middle" 
          dominant-baseline="middle"
        >
          ${parsedWidth} × ${parsedHeight}
        </text>
      </svg>
    `;
    
    // Set headers
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for a year
    
    // Send the SVG
    res.status(200).send(svg);
  }