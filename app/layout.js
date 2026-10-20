import Navigation from "./components/navigation";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <Navigation/>
        {children}</body>
    </html>
  );
}
