export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('[Jyorah/n8n-proxy] N8N_WEBHOOK_URL is not set');
    return res.status(503).json({ error: 'Webhook not configured' });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    console.log('[Jyorah/n8n-proxy] Webhook response status:', response.status);

    const text = await response.text();
    return res.status(response.status).send(text);
  } catch (err) {
    console.error('[Jyorah/n8n-proxy] Failed to reach webhook:', err.message);
    return res.status(502).json({ error: 'Webhook unreachable' });
  }
}
