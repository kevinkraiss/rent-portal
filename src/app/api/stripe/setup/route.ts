import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
});

export async function GET() {
  try {
    const balance = await stripe.balance.retrieve();
    console.log('Stripe balance:', balance);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Stripe error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
