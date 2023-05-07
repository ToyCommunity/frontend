
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authApi } from "@/api";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "이메일", type: "text" },
        password: { label: "비밀번호", type: "password" },
      },
      async authorize(credentials) {
        const params = {
          email: credentials?.email ?? '',
          password: credentials?.password ?? '',
        };

        const data = await authApi.signIn(params);

        if(data){
          return {
            id: "1",
            ...data,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    maxAge: 60 * 60 * 24 // 1 day
  },
  pages: {
    signIn: '/signin'
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user.accessToken = token.access_token as any;
      session.user.refreshToken = token.refresh_token as any;

      return session;
    }
  }
};
export default NextAuth(authOptions);