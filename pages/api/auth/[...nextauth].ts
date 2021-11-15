import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import prisma from '../../../lib/prisma';

// const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
// export default authHandler;

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // scope: "read:user"
    }),
    
    Providers.Facebook({
      clientId: '413274143616560',
      clientSecret: '3da8ed30f842bbe0a0d4a6e9deadcf11',
      // red
  })
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: process.env.SECRET,

  callbacks: {
    //   async signIn({ user, account, profile, email, credentials }) {
        
    //     console.log('profile', profile);
    //   console.log('account', profile);
    //   // if (account.provider === 'github') {
    //     console.log('here first');
        
    //     const res = await fetch('https://api.github.com/user/emails', {
    //       headers: { Authorization: `token ${account.accessToken}` },
    //     })
    //     console.log('here');
        
    //     const emails = await res.json()
    //     console.log('emails', emails)
    //     if (emails?.length > 0) {
    //       profile.email = emails.sort((a, b) => b.primary - a.primary)[0].email
    //       user.email = profile.email
    //       console.log('profile.email', profile.email);
    //     }
    //     return true
    //   }
    // }

     
  // jwt: async (token, user, account, profile, isNewUser) => {
  //     //  "user" parameter is the object received from "authorize"
  //     //  "token" is being send below to "session" callback...
  //     //  ...so we set "user" param of "token" to object from "authorize"...
  //     //  ...and return it...
  //     user && (token.user = user);
  //     return Promise.resolve(token)   // ...here
  // },
  // session: async (session, user) => {
  //     //  "session" is current session object
  //     //  below we set "user" param of "session" to value received from "jwt" callback
  //     console.log('user', user);
      
  //     session.user = user.user;
  //     return Promise.resolve(session)
  // },


    // signIn: async (user, account, profile) => {
    //   // console.log('profile', profile);
    //   // console.log('account', profile);
    //   // if (account.provider === 'github') {
        
    //   const res = await fetch('https://api.github.com/user/emails', {
    //     headers: { Authorization: `token ${account.accessToken}` },
    //   })
      
    //   const emails = await res.json()
    //   console.log('emails', emails)
    //   if (emails?.length > 0) {
    //     profile.email = emails.sort((a, b) => b.primary - a.primary)[0].email
    //     user.email = profile.email
    //     // user.session = 
    //     console.log('profile.email', profile.email);
    //   }
    //   console.log('user email', user.email);
    //   Promise.resolve(user);
    //   return true
    //   // }
    // },

    // async session(session, token) {
    //   session.user = token.user;
    //   return session;
    // },
  },
  
};

export default (req, res) => NextAuth(req, res, options);