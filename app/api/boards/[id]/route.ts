import { boardController } from '@/features/board/controllers/BoardController';
import { NextRequest } from 'next/server';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
  ) {
    const result = await boardController.getBoard(params.id);

    if (result.status === 204) {
      return new Response(null, { status: 204 });
    }

    return Response.json(
      result.error ? { error: result.error } : result.data,
      { status: result.status }
    );
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
  ) {
  const body = await request.json();
  const result = await boardController.updateBoard(params.id, body);

  return Response.json(
    result.error ? { error: result.error } : result.data,
    { status: result.status }
  );
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
  ) {
  const result = await boardController.deleteBoard(params.id);

  if (result.status === 204) {
    return new Response(null, { status: 204 });
  }

  return Response.json(
    { error: result.error },
    { status: result.status }
  );
}