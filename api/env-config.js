export default function handler(req, res) {
  const config = {
    airtableBaseId:    process.env.AIRTABLE_BASE_ID    || '',
    airtableTableName: process.env.AIRTABLE_TABLE_NAME  || 'Consultations',
    airtableToken:     process.env.AIRTABLE_API_TOKEN   || '',
    emailjsServiceId:  process.env.EMAILJS_SERVICE_ID   || '',
    emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID  || '',
    emailjsPublicKey:  process.env.EMAILJS_PUBLIC_KEY   || '',
    n8nWebhookUrl:     process.env.N8N_WEBHOOK_URL      || ''
  };
  res.setHeader('Content-Type', 'application/javascript');
  res.end('window._FINORA = ' + JSON.stringify(config) + ';');
}
