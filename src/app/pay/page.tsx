'use client'; // Required for using useState or event handlers in App Router

import { useState } from 'react';

export default function PayPage() {
  const [bankLinked, setBankLinked] = useState(false);

  const handleLinkBank = () => {
    // Placeholder for future Stripe Financial Connections flow
    console.log('Link bank account flow triggered.');
    setBankLinked(true);
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Rent Payment Portal</h1>

      {!bankLinked ? (
        <button
          onClick={handleLinkBank}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Link Bank Account
        </button>
      ) : (
        <p className="text-green-700 font-semibold">✅ Bank account linked!</p>
      )}
    </main>
  );
}
