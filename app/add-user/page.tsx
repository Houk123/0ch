import FormUsers from '@/features/users/components/client/form';
import { db, pool } from '@/lib/db/index';
import { users } from '@/lib/db/schema';
import { Button, Container, For, Heading, Input } from '@chakra-ui/react';
import { eq } from 'drizzle-orm';

export default async function AddUsersPage() {
  const allUsers = await db.select().from(users);
  
  return (
    <div>
      <Heading>Добавить пользователя</Heading>
      <FormUsers />
    </div>
  );
}