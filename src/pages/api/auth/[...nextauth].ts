
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "이메일", type: "text" },
        password: { label: "비밀번호", type: "password" },
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials, req) {
        const user = { id: '1', name: 'ssabi', email: 'test@test.com' };

        return null;

        if(user){
          return user;
        } else {
          return null;
        }

        // const params = {
        //   email: credentials?.email ?? '',
        //   password: credentials?.password ?? '',
        // };
        // const { access_token, refresh_token } = await authApi.signIn(params);
        // const payloadB64 = access_token.split('.')[1];
        // const payload = JSON.parse(window.atob(payloadB64));
        
        // if (payload) {
        //   return { 
        //     id: payload.id,
        //     access_token,
        //     refresh_token,
        //   };
        // } else {
        //   return null;
        // }
      },
    }),
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/signin'
  },
};
export default NextAuth(authOptions);