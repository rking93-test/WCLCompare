// Serverless function for Vercel / Netlify to fetch Warcraft Logs v2 OAuth Token
export default async function handler(req, res) {
  const clientId = process.env.WCL_CLIENT_ID;
  const clientSecret = process.env.WCL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).json({ error: 'Warcraft Logs API credentials missing in environment variables.' });
  }

  const tokenUrl = 'https://www.warcraftlogs.com/oauth/token';
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error || 'Failed to fetch access token' });
    }

    return res.status(200).json({
      access_token: data.access_token,
      expires_in: data.expires_in,
    });
  } catch (err) {
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
