
import "./globals.css";

export const metadata = {
  title: "T2G Globe AI Assistant",
  description: "AI chatbot powered by ElevenLabs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}