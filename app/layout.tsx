import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, serverUrl } from "@/lib/constants";
import { ThemeProvider } from "next-themes";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
   subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    // %s represnts the page title coming from children components
    // | represents the separator
    // template is used to format the title
    // default is used when no title is provided by the page or coming from the children components
    template:`%s | ${APP_NAME}`,
    default: `${APP_NAME}`,
  },
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(serverUrl)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
         attribute='class'
         defaultTheme='light'
         enableSystem
         disableTransitionOnChange
         >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
