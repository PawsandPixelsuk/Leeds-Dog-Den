const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 5000;

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Contact form endpoint
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, phone, services } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !services) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Create email message
    const msg = {
      to: 'bevmsudano7@gmail.com',
      from: 'bevmsudano7@gmail.com', // This should be a verified sender in SendGrid
      subject: 'New Service Enquiry - Leeds Dog Den',
      text: `
New service enquiry from Leeds Dog Den website:

Name: ${name}
Email: ${email}
Phone: ${phone}

Services Required:
${services}

Please contact them as soon as possible.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4A5568;">New Service Enquiry - Leeds Dog Den</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2D3748; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>
          
          <div style="background: #E6F3FF; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2D3748; margin-top: 0;">Services Required:</h3>
            <p style="white-space: pre-line;">${services}</p>
          </div>
          
          <p style="color: #6B7280; font-size: 14px; margin-top: 30px;">
            This enquiry was submitted through the Leeds Dog Den website contact form.
          </p>
        </div>
      `
    };

    // Send email
    await sgMail.send(msg);
    
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});