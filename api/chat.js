// /api/chat.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    const { messages, model = 'openai/gpt-3.5-turbo' } = req.body;
  
    if (!process.env.OPENROUTER_API_KEY) {
      return res.status(500).json({ error: 'API key not configured.' });
    }
  
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://ai-butler-site.vercel.app',
        },
        body: JSON.stringify({
          model,
          messages,
        }),
      });
  
      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      console.error('[Chat API error]', error);
      return res.status(500).json({ error: 'Failed to fetch AI response.' });
    }
  }
  