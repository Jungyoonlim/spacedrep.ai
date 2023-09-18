import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import stripeLib from '../../app/lib/stripe';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, token } = req.body;

    if (!email || !token) {
      return res.status(400).json({ error: 'Email and token are required' });
    }

    try {
      const customer = await stripeLib.customers.create({
        email,
        source: token.id,
      });

      const charge = await stripeLib.charges.create({
        amount: 2000, // amount in cents
        currency: 'usd',
        customer: customer.id,
        description: 'Payment for flashcards',
      });

      return res.status(200).json({ success: true, charge });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
