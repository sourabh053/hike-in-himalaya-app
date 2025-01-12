import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
  key_secret: process.env.RAZORPAY_SECRET_ID,
});

export async function POST(req: Request) {
 try{ const { amount } = await req.json();
  const order = await razorpay.orders.create({
    amount,
    currency: "INR",
    receipt: "receipt_" + Math.random().toString(36).substring(7),
  });

  return NextResponse.json(order);}
  catch(error){
    console.error("Error creating order: ",error);
    return NextResponse.json({error: "Errorcreating order"}, {status: 500});
  }
}
