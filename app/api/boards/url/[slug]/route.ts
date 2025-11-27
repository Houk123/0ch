import { boardController } from '@/features/board/controllers/BoardController';
import { NextRequest } from 'next/server';

export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    const result = await boardController.getBoardByUrl((await params).slug);

    return Response.json(
        result.error ? { error: result.error } : result.data,
        { status: result.status }
    );
}