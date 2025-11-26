import FormUsers from '@/features/users/components/client/form';
import { db, pool } from '@/lib/db/index';
import { users } from '@/lib/db/schema';
import { Button, Container, For, Heading, Input, Table } from '@chakra-ui/react';
import { eq } from 'drizzle-orm';

export default async function UsersPage() {
  const allUsers = await db.select().from(users);
  
  return (
    <div>
      <Heading>Пользователи</Heading>
      <Table.Root size="sm">
      <Table.Header>
        <Table.Row>
            <Table.ColumnHeader>Id</Table.ColumnHeader>
          <Table.ColumnHeader>Имя</Table.ColumnHeader>
          <Table.ColumnHeader>Почта</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {allUsers.map(user => (
            <Table.Row key={`user-id_${user.id}`}>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
            </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
      
    </div>
  );
}