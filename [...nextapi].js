export default async function handler(req, res) {
    const apiUrl = 'https://9d8d4152b6.nxcli.io/sdi-api/login'; // Replace with your actual API URL
    const forwardedHeaders = { ...req.headers }; // Forward relevant headers (optional)
    delete forwardedHeaders.host; // Remove host header to avoid CORS issues
  
    try {
      const response = await fetch(apiUrl, {
        method: req.method, // Forward request method
        headers: forwardedHeaders,
        // Add any additional request options as needed (body, etc.)
      });
  
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching data' });
    }
  }
  