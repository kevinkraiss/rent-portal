import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
});

export async function POST() {
  try {
    const customer = await stripe.customers.create({
      description: 'Test tenant for ACH rent flow',
    });

    return NextResponse.json({ customerId: customer.id });
  } catch (err) {
    console.error('Failed to create Stripe customer:', err);
    return NextResponse.json({ error: 'Unable to create test customer' }, { status: 500 });
  }
}
