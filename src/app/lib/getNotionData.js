import { NextResponse } from 'next/server';
import { getNotionData } from './notion';

export async function GET() {
  try {
    const data = await getNotionData();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}