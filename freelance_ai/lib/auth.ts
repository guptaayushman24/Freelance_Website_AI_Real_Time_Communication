import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";
import {signinobject} from '@/app/zod/validation'
import { PrismaClient } from "@/db/generated/prisma";
import { debug } from "node:util";
import { redirect } from "next/dist/server/api-utils";
require('dotenv').config({path:'D:/Freelance_Project/freelance_ai/app/.env'})
const client = new PrismaClient();
export const  NEXT_AUTH = ({
    // What we will pass here we will pass providers here how we are doing authentication
    providers: [
        CredentialsProvider({
            name:'Email',
            credentials:{
                email:{label: "Email", type: "text", placeholder: "Enter your Email" },
                password: { label: "Password", type: "password" ,placeholder:"Enter your Password"},
                clientjobseeker:{label:"Client Or Job Seeker",type:"text",placeholder:"Client or Job Seeker"}
                
            },
            async authorize(credentials:any) {
                const email = credentials.email;
                const password = credentials.password;
                const whichuser = credentials.clientjobseeker
                if (!email || !password || !whichuser) {
                    throw new Error("Email and Password are user is required");
                  }
                // Add the zod validation on the email and password
                const success = signinobject.parse({
                    email:email,
                    password:password,
                    clientjobseeker:whichuser
                })
                if (!success){
                    return "Check credentials"
                }
                if (whichuser=='Job Seeker'){
                    const user = await client.userSchema.findUnique({
                    where:{
                        Email:email
                    }
                })
                if (!user){
                    return null;
                }
                const userpassword = await client.userSchema.findUnique({
                    where:{
                        Email:email
                    }
                })
                if (userpassword?.Password==password){
                    return{
                        id:userpassword?.user_id,
                        whichuser:whichuser,
                        name:userpassword?.Name,
                        email:userpassword?.Email

                        
                    }
                }
                else{
                    return null;
                }
                }
                else if (whichuser=='Client'){
                    const user = await client.clientSchema.findUnique({
                        where:{
                            Email:email
                        }
                    })
                    if (!user){
                        return null;
                    }
                    const userpassword = await client.clientSchema.findUnique({
                        where:{
                            Email:email
                        }
                    })
                    if (userpassword?.Password==password){
                        return{
                            id:userpassword?.client_id,
                            whichuser:whichuser,
                            name:userpassword?.client_name,
                            email:userpassword?.Email

                        }
                    }
                    else{
                        return null;
                    }
                }
                else{
                    return "Please enter Job Seeker or Client in text box"
                }
               
            },
        },
    ),
      GitHubProvider({
        clientId:process.env.GITHUB_ID || "MISSING_ID",
        clientSecret:process.env.GITHUB_SECRET || "MISSING_SECRET",
      }),
    ],
    secret: process.env.SESSION_SECRET || "secret",
    callbacks: {
        async jwt({ token, user }:any) {
          if (user) {
            return { ...token, ...user };
          }
          return token;
        },
        async session({ session, token }:any) {
          session.user = {
            id: token.id,
            whichuser: token.whichuser,
            name:token.name,
            email:token.email
          };
          return session;
        }
      }
  }
);
  
  