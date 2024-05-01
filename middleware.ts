import { get } from '@vercel/edge-config';
import { NextResponse } from 'next/server';
 
export const config = { matcher: '/config' };
 
export async function middleware() {
  const config = await get('config');
  return NextResponse.json(config);
}