import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(req: Request) {

  return NextResponse.json({})
}
