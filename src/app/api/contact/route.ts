import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_FORM_TO_EMAIL;
    if (!apiKey || !toEmail) {
      return Response.json(
        { success: false, error: 'Email service is not configured.' },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const data = await req.json();

    // Basic validation
    if (!data.name || !data.email || !data.phone) {
      return Response.json(
        { success: false, error: 'Name, email and phone are required.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'SikshaMarg <onboarding@resend.dev>', // use this until your domain is verified
      to: toEmail,
      replyTo: data.email,
      subject: `New Enquiry from ${data.name} – SikshaMarg`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1e3a8a; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Admission Enquiry</h1>
            <p style="color: #93c5fd; margin: 4px 0 0;">Submitted via sikshamarg.com</p>
          </div>
          <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748b; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Phone</td><td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #2563eb;">${data.phone}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">City</td><td style="padding: 8px 0;">${data.city || '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Service</td><td style="padding: 8px 0;">${data.service || '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; vertical-align: top;">Message</td><td style="padding: 8px 0; color: #1e293b;">${data.message || '—'}</td></tr>
            </table>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <a href="mailto:${data.email}" style="background: #2563eb; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600;">Reply to ${data.name}</a>
            </div>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { success: false, error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}