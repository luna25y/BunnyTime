import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { JWT } from 'next-auth/jwt'

interface Token extends JWT {
  accessToken?: string
  refreshToken?: string
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: [
            'https://www.googleapis.com/auth/calendar.readonly',
            'https://www.googleapis.com/auth/calendar.events.readonly',
            'openid',
            'email',
            'profile'
          ].join(' '),
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account }) {
      // 保存访问令牌和刷新令牌
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
      }
      return token as Token
    },
    async session({ session, token }) {
      const tokenData = token as Token
      // 在会话中添加访问令牌
      session.accessToken = tokenData.accessToken
      return session
    }
  }
})

export { handler as GET, handler as POST } 