export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ detail: 'Método no permitido.' });
  }

  const { nombre, email, whatsapp } = request.body || {};

  if (
    typeof nombre !== 'string' ||
    nombre.trim().length < 1 ||
    nombre.trim().length > 150 ||
    typeof email !== 'string' ||
    !/^\S+@\S+\.\S+$/.test(email.trim()) ||
    typeof whatsapp !== 'string' ||
    whatsapp.trim().length < 7 ||
    whatsapp.trim().length > 32
  ) {
    return response.status(422).json({ detail: 'Los datos del formulario no son válidos.' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'experiencias@femega.com';
  const senderName = process.env.BREVO_SENDER_NAME || 'FEMEGA';

  if (!apiKey) {
    return response.status(503).json({ detail: 'El servicio de correo no está configurado.' });
  }

  try {
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email: 'experiencias@femega.com' }],
        replyTo: { email: email.trim(), name: nombre.trim() },
        subject: 'Nuevo lead Landing FEMEGA',
        textContent: [
          `Nombre: ${nombre.trim()}`,
          `Correo electrónico: ${email.trim()}`,
          `WhatsApp: ${whatsapp.trim()}`,
        ].join('\n'),
      }),
    });

    if (!brevoResponse.ok) {
      return response.status(502).json({ detail: 'No se pudo enviar el formulario. Intenta nuevamente.' });
    }

    return response.status(201).json({ success: true, message: 'Lead enviado correctamente.' });
  } catch (error) {
    console.error('Brevo failed to send the lead notification', error);
    return response.status(502).json({ detail: 'No se pudo enviar el formulario. Intenta nuevamente.' });
  }
}