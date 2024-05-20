import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    pages: {
        signIn: "/login"
    },
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "text", },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            const URL = process.env.NEXT_PUBLIC_URL || ''

            const res = await fetch(URL + '/api/login', {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });

            const user = await res.json();

            if (res.ok && user) {
              return {
                id: user.data.user.id,
                name: user.data.user.name,
                email: user.data.user.email,
                image: user.data.user.profile_photo_url,
                access_token: user.data.token
              }
            } else {
              return null
            }
          }
        })
      ],
      
})

export { handler as GET, handler as POST }