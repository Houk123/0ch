import { boardController } from '@/features/board/controllers/BoardController';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = Object.fromEntries(searchParams.entries());
  
  const result = await boardController.getAllBoards(query);
  
  return Response.json(
    result.error ? { error: result.error } : result.data,
    { status: result.status }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = await boardController.createBoard(body);

  return Response.json(
    result.error ? { error: result.error } : result.data,
    { status: result.status }
  );
}