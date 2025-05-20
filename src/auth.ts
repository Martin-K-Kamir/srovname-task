import Google from "next-auth/providers/google";
import NextAuth from "next-auth";

export const {
    auth,
    handlers: { GET, POST },
    signIn,
    signOut,
} = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_AUTH_ID,
            clientSecret: process.env.GOOGLE_AUTH_SECRET,
        }),
    ],
    callbacks: {
        authorized({ auth }) {
            return !!auth?.user;
        },
        redirect({ url, baseUrl }) {
            if (url.includes("/auth/login")) return baseUrl;
            return url;
        },
    },
    pages: {
        signIn: "/",
    },
});
