import type { Metadata } from "next";
import localFont from "next/font/local";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/utils/QueryClientUtility";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import "mantine-datatable/styles.css";

import "@/styles/globals.css";
import { ModalsProvider } from "@mantine/modals";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ConnectionStatus from "@/hooks/useConnectionStatus";

export const metadata: Metadata = {
  title: {
    template: "RosaHub | %s",
    default: "RosaHub",
  },
  icons: {
    icon: "/",
  },
};

const ItalianaFont = localFont({
  src: "../../public/fonts/Italiana-Regular.ttf",
  variable: "--font-italiana",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const LatoFont = localFont({
  src: "../../public/fonts/Lato-Regular.ttf",
  variable: "--font-lato",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const BarlowFont = localFont({
  src: "../../public/fonts/Barlow-Regular.ttf",
  variable: "--font-barlow",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ItalianaFont.variable} ${LatoFont.variable} ${BarlowFont.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <MantineProvider>
            <ModalsProvider>{children}</ModalsProvider>

            <ScrollToTop />
            <ConnectionStatus />
            
            <Notifications position="top-right" className="w-[calc(100vw-2rem)] max-w-lg" />
          </MantineProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
