import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceType, destination, travelDate, message, amount } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Invalid name. Please provide your full name.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
      return NextResponse.json(
        { error: 'Invalid phone number. Please provide a valid contact number.' },
        { status: 400 }
      );
    }

    const enquiryRef = `SK-ENQ-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const enquiryRecord = {
      reference: enquiryRef,
      timestamp,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      serviceType: serviceType || 'General Visa Enquiry',
      destination: destination || 'N/A',
      travelDate: travelDate || 'N/A',
      amount: amount || 'Quote needed',
      message: message || '',
    };

    console.log('[SK Visa Experts] New Customer Enquiry Received:', enquiryRecord);

    const emailTo = process.env.EMAIL_TO || 'info@skvisaexperts.com';
    const emailFrom = process.env.EMAIL_FROM || 'SK Visa Experts <enquiries@skvisaexperts.com>';

    // Option 1: Resend API if configured
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'placeholder') {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: emailFrom,
            to: emailTo,
            subject: `[New Visa Enquiry] ${enquiryRecord.serviceType} - ${enquiryRecord.name} (${enquiryRef})`,
            html: `
              <h2>New Travel / Visa Enquiry from SK Visa Experts Website</h2>
              <p><strong>Reference:</strong> ${enquiryRef}</p>
              <p><strong>Client Name:</strong> ${enquiryRecord.name}</p>
              <p><strong>Email:</strong> ${enquiryRecord.email}</p>
              <p><strong>Phone:</strong> ${enquiryRecord.phone}</p>
              <p><strong>Service:</strong> ${enquiryRecord.serviceType}</p>
              <p><strong>Destination:</strong> ${enquiryRecord.destination}</p>
              <p><strong>Estimated Travel Date:</strong> ${enquiryRecord.travelDate}</p>
              <p><strong>Message / Special Requirements:</strong></p>
              <blockquote style="background:#f4f4f4;padding:12px;border-left:4px solid #0F766E;">
                ${enquiryRecord.message || 'No additional notes provided.'}
              </blockquote>
            `,
          }),
        });

        if (!resendRes.ok) {
          console.warn('[Resend] Could not dispatch email via Resend API, falling back to logger/SMTP');
        }
      } catch (mailErr) {
        console.error('[Resend Error]', mailErr);
      }
    }
    // Option 2: SMTP / Nodemailer if configured
    else if (
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      !process.env.SMTP_HOST.includes('example.com')
    ) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: emailFrom,
          to: emailTo,
          subject: `[New Visa Enquiry] ${enquiryRecord.serviceType} - ${enquiryRecord.name} (${enquiryRef})`,
          text: `
New Enquiry:
Ref: ${enquiryRef}
Name: ${enquiryRecord.name}
Email: ${enquiryRecord.email}
Phone: ${enquiryRecord.phone}
Service: ${enquiryRecord.serviceType}
Destination: ${enquiryRecord.destination}
Date: ${enquiryRecord.travelDate}
Message: ${enquiryRecord.message}
          `,
        });
      } catch (smtpErr) {
        console.error('[Nodemailer Error]', smtpErr);
      }
    } else {
      console.log(
        '[SK Visa Experts Notification] Real email credentials not provided in .env (development mode). Enquiry successfully logged.'
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully. Our Riyadh office will contact you promptly.',
      reference: enquiryRef,
      data: enquiryRecord,
    });
  } catch (err: any) {
    console.error('[Enquiry API Error]', err);
    return NextResponse.json(
      { error: 'Internal server error processing enquiry.' },
      { status: 500 }
    );
  }
}
