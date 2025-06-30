import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.reason) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Here you would typically handle the form data, e.g., send an email, save to a database, etc.
    // For this example, we'll just log it to the console.
    console.log('Received contact form submission:', body);

    return NextResponse.json({ message: 'Form submitted successfully', data: body }, { status: 200 });
  } catch (error)
  {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'There was an error processing your request.' }, { status: 500 });
  }
} 