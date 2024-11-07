import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"

export const { signIn, signOut, handlers, auth } = NextAuth({
  providers: [Google],
  debug: true,
  session:{
    maxAge: 7 * 86400
  }

})

