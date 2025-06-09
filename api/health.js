javascript
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.json({
    status: 'OK',
    message: 'Parunia backend is running',
    timestamp: new Date().toISOString(),
    endpoints: [
      '/api/claude',
      '/api/chatgpt',
      '/api/perplexity'
    ]
  });
}
