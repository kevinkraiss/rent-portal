import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
});

export async function POST(req: NextRequest) {
  try {
    const { customerId } = await req.json();

    const session = await stripe.financialConnections.sessions.create({
      account_holder: {
        type: 'customer',
        customer: customerId,
      },
      permissions: ['payment_method'], // Required as of your API version
    });

    return NextResponse.json({ session });
  } catch (err) {
    console.error('Failed to create bank link session:', err);
    return NextResponse.json({ error: 'Unable to create session' }, { status: 500 });
  }
}
