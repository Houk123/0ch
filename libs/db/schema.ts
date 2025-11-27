import { pgTable, serial, text, timestamp, boolean, integer, time, primaryKey } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').unique().notNull(),
  name: text('name'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const boards = pgTable('boards', {
  id: serial('id').primaryKey(),
  name: text('name').unique().notNull(),
  url: text('url').unique().notNull(),
  description: text('description'),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const messageBoard = pgTable('message_board', {
  id: serial('id').primaryKey(),
  authorId: integer('author_id').references(() => users.id),
  boardId: integer('board_id').references(() => boards.id, { onDelete: 'cascade' }),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const chats = pgTable('chats', {
  id: serial('id').primaryKey(),
  boardId: integer('board_id').references(() => boards.id, { onDelete: 'cascade' }),
  name: text('name'),
  createdAt: timestamp('created_at').defaultNow(),
})

export const messageChat = pgTable('message_chat', {
  id: serial('id').primaryKey(),
  authorId: integer('author_id').references(() => users.id),
  chatId: integer('chat_id').references(() => chats.id, { onDelete: 'cascade' }),
  text: text('text').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const chatUser = pgTable('chat_user', {
  id: serial('id').primaryKey(),
  chatId: integer('chat_id').references(() => chats.id, { onDelete: 'cascade' }),
  userId: integer('user_id').references(() => users.id, { onDelete: 'cascade' }),
})