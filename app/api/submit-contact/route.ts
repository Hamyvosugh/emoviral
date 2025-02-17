import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Admin Client for API routes
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // Use service role key for admin operations
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

// Initialize email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Insert into Supabase
    const { data, error: supabaseError } = await supabase
      .from('contact_forms')
      .insert([{
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        project_details: formData.projectDetails,
        appointment_date: formData.appointmentDate,
        company_name: formData.companyName,
        company_size: formData.companySize,
        industry: formData.industry
      }])
      .select();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return NextResponse.json(
        { error: 'Database error', details: supabaseError.message },
        { status: 500 }
      );
    }

    // Send email notification
    try {
      await transporter.sendMail({
        from: 'hi@emoviral.com',
        to: 'hi@hamyvosugh.com',
        subject: 'Neue Kontaktanfrage',
        html: `
          <h2>Neue Kontaktanfrage erhalten</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>E-Mail:</strong> ${formData.email}</p>
          <p><strong>Telefon:</strong> ${formData.phone}</p>
          <p><strong>Projekt:</strong> ${formData.projectDetails}</p>
          <p><strong>Wunschtermin:</strong> ${formData.appointmentDate}</p>
          <p><strong>Unternehmen:</strong> ${formData.companyName}</p>
          <p><strong>Branche:</strong> ${formData.industry}</p>
          <p><strong>Unternehmensgröße:</strong> ${formData.companySize}</p>
        `,
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Continue even if email fails
    }

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully'
    });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}