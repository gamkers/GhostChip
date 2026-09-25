import type { Metadata } from "next";
import "./globals.css";
import ScreenGlitch from "@/components/ScreenGlitch";

export const metadata: Metadata = {
  title: "GhostChip — ESP32-S3 Cyber-Security & Automation Toolkit",
  description:
    "GhostChip is a pocket-sized ESP32-S3 USB HID, WiFi, BLE and automation toolkit with AI-assisted scripting, local web control, MicroSD storage and more.",
  keywords: [
    "GhostChip", "ESP32-S3", "USB HID", "DuckyScript", "rubber ducky", "BadUSB",
    "WiFi scanner", "BLE scanner", "pen testing", "automation", "GAMKERS"
  ],
  openGraph: {
    title: "GhostChip — The Ghost In The Machine",
    description: "Pocket-sized ESP32-S3 cyber-security & automation toolkit. Zero apps. Zero cloud. Pure local command.",
    type: "website",
  },
  themeColor: "#050505",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScreenGlitch />
        <script src="/ghost.js" type="module"></script>
        {children}
      </body>
    </html>
  );
}
