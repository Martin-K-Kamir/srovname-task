import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Task App",
    description: "A simple users list app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex min-h-svh bg-zinc-900 text-zinc-50 antialiased">
                {children}
            </body>
        </html>
    );
}
