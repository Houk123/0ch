// app/api/users/route.ts
import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { User } from '@/types/user';

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users ORDER BY id');
    client.release();
    
    const users: User[] = result.rows.map(row => ({
      id: row.id,
      name: row.name,
      email: row.email,
      created_at: new Date(row.created_at)
    }));
    
    return NextResponse.json({ 
      success: true, 
      users 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: (error as Error).message 
    }, { status: 500 });
  }
}