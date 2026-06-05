
import "./globals.css";
import AnnouncementBar from "@/components/common/AnnouncementBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        {children}
      </body>
    </html>
  );
}
