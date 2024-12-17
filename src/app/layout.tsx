import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Yohannes Dev",
    description: "Personal Portfolio App",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="dark" lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable}  ${geistMono.variable} ${jetBrainsMono} antialiased bg-black`}
            >
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <HeroHighlight containerClassName="h-screen">
                        <div className="h-screen w-screen flex items-center">
                            <div className="h-full w-full flex-1 flex items-center justify-center overflow-scroll">
                                {children}
                            </div>
                            <div>
                                <Navigation />
                            </div>
                        </div>
                    </HeroHighlight>
                </ThemeProvider>
            </body>
        </html>
    );
}
