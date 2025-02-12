import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { registerUser } from "./actions/registerUser";
import { getUserByEmail } from "./actions/getUserByEmail";
import { loginUser } from "./actions/loginUser";

export const authOptions:NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET,
  callbacks:{
    signIn:async({user})=>{
        const isExists = await getUserByEmail(user.email)
        if(!isExists){
            await registerUser({
                name:user.name as string,
                email: user.email as string,
                password:"abc"
            })
        }
         await loginUser({email:user.email as string, password:"abc"})
        
        return true
    }
  }
}