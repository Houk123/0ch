import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth'

export default NextAuth({
  providers: [
  CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        // Здесь ваша логика проверки пользователя
        // Например, запрос к вашему API или базе данных
        /*
        const user = await validateUser(credentials.email, credentials.password)

        if (user) {
        return user
        }*/
        return null
      }
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 дней
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },

    async session({ session, token }) {
      session.user.id = token.id as string
      return session
    },
  },

  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
    error: '/auth/error',
  },

  secret: process.env.NEXTAUTH_SECRET,
})