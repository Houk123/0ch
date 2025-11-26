import Link from 'next/link';

export default function TestDB() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Тест подключения к PostgreSQL</h1>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Проверить подключение:</h2>
        <Link href="/api/test" style={{ color: 'blue', textDecoration: 'underline' }}>
          /api/test - Проверка подключения к БД
        </Link>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2>Создать таблицу пользователей:</h2>
        <Link href="/api/create-table" style={{ color: 'blue', textDecoration: 'underline' }}>
          /api/create-table - Создать таблицу
        </Link>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2>Добавить тестового пользователя:</h2>
        <Link href="/api/add-user" style={{ color: 'blue', textDecoration: 'underline' }}>
          /api/add-user - Добавить пользователя
        </Link>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2>Посмотреть всех пользователей:</h2>
        <Link href="/api/users" style={{ color: 'blue', textDecoration: 'underline' }}>
          /api/users - Список пользователей
        </Link>
      </div>
    </div>
  );
}