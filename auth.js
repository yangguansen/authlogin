import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"

export const { signIn, handlers, auth } = NextAuth({
  providers: [Google],
  debug: true,
})

console.log(11, signIn, handlers, auth);