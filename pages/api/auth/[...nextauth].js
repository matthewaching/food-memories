import NextAuth from 'next-auth';
import Email from 'next-auth/providers/email';
import prisma from '../../../src/client';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Email({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);
